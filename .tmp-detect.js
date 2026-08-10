// 检测 zh-cn 生成物中非保护区域残留的繁体字
const fs = require("fs");
const path = require("path");
const OpenCC = require("opencc-js");

const DIR = "C:/Users/mohui666/LoM-wiki-CNS/docs/zh-cn";
const convert = OpenCC.Converter({ from: "twp", to: "cn" });

function stripProtected(body) {
    const lines = body.split("\n");
    const out = [];
    let fence = null;
    for (const line of lines) {
        const f = line.match(/^\s*(`{3,}|~{3,})/);
        if (f) {
            if (fence === null) fence = f[1][0];
            else if (f[1][0] === fence && /^\s*(`{3,}|~{3,})\s*$/.test(line)) fence = null;
            continue;
        }
        if (fence) continue;
        out.push(
            line
                .replace(/`+[^`]*?`+/g, "")
                .replace(/!?\[[^\]]*\]\([^)\s]+(\s*"[^"]*")?\)/g, (m) => m.replace(/\(.*/, "()"))
                .replace(/\b(?:href|src)="[^"]+"/g, "")
        );
    }
    return out.join("\n");
}

const hits = new Map(); // char -> {count, samples:Set}
function scanFile(file) {
    let text = fs.readFileSync(file, "utf8");
    const fm = text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
    if (fm) text = fm[0] + "\n" + stripProtected(text.slice(fm[0].length));
    else text = stripProtected(text);
    for (const ch of text) {
        if (ch.codePointAt(0) < 0x2e80) continue;
        const c = convert(ch);
        if (c !== ch && ch !== "么") { // 么: 什么/这么 的简体字形, OpenCC 单字表误报为 幺
            if (!hits.has(ch)) hits.set(ch, { to: c, count: 0, files: new Set() });
            const h = hits.get(ch);
            h.count++;
            h.files.add(path.basename(file));
        }
    }
}

function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (e.name.endsWith(".md")) scanFile(p);
    }
}
walk(DIR);

const sorted = [...hits.entries()].sort((a, b) => b[1].count - a[1].count);
for (const [ch, h] of sorted) {
    console.log(`${ch} -> ${h.to}  x${h.count}  [${[...h.files].slice(0, 4).join(", ")}]`);
}
console.log("distinct chars:", sorted.length);
