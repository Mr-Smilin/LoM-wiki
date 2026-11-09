/**
 * 搜尋引擎切換 + Pagefind 結果對映。
 *
 * 現狀:Algolia 免費方案每月 10000 次 search request,流量一高就會在月中用完,
 * 之後 Algolia 回 403「Operations quota exceeded」。那時 DocSearch 的行為是
 * **整個下拉選單都不會打開**(DocSearchModal 只在 error.name === 'RetryError'
 * 時才 setStatus('error'),而 403 是 ApiError;autocomplete-core 的 onInput
 * 沒有 catch,setCollections 不會被呼叫),所以使用者只會看到搜尋框沒反應,
 * 連我們自訂的 errorScreen 文案都不會出現。
 *
 * 這支模組讓 Pagefind 可以頂替上去:把 Pagefind 的查詢結果包成 Algolia 的
 * 回應格式,DocSearch 的 UI 完全不需要改,自訂翻譯、鍵盤操作、最近搜尋都留著。
 *
 * ── 行為 ────────────────────────────────────────────────────────────
 * 預設走 Algolia。收到 403(額度用盡)就記一個旗標改走 Pagefind,
 * 旗標到下個月 1 號(UTC,也就是 Algolia 重置的時間)失效。
 * 其他原因的 403 只擋 6 小時,免得設定修好了還要等一個月。
 *
 * 另外有一個手動開關,可以不等 403 就強制指定引擎:
 *
 *     https://.../LoM-wiki/?search=pagefind   → 之後都走 Pagefind(記在 localStorage)
 *     https://.../LoM-wiki/?search=algolia    → 之後都走 Algolia
 *     https://.../LoM-wiki/?search=auto       → 清掉,回到預設行為
 *
 * 這個開關要長期留著 —— 自動 fallback 一個月只會觸發一次,平常沒人跑的
 * 程式碼很容易壞掉而沒人發現,留著開關才測得到。
 */

// 收到 403 時自動切換到 Pagefind。設成 false 可以暫時關掉自動切換
// (那時 403 只會在 console 留下警告,行為跟改這包之前一樣)。
const AUTO_FALLBACK_ON_403 = true;

const BASE = import.meta.env.BASE_URL || "/";
const ENGINE_KEY = "lom-search-engine";
const FALLBACK_KEY = "lom-search-fallback-until";

/** DocSearch 一次要 20 筆(hitsPerPage: 20),這裡對齊 */
const MAX_HITS = 20;

/**
 * hierarchy.lvl0 是 DocSearch 用來分組的欄位。Algolia 那邊是 scraper 從
 * 側邊欄抓當前段落,Pagefind 沒有對應概念,所以用路徑第一層推,文字沿用
 * config.mjs 裡 nav 的用詞,這樣兩邊的分組標題盡量一致。
 */
const SECTION_LABELS = {
	people: { "zh-tw": "人物", "zh-hans": "人物", en: "People", ja: "人物" },
	system: { "zh-tw": "系統", "zh-hans": "系统", en: "System", ja: "システム" },
	event: { "zh-tw": "事件", "zh-hans": "事件", en: "Event", ja: "イベント" },
	other: { "zh-tw": "其他", "zh-hans": "其他", en: "Other", ja: "その他" },
	develop: {
		"zh-tw": "協助編輯",
		"zh-hans": "协助编辑",
		en: "Assisted Editor",
		ja: "編集に参加",
	},
};
/**
 * Algolia 的 lvl0 選擇器抓不到任何 active 導覽項時,會用 default_value,
 * 而 ALGOLIA_CONFIG 裡設的就是 "Documentation"。照抄以保持分組一致。
 */
const SECTION_DEFAULT = "Documentation";

/* ──────────────────────────── 小工具 ──────────────────────────── */

