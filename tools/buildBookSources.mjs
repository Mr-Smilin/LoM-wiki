// 秘笈列表（docs/system/books/index.md）的「獲得方式」欄：把每本書頁「## 獲得方式」那節原樣組成
// docs/system/books/_sources.md，列表頁在 <BookList> 裡引入，一本一個 <template v-slot:src-代號>。
// 獲得方式因此只寫在書頁一個地方。這個檔是產生物：.gitignore 排除、config.mjs 的 srcExclude 不把它當成一頁，不要手改。
//
// 要排在 buildSimplifiedChinese.js 之前跑，簡中才會跟著轉一份 docs/zh-hans/system/books/_sources.md。
// 只在 dev／build 開始時產生一次：dev 開著時改了書頁的獲得方式，列表要重開 dev 才會更新。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sourceSection } from "../docs/.vitepress/theme/script/bookSources.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, "docs", "system", "books");
const OUT = path.join(DIR, "_sources.md");

const HEADER =
    "<!-- 這個檔是 tools/buildBookSources.mjs 產生的，不要手改：內容取自各書頁的「## 獲得方式」，給秘笈列表頁引入。 -->";

const files = fs
    .readdirSync(DIR)
    .filter((file) => /^book_\d+\.md$/.test(file))
    .sort((a, b) => parseInt(a.slice(5), 10) - parseInt(b.slice(5), 10));

const parts = [HEADER];
const missing = [];
for (const file of files) {
    const no = file.match(/\d+/)[0];
    const section = sourceSection(fs.readFileSync(path.join(DIR, file), "utf8"));
    if (!section) {
        missing.push(file);
        continue;
    }
    // 前後空一行：<template> 才會單獨成一個 HTML 區塊，裡面的清單、連結照 markdown 轉
    parts.push(`<template v-slot:src-${no}>\n\n${section}\n\n</template>`);
}

fs.writeFileSync(OUT, parts.join("\n\n") + "\n", "utf8");
console.log(`Book sources: ${files.length - missing.length}/${files.length} books -> docs/system/books/_sources.md`);
if (missing.length) console.log(`  沒有「## 獲得方式」（列表那格空白）：${missing.join("、")}`);
