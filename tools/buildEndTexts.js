// 從各語系的汗青書結局頁 (event/ends/end-*.md) 的 <EndBackground> 抽出「編號 + 結局名稱 + 結局文字」,
// 產生汗青書圖片產生器的範本資料 docs/public/json/end_texts.json。
// 結局文字很少變動, json 直接進 git, 不在 build 時跑; 結局頁有改再手動執行:
//   node tools/buildSimplifiedChinese.js && node tools/buildEndTexts.js  (zh-hans 頁面由前者生成)
// 缺頁的語系 (如英文站) 產生器端會回退繁中。
const fs = require("fs");
const path = require("path");

const SOURCES = {
    zh: "./docs/event/ends",
    "zh-hans": "./docs/zh-hans/event/ends",
    ja: "./docs/ja/event/ends",
    en: "./docs/en/event/ends",
};
const OUT = "./docs/public/json/end_texts.json";

// 與 wiki 結局頁渲染一致: 只有 <br> 換行 (原文已依遊戲排版斷好), 原始碼換行不算;
// 尾端空行是排版用的補高, 保留。其餘 tag 只留文字
const clean = (s) => s
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/[ \t]*\r?\n[ \t]*/g, " ")
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<rt>[\s\S]*?<\/rt>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&emsp;/g, "\u2003").replace(/&nbsp;/g, "\u00a0")
    .split("\n").map((l) => l.replace(/^ +| +$/g, "")).join("\n") // 全形空白是排版補寬, 不可 trim
    .replace(/^\n+/, "");

function parse(dir) {
    return fs.readdirSync(dir)
        .filter((f) => /^end-\d+\.md$/.test(f))
        .map((f) => {
            const m = fs.readFileSync(path.join(dir, f), "utf8")
                .match(/<EndBackground\s+no=["']?(\d+)["']?\s+title="([^"]*)"\s*>([\s\S]*?)<\/EndBackground>/);
            return m && { no: +m[1], title: m[2].trim(), text: clean(m[3]) };
        })
        .filter((e) => e && e.title)
        .sort((a, b) => a.no - b.no);
}

const out = {};
for (const [lang, dir] of Object.entries(SOURCES)) {
    if (fs.existsSync(dir)) out[lang] = parse(dir);
}
fs.writeFileSync(OUT, JSON.stringify(out), "utf8");
console.log("end_texts.json:", Object.entries(out).map(([k, v]) => `${k}=${v.length}`).join(", "));