function currentLang() {
	if (typeof document === "undefined") return "unknown";
	// Pagefind 內部也是讀 <html lang> 再 toLowerCase,這裡保持一致
	return (document.documentElement.getAttribute("lang") || "unknown").toLowerCase();
}

function readStore(key) {
	try {
		return window.localStorage.getItem(key);
	} catch {
		// 無痕模式 / 封鎖 site data 時會丟錯,當作沒設定
		return null;
	}
}

function writeStore(key, value) {
	try {
		if (value === null) window.localStorage.removeItem(key);
		else window.localStorage.setItem(key, value);
	} catch {
		/* 寫不進去就算了,只是失去記憶效果 */
	}
}

/**
 * GA4 事件。用獨立的事件名稱(而不是把引擎放在參數裡),這樣在
 * 「報表 → 參與度 → 事件」就直接看得到,不需要先去註冊自訂維度。
 */
function gaEvent(name, params) {
	if (typeof window === "undefined") return;
	try {
		if (typeof window.gtag === "function") {
			window.gtag("event", name, params || {});
			return;
		}
		// gtag.js 還沒載完時先推進佇列;本機沒設 GOOGLE_ANALYTICS 時兩者都沒有,直接跳過
		if (Array.isArray(window.dataLayer)) {
			window.dataLayer.push(["event", name, params || {}]);
		}
	} catch {
		/* 統計失敗不能影響搜尋 */
	}
}

/* ──────────────────────── 引擎的選擇邏輯 ──────────────────────── */

/** 讀網址上的 ?search=,順手記進 localStorage 方便連續測試 */
function syncOverrideFromUrl() {
	if (typeof window === "undefined") return;
	let value;
	try {
		value = new URLSearchParams(window.location.search).get("search");
	} catch {
		return;
	}
	if (!value) return;
	if (value === "auto") writeStore(ENGINE_KEY, null);
	else if (value === "pagefind" || value === "algolia") writeStore(ENGINE_KEY, value);
}

/** 403 之後記下「這段時間內別再打 Algolia」 */
function fallbackActive() {
	const until = Number(readStore(FALLBACK_KEY) || 0);
	if (!until) return false;
	if (Date.now() >= until) {
		writeStore(FALLBACK_KEY, null);
		return false;
	}
	return true;
}

/**
 * 額度用盡的話,到下個月 1 號(UTC)才需要重試 —— 那是 Algolia 重置的時間。
 * 其他原因的 403(例如 API key 被改掉)就只擋 6 小時,免得設定修好了還要等一個月。
 */
function fallbackExpiry(message) {
	const now = new Date();
	if (/quota/i.test(message || "")) {
		return Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1);
	}
	return now.getTime() + 6 * 60 * 60 * 1000;
}

function currentEngine() {
	const override = readStore(ENGINE_KEY);
	if (override === "pagefind" || override === "algolia") return override;
	return fallbackActive() ? "pagefind" : "algolia";
}

/* ────────────────────────── Pagefind ────────────────────────── */

let pagefind = null; // { mod, lang }
let entryPromise = null; // pagefind-entry.json(只有 0.4 KB)

/**
 * 這個語系到底有沒有索引?
 *
 * 一定要自己先檢查,不能直接丟給 Pagefind —— 它的 findIndex 找不到語系時,
 * 最後一步會退回「頁數最多的那個語系」:
 *
 *     let index = this.languages[language];              if (index) return index;
 *     index = this.languages[language.split("-")[0]];    if (index) return index;
 *     let topLang = Object.values(this.languages).sort((a,b) => b.page_count - a.page_count);
 *     if (topLang[0]) return topLang[0];
 *
 * 我們照 ALGOLIA_CONFIG 的 stop_urls 把 /en/* 整個排除在索引外,所以英文版
 * 頁面會命中最後那一步 —— 實測會回一堆 /zh-hans/ 的簡體結果。Algolia 那邊
 * 是 facetFilters: ["lang:en"],結果是乾淨的零筆。
 *
 * 所以這裡只實作前兩步(精確比對 + 主語言比對),沒有索引就回空,不要給
 * 使用者看語言不對的結果。
 */
