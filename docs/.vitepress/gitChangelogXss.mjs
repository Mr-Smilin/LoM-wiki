// 修補 @nolebase/vitepress-plugin-git-changelog 前端的 XSS:
// CommitRegularLine.vue 以 v-html 顯示 commit 訊息, 其 renderMarkdown() 只跳脫 < >,
// 所以 `![a](x' onerror='...)` 會組出帶事件的 <img>, `[a](javascript:...)` 會組出可執行的連結。
// 這裡在轉換 utils.mjs 時, 讓 renderMarkdown 先跳脫 & ' " [ ]: 訊息無法跳出屬性, 也組不出 <a>/<img>
// (代價是 commit 訊息裡的 markdown 連結/圖片改以純文字顯示)。
const TARGET = /@nolebase\/vitepress-plugin-git-changelog\/dist\/client\/utils\.mjs$/;
const ORIGINAL = 'markdownText.replace(/</g, "&lt;")';
const PATCHED = 'markdownText.replace(/&/g, "&amp;").replace(/\'/g, "&#39;").replace(/"/g, "&quot;")'
	+ '.replace(/\\[/g, "&#91;").replace(/\\]/g, "&#93;").replace(/</g, "&lt;")';

export function GitChangelogXssFix() {
	return {
		name: "lom-git-changelog-xss-fix",
		enforce: "pre",
		transform(code, id) {
			if (!TARGET.test(id.split("?")[0])) return null;
			// 外掛升級後寫法若變了, 直接讓建置失敗, 避免修補悄悄失效
			if (!code.includes(ORIGINAL)) throw new Error(`${this.name}: renderMarkdown 寫法已變, 請重新檢查 XSS 修補`);
			return code.replace(ORIGINAL, PATCHED);
		},
	};
}
