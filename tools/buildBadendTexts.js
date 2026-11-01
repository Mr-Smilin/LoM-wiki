// 從各語系的生死簿列表頁 (event/badends/index.md) 抽出「結局名稱 + 結局文字」,
// 產生生死簿圖片產生器的範本資料 docs/public/json/badend_texts.json (生成物, 已 gitignore)。
// 需在 buildSimplifiedChinese.js 之後執行 (zh-hans 頁面由它生成)。
// 英文站沒有生死簿列表頁, 產生器端會回退繁中。
const fs = require("fs");

const SOURCES = {
    zh: "./docs/event/badends/index.md",
    "zh-hans": "./docs/zh-hans/event/badends/index.md",
    ja: "./docs/ja/event/badends/index.md",
};
const OUT = "./docs/public/json/badend_texts.json";

// <br> 視為遊戲內的換列, 其餘 tag (角色 Icon 等) 只留文字, markdown 連結只留文字
const clean = (s) => s
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<rt>[\s\S]*?<\/rt>/g, "") // 日文振假名不上圖
    .replace(/<[^>]+>/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .split("\n").map((l) => l.trim()).filter(Boolean).join("\n");

function parse(md) {
    // 以每列的 id 錨點切段, 避免備註欄裡引用其他結局的 BadendIcon 干擾
    return md.split(/<td id="生死簿-No\./).slice(1).map((chunk) => {
        const no = parseInt(chunk, 10);
        const cells = [...chunk.matchAll(/<td>([\s\S]*?)<\/td>/g)].map((m) => m[1]);
        return {
            no,
            // 日文站標題附原文 "斬死 (砍死)", 遊戲畫面只顯示譯名
            title: clean(cells[0] ?? "").replace(/\s*\([^()]*\)$/, ""),
            text: clean(cells[1] ?? ""),
        };
    }).filter((e) => e.no && e.title);
}

const out = {};
for (const [lang, file] of Object.entries(SOURCES)) {
    if (fs.existsSync(file)) out[lang] = parse(fs.readFileSync(file, "utf8"));
}
fs.writeFileSync(OUT, JSON.stringify(out), "utf8");
console.log("badend_texts.json:", Object.entries(out).map(([k, v]) => `${k}=${v.length}`).join(", "));
