/**
 * 建置 Pagefind 靜態搜尋索引。
 *
 * 在 vitepress build 之後跑,掃 docs/.vitepress/dist 裡的 HTML,把索引寫到
 * dist/pagefind/。Pagefind 沒有後端,產出的就是一包靜態檔案,跟著 GitHub Pages
 * 一起部署就能用,沒有任何查詢次數限制。
 *
 * 用的是 pagefind 的 Node API 而不是 CLI:這個套件的 exports 只給了 import
 * 條件(沒有 require),CJS 的 require.resolve 一律失敗拿不到 bin 的路徑;走
 * npx + shell 又會讓 Node 丟 DEP0190 警告。而且 Node API 可以逐檔餵進去,
 * 才做得到下面那份 SKIP 清單(CLI 的 --glob 不支援排除)。
 *
 * ══ 索引範圍是照 Algolia 的 scraper 設定對齊的 ══════════════════════
 *
 * ALGOLIA_CONFIG(放在 GitHub secret)的對應部分:
 *
 *     "stop_urls": ["…/LoM-wiki/develop.*",
 *                   "…/LoM-wiki/other/test$",
 *                   "…/LoM-wiki/other/test.html$",
 *                   "…/LoM-wiki/en/*"],
 *     "selectors": {
 *       "lvl1": ".VPContent h1",  …  "lvl5": ".VPContent h5",
 *       "content": ".VPContent p, .VPContent li"
 *     },
 *     "scrape_start_urls": false
 *
 * 對應到這裡的三件事:
 *
 * 1. rootSelector = ".VPContent"
 *    Algolia 所有選擇器都掛在 .VPContent 底下,所以把 Pagefind 的根也收到
 *    這裡。順便解決了一堆版面噪音 —— 預設從 <body> 抓的話,連頂部的
 *    「Skip to content / 繁體中文 / 简体中文 / English / 日本語」語系切換
 *    都會進索引(每頁都有)。實測單頁字數 205 → 172。
 *    已確認這樣**不會**影響語系偵測,四個語系照樣各自建索引。
 *
 * 2. SKIP:照 stop_urls 排掉整頁
 *
 * 3. EXCLUDE:.VPContent 裡面 Algolia 的 "p, li" 抓不到的東西
 *
 * ── 刻意沒有完全照抄的兩處(都標在 EXCLUDE 的註解裡)──────────────
 *
 * (a) 沒有排除 <table>。Algolia 的 content 選擇器只有 p 和 li,不含 td,
 *     所以表格內容在 Algolia 是搜不到的。要完全對齊就該加上 "table",
 *     但實測代價很大:/system/skill.html 會少掉 97% 的內容(3234 → 95 字),
 *     /system/books/book_6002.html 少 51%,整體樣本少約 37%。
 *     判斷:讓 Pagefind 成為 Algolia 的**超集**比較好 —— Algolia 找得到的
 *     Pagefind 一定找得到,切換過去不會變少,只會多找到武學效果、書籍效果
 *     這類本來就該搜得到的表格內容。要嚴格對稱的話在 EXCLUDE 加 "table" 即可。
 *
 * (b) 排除了 .post-visitor(「瀏覽數：」那一行)。它是 <p>,所以 Algolia
 *     其實有索引它,但那是版面文字不是內容,每頁都有。排掉它會讓 Pagefind
 *     少一個噪音來源,不會少掉任何真正的內容。
 */

import { createIndex, close } from "pagefind";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(__dirname, "..", "docs", ".vitepress", "dist");
const OUT = path.join(SITE, "pagefind");

/** 對齊 Algolia 的 rootSelector */
const ROOT_SELECTOR = ".VPContent";

/**
 * .VPContent 裡面要排除的東西。
 *
 * 注意 <nav> 和 <footer> Pagefind 會自動略過,所以 .VPDocAsideOutline(nav)
 * 和 .VPDocFooter(footer)不用寫;.VPNav / .VPSidebar / .VPFooter 則是本來
 * 就在 .VPContent 外面,rootSelector 已經處理掉了。
 */
const EXCLUDE = [
	// 貢獻者 + 歷史貢獻。裡面是 div/code/a,沒有 p 或 li,所以 Algolia 也沒有。
	// 不排掉的話 commit hash 和 commit message 會變成可搜尋內容 ——
	// 實測排除前搜 "3596c98" 會回 57 筆。
	".vp-nolebase-git-changelog",
	// 留言區。SSR 時是空的(twikoo 在前端才渲染),排掉是保險。
	"#twikoo",
	// 人物列傳表格的「摺疊」按鈕,是 <button>,Algolia 的 p/li 抓不到。
	".toggle-button",
	// 「瀏覽數：」—— 見上面註解 (b)
	".post-visitor",
	// 要跟 Algolia 嚴格對稱的話,把下面這行取消註解 —— 見上面註解 (a)
	// "table",
];