async function hasIndexForLang(lang) {
	if (!entryPromise) {
		entryPromise = fetch(`${BASE}pagefind/pagefind-entry.json`)
			.then((r) => (r.ok ? r.json() : null))
			.catch(() => null);
	}
	const entry = await entryPromise;
	if (!entry || !entry.languages) return true; // 讀不到就別擋,讓 Pagefind 自己試
	return Boolean(entry.languages[lang] || entry.languages[lang.split("-")[0]]);
}

async function getPagefind() {
	const lang = currentLang();

	// 跨語系做過 client-side 換頁的話,Pagefind 還抓著舊語系的索引。
	// destroy() 會把它內部的 singleton 清成 undefined,下次 search() 會用
	// 當下的 <html lang> 重建。
	if (pagefind && pagefind.lang !== lang) {
		try {
			await pagefind.mod.destroy();
		} catch {
			/* ignore */
		}
		pagefind = null;
	}

	if (!pagefind) {
		// 路徑是執行時才算出來的,要讓 Vite 不要去靜態分析它
		const mod = await import(/* @vite-ignore */ `${BASE}pagefind/pagefind.js`);
		// basePath 其實 Pagefind 自己從 import.meta.url 推得出來,寫明只是保險
		await mod.options({ basePath: `${BASE}pagefind/` });
		pagefind = { mod, lang };
	}
	return pagefind.mod;
}

/**
 * Pagefind 用零寬空格(U+200B)標分詞邊界,顯示前要去掉。
 * 另外對齊 ALGOLIA_CONFIG 的 `"strip_chars": " .,;:#"` —— scraper 會把這些
 * 字元從每個值的頭尾去掉,例如標題結尾的錨點 "#" 和多餘的句點。
 */
