// 驗證 docs/.vitepress/gitChangelogXss.mjs 的修補: 惡意 commit 訊息經修補後的 renderMarkdown
// 不會產生帶屬性的標籤或 javascript: 連結, 一般訊息顯示不變。用法: node tools/checkGitChangelogXss.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { GitChangelogXssFix } from "../docs/.vitepress/gitChangelogXss.mjs";

const id = new URL("../node_modules/@nolebase/vitepress-plugin-git-changelog/dist/client/utils.mjs", import.meta.url).pathname;
const original = readFileSync(id, "utf8");
const patched = GitChangelogXssFix().transform.call({ name: "test" }, original, id);
const load = (code) => new Function(`${code.match(/export function renderMarkdown[\s\S]*?\n}\n/)[0].replace("export ", "")}; return renderMarkdown;`)();
const before = load(original), after = load(patched);

const attacks = [
	"![a](x' onerror='alert(1))",
	"![a](x\" onerror=\"alert(1))",
	"[click](javascript:alert(1))",
	"<img src=x onerror=alert(1)>",
];
assert.match(before(attacks[0]), /onerror='alert/, "未修補時應可重現 (確認測試有效)");
for (const msg of attacks) {
	const html = after(msg);
	assert.doesNotMatch(html, /<(img|a)\b/i, `不應組出 <img>/<a>: ${html}`);
	assert.doesNotMatch(html, /<[^>]*\s(on\w+|href|src)=/i, `不應有屬性: ${html}`);
}
for (const msg of ["鍛冶場、煉丹房：翻譯改用 eventSeries.js", "修正 **粗體** 與 `code`", "Merge pull request #334"]) {
	assert.equal(after(msg), before(msg), `一般訊息應不變: ${msg}`);
}
console.log("checkGitChangelogXss: ok");
