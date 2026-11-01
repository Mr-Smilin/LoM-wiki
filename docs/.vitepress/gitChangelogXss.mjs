// 修補 @nolebase/vitepress-plugin-git-changelog 前端的 XSS:
// CommitRegularLine.vue 以 v-html 顯示 commit 訊息, 其 renderMarkdown() 會把 ![a](x)、[a](x) 轉成 <img src='x'>、<a href='x'>,
// 訊息內容因此能跑進 HTML 屬性 (`![a](x' onerror='...)`、`[a](javascript:...)`)。
// 這裡在轉換 utils.mjs 時拿掉這兩條轉換; 其餘轉換產生的標籤都不帶屬性 (代價是訊息裡的連結/圖片語法改以純文字顯示)。
const TARGET = /@nolebase\/vitepress-plugin-git-changelog\/dist\/client\/utils\.mjs$/;
const UNSAFE = String.raw`.replace(/!\[(.*?)\]\((.*?)\)/g, "<img alt='$1' src='$2' />").replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2'>$1</a>")`;

export function GitChangelogXssFix() {
	return {
		name: "lom-git-changelog-xss-fix",
		enforce: "pre",
		transform(code, id) {
			if (!TARGET.test(id.split("?")[0])) return null;
			// 外掛升級後寫法若變了, 直接讓建置失敗, 避免修補悄悄失效
			if (!code.includes(UNSAFE)) throw new Error(`${this.name}: renderMarkdown 寫法已變, 請重新檢查 XSS 修補`);
			return code.replace(UNSAFE, "");
		},
	};
}
