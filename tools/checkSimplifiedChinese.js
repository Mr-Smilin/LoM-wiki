// 扫描两处:
// 1. docs/zh-hans/ 生成物 (最终简体 Markdown)
// 2. docs/.vitepress/theme/ 共享组件中 zh-hans 实际会显示的字符串
//    (i18n 字典里的 "zh-hans": "..." 值, 以及 localeIndex === "zh-hans" ? "..." 三元分支)
// 发现残留时 exit 1 并逐字列出命中位置，干净时 exit 0。
//
// 扫描前剥离以下 token (与 buildSimplifiedChinese.js 的保护规则一致):
// - Markdown 链接/图片目标、HTML href/src 属性值、链接参照定义、http(s) URL:
//   URL 路径保持繁体文件名属正常 (如 /images/.../菜雞預覽教學01.webp)
// - 代码块中的路径 token (含 / 的绝对/相对路径)
// code fence 与 inline code 中的中文文本在生成器中会被转换, 因此也在扫描范围内。
//
// OpenCC 单字表的已知误报 (这些字在简体语境是正确写法) 记录在 CHAR_WHITELIST，
// 若出现新的误报请直接补充该表。

const fs = require("fs");
const path = require("path");
const OpenCC = require("opencc-js");

const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "docs", "zh-hans");

// 台湾繁体 → 大陆简体, 与生成器相同
const convert = OpenCC.Converter({ from: "twp", to: "cn" });

// OpenCC 未覆盖的台湾惯用异体字 (与生成器共用同一张表, 命中即算残留)
const VARIANTS = require("./zhHansVariantMap");

// 单字转换的已知误报: 么 (什么/怎么)、著 (著名/著作, 大陆规范保留)、
// 乾 (乾坤/乾隆, qián 读音保留)、吒 (哪吒)
const CHAR_WHITELIST = new Set(["么", "著", "乾", "吒"]);

// 剥离 URL / 链接目标 / 属性值 / 路径 token 后的待扫描文本
function stripProtected(text) {
    return text
        .replace(/!?\[[^\]]*\]\([^)\s]+(\s*"[^"]*")?\)/g, (m) => m.replace(/\(.*/, "()"))
        .replace(/\b(?:href|src)="[^"]+"/g, "")
        .replace(/https?:\/\/[^\s)"'<]+/g, "")
        .replace(/(?:~|\.{1,2})?\/[^\s"'`<>]+/g, "")
        .replace(/^\s{0,3}\[(?!\^)[^\]]+\]:[ \t]*\S+\s*$/gm, "");
}

const hits = new Map(); // char -> { to, count, samples: [file:line] }
function recordChar(ch, rel, lineNo) {
    if (ch.codePointAt(0) < 0x2e80 || CHAR_WHITELIST.has(ch)) return;
    const c = VARIANTS[ch] || convert(ch);
    if (c === ch) return;
    if (!hits.has(ch)) hits.set(ch, { to: c, count: 0, samples: [] });
    const h = hits.get(ch);
    h.count++;
    if (h.samples.length < 3) h.samples.push(`${rel}:${lineNo}`);
}

// 扫描生成的简体 Markdown
function scanFile(file, rel) {
    const scanned = stripProtected(fs.readFileSync(file, "utf8"));
    const lines = scanned.split("\n");
    for (let i = 0; i < lines.length; i++) {
        for (const ch of lines[i]) {
            recordChar(ch, rel, i + 1);
        }
    }
}

// 扫描共享组件中 zh-hans 分支的字符串 ("zh-hans": "..." / localeIndex === "zh-hans" ? "...", 单双引号均可)
function scanComponent(file, rel) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    const RE =
        /"zh-hans":\s*"((?:[^"\\]|\\.)*)"|'zh-hans':\s*'((?:[^'\\]|\\.)*)'|===\s*"zh-hans"\s*\?\s*"((?:[^"\\]|\\.)*)"|===\s*'zh-hans'\s*\?\s*'((?:[^'\\]|\\.)*)'/g;
    for (let i = 0; i < lines.length; i++) {
        for (const m of lines[i].matchAll(RE)) {
            for (const ch of m[1] || m[2] || m[3] || m[4] || "") {
                recordChar(ch, rel, i + 1);
            }
        }
    }
}

function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) {
            walk(p);
        } else if (e.name.endsWith(".md")) {
            scanFile(p, path.relative(ROOT, p));
        }
    }
}

function walkComponents(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) {
            walkComponents(p);
        } else if (/\.(vue|js)$/.test(e.name) && !COMPONENT_SCAN_EXCLUDE.has(p)) {
            scanComponent(p, path.relative(ROOT, p));
        }
    }
}

// 生成物不纳入组件扫描 (wikiLinkIndex 的 "zh-hans" 值是页面路径, 繁体文件名属正常)
const COMPONENT_SCAN_EXCLUDE = new Set([
    path.join(ROOT, "docs", ".vitepress", "theme", "script", "wikiLinkIndex.js"),
]);

if (!fs.existsSync(DIR)) {
    console.error("docs/zh-hans 不存在，请先运行 node ./tools/buildSimplifiedChinese.js");
    process.exit(2);
}

walk(DIR);
walkComponents(path.join(ROOT, "docs", ".vitepress", "theme"));

if (hits.size === 0) {
    console.log("checkSimplifiedChinese: 未发现残留繁体字 (docs/zh-hans 与共享组件 zh-hans 字符串均干净)");
    process.exit(0);
}

console.error("checkSimplifiedChinese: 发现残留繁体字:");
for (const [ch, h] of [...hits.entries()].sort((a, b) => b[1].count - a[1].count)) {
    console.error(`  ${ch} → ${h.to}  x${h.count}  (${h.samples.join(", ")})`);
}
console.error(`共 ${hits.size} 个不同字符。如为 OpenCC 单字表误报，请加入本脚本 CHAR_WHITELIST。`);
process.exit(1);