function clean(text) {
	return (text || "")
		.replace(/​/g, "")
		.replace(/^[\s.,;:#]+/, "")
		.replace(/[\s.,;:#]+$/, "");
}

/**
 * 對齊 Algolia 的 lvl0。它的選擇器是
 *     .sidebar-heading.active, .VPNavBarMenuLink.active,
 *     .VPNavBarMenuGroup .VPNavBarMenuGroupButton.active
 * 也就是「當前被標為 active 的頂層導覽項」(.sidebar-heading 是 VitePress 0.x
 * 的 class,現在的版面已經沒有了,所以實際生效的只有導覽列那兩個)。
 *
 * 所以 lvl0 的粒度就是導覽列的五個項目,用路徑推得出來。有一個地方要照
 * config.mjs 的 activeMatch 來:「其他」那一項的 activeMatch 是 "/guide/",
 * 不是 "/other/" —— 所以 /other/guide/* 會 active,但 /other/news 不會,
 * 後者在 Algolia 那邊會落到 default_value。
 */
function sectionLabel(url, lang) {
	const rest = url.startsWith(BASE) ? url.slice(BASE.length) : url.replace(/^\//, "");
	const parts = rest.split("/").filter(Boolean);
	// 語系前綴(zh-hans / ja)佔掉路徑第一層時要往後挪一格
	const offset = parts[0] && SECTION_LABELS[parts[0]] ? 0 : 1;
	const head = parts[offset];
	const table = SECTION_LABELS[head];
	if (!table) return SECTION_DEFAULT;
	// 「其他」只在 /guide/ 底下才算 active
	if (head === "other" && parts[offset + 1] !== "guide") return SECTION_DEFAULT;
	return table[lang] || table["zh-tw"];
}

/**
 * 把 Pagefind 的結果包成 DocSearch 看得懂的 hit。
 *
 * DocSearch 的 Results.js 實際只用這幾個欄位:
 *     item.objectID            → React key
 *     item.type                → 'lvl1' | 'lvl2'…'lvl6' | 'content'
 *     item.hierarchy[item.type] → 必須是 truthy,否則整列不會渲染
 *     item.hierarchy.lvl1      → 顯示在標題下方的所屬頁面
 *     item.content             → 內容摘要
 *     item.url                 → 連結(VitePress 的 transformItems 會再轉成相對路徑)
 * Snippet 取的是 `_snippetResult.<attribute>.value`,取不到會退回該欄位本身,
 * 所以只有想要 highlight 的 content 需要給 _snippetResult。
 *
 * 刻意不給 queryID:plugin 的 isAlgoliaInsightsHit 需要
 * objectID && __autocomplete_indexName && __autocomplete_queryID 三個都有才送事件,
 * 少了 queryID 就會安靜跳過,不會拿假的 queryID 去污染 Algolia 的點擊統計。
 */
async function toAlgoliaHits(results, lang) {
	const hits = [];
	for (const result of results.slice(0, MAX_HITS)) {
		let data;
		try {
			data = await result.data();
		} catch {
			continue;
		}
		// meta.title 取的是 root 裡第一個 <h1>。有些頁面根本沒有 h1 ——
		// 江湖快報是 "## " 開頭、/other/guide/* 的標題只寫在 frontmatter ——
		// 那 Algolia 的 ".VPContent h1" 也一樣抓不到,lvl1 在它那邊同樣是空的。
		// 所以這裡保持一致留空,不要硬塞 URL 進去充當標題。
		const pageTitle = clean(data.meta && data.meta.title);
		const lvl0 = sectionLabel(data.url, lang);
		const subs =
			data.sub_results && data.sub_results.length
				? data.sub_results
				: [{ url: data.url, title: pageTitle, excerpt: data.excerpt }];

		for (const sub of subs) {
			const element = (sub.anchor && sub.anchor.element) || "";
			const level = /^h([1-6])$/.exec(element);
			const heading = clean(sub.title) || pageTitle;
			// ALGOLIA_CONFIG 的 selectors 只到 lvl5(沒有 lvl6),所以這裡
			// 也只開到 lvl5,h6 一併歸到 lvl5
			const hierarchy = {
				lvl0,
				lvl1: pageTitle || null,
				lvl2: null,
				lvl3: null,
				lvl4: null,
				lvl5: null,
			};

			// h1 視為頁面本身;h2~h5 當成頁內段落,跟 Algolia 的 lvl 結構對齊
			let type = "lvl1";
			if (level && level[1] !== "1") {
				type = `lvl${Math.min(Number(level[1]), 5)}`;
				hierarchy[type] = heading;
			}

			// DocSearch 的 Results.js 要 `item.hierarchy[item.type]` 是 truthy
			// 才會渲染那一列,是空的就變成一列空白。這種頁面在 Algolia 那邊
			// 本來也不會有對應的記錄,所以直接跳過。
			if (!hierarchy[type]) continue;

			hits.push({
				objectID: sub.url,
				type,
				url: sub.url,
				hierarchy,
				content: clean(sub.plain_excerpt) || null,
				// excerpt 已經是 Pagefind 包好 <mark> 的 HTML,剛好就是 DocSearch
				// 預設的 highlightPreTag/highlightPostTag,不用再轉換。
				// 註:DocSearch 是用 dangerouslySetInnerHTML 塞進去的,跟 Algolia
				// 走的是同一條路,所以風險模型沒有變 —— 內容都來自我們自己的 repo。
				_snippetResult: {
					content: { value: sub.excerpt || "", matchLevel: "full" },
				},
			});
			if (hits.length >= MAX_HITS) break;
		}
		if (hits.length >= MAX_HITS) break;
	}
	return hits;
}

/** 包成 Algolia multipleQueries 的回應外殼 */
function emptyResult(request, query) {
	return {
		hits: [],
		nbHits: 0,
		nbPages: 0,
		page: 0,
		hitsPerPage: MAX_HITS,
		processingTimeMS: 0,
		exhaustiveNbHits: true,
		query: query || "",
		params: "",
		index: request && request.indexName,
	};
}

async function searchWithPagefind(requests) {
	const lang = currentLang();
	const query = ((requests && requests[0] && requests[0].query) || "").trim();
	if (!query) {
		return { results: requests.map((r) => emptyResult(r, query)) };
	}

	// 這個語系沒有索引(目前是英文版)就直接回空,不要讓 Pagefind 退回
	// 其他語系。順便也省掉載入 wasm 的那 100 多 KB。
	if (!(await hasIndexForLang(lang))) {
		gaEvent("search_with_pagefind", {
			page_count: 0,
			hit_count: 0,
			query_length: query.length,
			no_index_for_lang: lang,
		});
		return { results: requests.map((r) => emptyResult(r, query)) };
	}

	const started = Date.now();
	const mod = await getPagefind();
	const found = await mod.search(query);
	const hits = await toAlgoliaHits(found.results, lang);

	gaEvent("search_with_pagefind", {
		// Pagefind 回的是「頁面」數,DocSearch 列出的是頁內段落(sub_results),
		// 兩個數字不一樣,所以都記下來
		page_count: found.results.length,
		hit_count: hits.length,
		query_length: query.length,
	});

	const first = {
		...emptyResult(requests[0], query),
		hits,
		nbHits: found.results.length,
		nbPages: 1,
		processingTimeMS: Date.now() - started,
	};
	// DocSearch 只讀 results[0],其餘查詢(目前不會有)回空殼就夠
	return { results: [first, ...requests.slice(1).map((r) => emptyResult(r, query))] };
}

/* ───────────────────────── 對外的入口 ───────────────────────── */

function isQuotaError(error) {
	// algoliasearch v4 的 isRetryable 對 4xx 回 false,所以 403 會直接拋
	// ApiError 上來,不會重試四台 host。status 在 error.status。
	const status = error && (error.status || error.statusCode);
	return status === 403;
}

async function search(requests, runAlgolia) {
	const engine = currentEngine();

	if (engine === "pagefind") {
		return searchWithPagefind(requests);
	}

	try {
		const response = await runAlgolia();
		const first = response && response.results && response.results[0];
		gaEvent("search_with_algolia", {
			hit_count: (first && first.nbHits) || 0,
			query_length: ((requests[0] && requests[0].query) || "").length,
		});
		return response;
	} catch (error) {
		if (!isQuotaError(error)) throw error;

		const message = (error && error.message) || "";
		const until = fallbackExpiry(message);

		gaEvent("search_engine_fallback", {
			error_status: 403,
			// 訊息會是 "Operations quota exceeded, change plan to get more Operations"
			// 之類的,截短避免超過 GA4 參數長度上限(100 字元)
			error_message: message.slice(0, 90),
			auto_fallback_enabled: AUTO_FALLBACK_ON_403,
		});

		if (!AUTO_FALLBACK_ON_403) {
			// 還沒開自動切換,維持原本行為(搜尋框沒反應),但 console 留個線索
			console.warn(
				"[LoM-wiki] Algolia 回 403,可能是搜尋額度用盡:",
				message,
				"\n要改用 Pagefind 請在網址加上 ?search=pagefind"
			);
			throw error;
		}

		writeStore(FALLBACK_KEY, String(until));
		return searchWithPagefind(requests);
	}
}

export function setupSearchEngine() {
	if (typeof window === "undefined") return;
	syncOverrideFromUrl();
	// config.mjs 的 transformSearchClient 會來找這個物件。
	// 那個函式是被序列化成字串、在瀏覽器用 new Function() 還原的,裡面不能
	// import 任何東西,所以邏輯放在這支模組,只透過 window 交握。
	window.__lomSearch = { search, currentEngine };
}