/**
 * 照 ALGOLIA_CONFIG 的 stop_urls 排掉整頁。路徑是相對 dist 的。
 *
 * 這裡刻意照字面對齊而不是照「看起來的意圖」對齊,因為目標是兩邊結果一致。
 *
 * ⚠ 有一個不對稱要注意:stop_urls 寫的是 "…/LoM-wiki/develop.*",這個
 *   regex 只比對得到根語系的 /develop/*,比對不到 /zh-hans/develop/* 和
 *   /ja/develop/*(URL 中間多了語系前綴)。也就是說簡體和日文版的「協助編輯」
 *   目前**是**在 Algolia 索引裡的。如果本來是想全部排掉,要改的是
 *   ALGOLIA_CONFIG(例如 "…/LoM-wiki/(zh-hans/|ja/|en/)?develop.*"),
 *   順便也要改這份清單。
 */
const SKIP = [
	/^develop\//, // stop_urls: …/LoM-wiki/develop.*
	/^other\/test\.html$/, // stop_urls: …/LoM-wiki/other/test(.html)?$
	/^en\//, // stop_urls: …/LoM-wiki/en/*
	/^index\.html$/, // scrape_start_urls: false —— start_urls 只有站台根目錄
];

function walk(dir, base = dir) {
	const found = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === "pagefind") continue; // 別把上一次的索引當內容
			found.push(...walk(full, base));
		} else if (entry.name.endsWith(".html")) {
			found.push(path.relative(base, full).split(path.sep).join("/"));
		}
	}
	return found;
}

function dirSize(dir) {
	let total = 0;
	let files = 0;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			const sub = dirSize(full);
			total += sub.total;
			files += sub.files;
		} else {
			total += fs.statSync(full).size;
			files += 1;
		}
	}
	return { total, files };
}

function fail(message, errors) {
	console.error(`[pagefind] ${message}`);
	for (const error of errors || []) console.error(`[pagefind]   ${error}`);
	process.exit(1);
}

if (!fs.existsSync(SITE)) fail(`找不到 ${SITE},請先跑 vitepress build`);

// Pagefind **不會**清掉自己的輸出目錄(實測:事先放進去的假 chunk 檔跑完還在)。
// 而 index chunk 的檔名是內容 hash,內容一變檔名就變,所以同一個目錄反覆寫
// 會留下一堆再也用不到的舊 chunk。這裡每次先整個刪掉。
//
// 補充:vitepress build 本身就會清空 outDir(client bundle 那段是
// emptyOutDir: true,拿長期累積的 dist 驗過,沒有任何重複 hash 的資產),
// GitHub Actions 更是每次全新 checkout、dist 根本不存在。這行 rm 是為了
// 本機單獨重跑這支腳本的情況。
fs.rmSync(OUT, { recursive: true, force: true });

const all = walk(SITE);
const skipped = [];
const pages = all.filter((rel) => {
	const hit = SKIP.find((re) => re.test(rel));
	if (hit) skipped.push(rel);
	return !hit;
});

console.log(`[pagefind] 來源:${SITE}`);
console.log(`[pagefind] rootSelector: ${ROOT_SELECTOR}`);
console.log(`[pagefind] 排除選擇器 ${EXCLUDE.length} 個`);
console.log(`[pagefind] HTML ${all.length} 份,照 stop_urls 跳過 ${skipped.length} 份`);

const { index, errors: createErrors } = await createIndex({
	rootSelector: ROOT_SELECTOR,
	excludeSelectors: EXCLUDE,
});
if (!index) fail("建立索引失敗", createErrors);

let indexed = 0;
for (const rel of pages) {
	const res = await index.addHTMLFile({
		sourcePath: rel,
		content: fs.readFileSync(path.join(SITE, rel), "utf8"),
	});
	if (res.errors.length) fail(`讀取 ${rel} 時出錯`, res.errors);
	indexed += 1;
}

const written = await index.writeFiles({ outputPath: OUT });
if (written.errors.length) fail("寫入索引時出錯", written.errors);
await close();

// vitepress dev 不會有 dist,所以本機要測 Pagefind 時把索引另外放一份到
// docs/public/pagefind —— dev server 會把 public 直接對應到網站根目錄,
// 剛好就是前端預期的 /pagefind/ 路徑。這份只給本機用,已加進 .gitignore。
if (process.argv.includes("--dev")) {
	const devOut = path.join(__dirname, "..", "docs", "public", "pagefind");
	fs.rmSync(devOut, { recursive: true, force: true });
	fs.cpSync(OUT, devOut, { recursive: true });
	console.log(`[pagefind] 另外複製一份到 ${path.relative(process.cwd(), devOut)}(dev 用)`);
}

const entry = JSON.parse(fs.readFileSync(path.join(OUT, "pagefind-entry.json"), "utf8"));
const byLang = Object.entries(entry.languages)
	.map(([lang, info]) => `${lang} ${info.page_count}`)
	.join(" / ");
const indexSize = dirSize(OUT);
const siteSize = dirSize(SITE);

console.log(`[pagefind] 索引好了:${indexed} 頁(${byLang})`);
console.log(
	`[pagefind] 索引大小 ${(indexSize.total / 1048576).toFixed(1)} MB / ${indexSize.files} 個檔案`
);
console.log(
	`[pagefind] 整站 ${(siteSize.total / 1048576).toFixed(0)} MB` +
		`(GitHub Pages 上限 1024 MB,目前 ${((siteSize.total / 1073741824) * 100).toFixed(0)}%)`
);
