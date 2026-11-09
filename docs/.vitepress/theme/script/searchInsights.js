/**
 * 讓 Algolia 正確收集搜尋點擊事件(Insights)。
 *
 * ── 為什麼原本收不到 ────────────────────────────────────────────────
 * config.mjs 的 searchParameters 本來就有 `clickAnalytics: true`,所以 Algolia
 * 會為每次查詢產生 queryID 並等著收點擊事件 —— 但 DocSearch 從來沒送過,
 * 後台的點擊率(CTR)報表因此一直是空的。
 *
 * 原因在 @docsearch/react 3.6.0 的 DocSearchModal.js:
 *     insights = _ref$insights === void 0 ? false : _ref$insights;   // 預設 false
 *     var insightsActive = Boolean(insights);
 * VitePress 沒有傳 insights,config 也沒設,所以 insightsActive 一直是 false,
 * onSelect 裡那段 clickedObjectIDsAfterSearch 永遠不會執行。
 *
 * 修法就是在 config.mjs 的 search.options 加上 `insights: true`
 * (VitePress 會把 options 整個 spread 給 docsearch)。注意這個選項**沒有**
 * 寫在 DocSearch v3 的官方 API 文件上(docsearch.algolia.com/docs/v3/api
 * 只列到 transformSearchClient),但 3.6.0 的原始碼確實支援,並且會往下傳給
 * @algolia/autocomplete-core 1.9.3 的 insights 選項:
 *     if (options.insights && !props.plugins.some(p => p.name === 'aa.algoliaInsightsPlugin')) {
 *         props.plugins.push(createAlgoliaInsightsPlugin(...));
 *     }
 *
 * ── 這支檔案在做什麼 ────────────────────────────────────────────────
 * 只有一件事:把 search-insights 這個套件 import 進來。
 *
 * 關鍵在它的 browser build 匯入時會自己註冊到 window 上
 * (search-insights/dist/search-insights.min.js 的 createInsightsClient):
 *     if (typeof window === "object" && !window.AlgoliaAnalyticsObject) {
 *         for (; t = createUUID(), void 0 !== window[t];);
 *         window.AlgoliaAnalyticsObject = t;
 *         window[window.AlgoliaAnalyticsObject] = e;
 *     }
 * 也就是它會挑一個隨機 UUID 當指標,把 client 掛在 window[UUID]。
 *
 * 而 autocomplete 的 insights plugin 找 client 的順序是
 * (createAlgoliaInsightsPlugin.js):
 *     var pointer = window.AlgoliaAnalyticsObject || 'aa';
 *     insightsClient = window[pointer];
 *     if (!insightsClient) { ...; loadInsights(window); }
 * 所以只要這個套件先被 import 過,plugin 就會直接撿到它,**不會**再去抓
 *     https://cdn.jsdelivr.net/npm/search-insights@2.6.0/dist/search-insights.min.js
 * 少一個第三方 CDN 請求,也避免 CDN 的 2.6.0 跟我們依賴的 2.14.0 版本不一致。
 *
 * 用靜態 import 而不是動態 import,是因為 plugin 建立的時機由使用者決定
 * (打開搜尋框的那一刻)。動態 import 萬一還沒 resolve,就會變成去打 CDN。
 * search-insights 壓縮後只有十幾 KB,不值得為這點大小冒這個風險。
 *
 * ── 為什麼不需要呼叫 aa('init', ...) ────────────────────────────────
 * DocSearch 會把憑證放在每個 hit 的 __autocomplete_algoliaCredentials 上,
 * plugin 的 createSearchInsightsApi 再轉成每次請求的
 *     X-Algolia-Application-Id / X-Algolia-API-Key
 * header 送出。這條路需要 client.version >= 2.4(isModernInsightsClient.js),
 * 我們是 2.14.0,符合。所以 appId / apiKey 不用在前端再寫一份。
 *
 * ── userToken 與隱私 ────────────────────────────────────────────────
 * search-insights 2.x 的建構子預設 _anonymousUserToken = true、
 * _useCookie = false。送事件時會跑:
 *     !this._userToken && this._anonymousUserToken && this.setAnonymousUserToken(true)
 * 也就是自動產生一個 anonymous-<uuid> 當 userToken,但**不寫 cookie**。
 *
 * 效果是「每次重新載入頁面算一個新的匿名使用者」。這對點擊率統計沒有影響
 * (CTR 是以查詢為單位算的),只有 Personalization 這種需要跨 session 追蹤
 * 同一個人的功能才需要 useCookie: true —— 那會寫 cookie,所以這裡刻意保持
 * 預設、不碰 cookie。真的需要的話再改成 insightsClient("init", { useCookie: true }),
 * 並評估是否該先取得使用者同意。
 */

// 這行 import 本身就是重點:它會讓 search-insights 自己註冊到 window 上
import insightsClient from "search-insights";

export function setupSearchInsights() {
	if (typeof window === "undefined") return;

	// 正常情況下 import 的 side effect 已經處理好了,這裡只是補保險:
	// 萬一哪天上游改掉自動註冊的行為,至少還有 window.aa 這條路可以被 plugin 找到
	// (plugin 的 fallback 指標就是 'aa')。
	if (!window.AlgoliaAnalyticsObject && !window.aa) {
		window.AlgoliaAnalyticsObject = "aa";
		window.aa = insightsClient;
	}
}
