// 取代 @nolebase/vitepress-plugin-git-changelog 的 GitChangelog() 資料收集, 輸出格式相同,
// 前端元件 (NolebaseGitChangelogPlugin) 與 GitChangelogMarkdownSection 照舊沿用。
// 原插件每個 md 各跑一次 `git log --follow` (2000+ 個 git 行程, CI 約 87 秒);
// 這裡整段歷史只跑一次 git log, 再依檔案分組。改名以 -M 偵測, 舊路徑的紀錄歸到現在的路徑。
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const VIRTUAL_ID = "virtual:nolebase-git-changelog";
const RESOLVED_ID = `\0${VIRTUAL_ID}`;
const REPO_ROOT = fileURLToPath(new URL("../..", import.meta.url)); // 本檔位於 docs/.vitepress/

export function collectCommits({ repoURL, srcDir = "docs", exclude = ["docs/zh-hans/"] }) {
	const log = execFileSync(
		"git",
		// --full-history: 與 --follow 一樣不做合併歷史簡化。範圍取整個 srcDir (而非只 *.md),
		// 才能接上「無副檔名 -> .md」這類改名前的紀錄; 圖片與主題程式不需要, 排除以縮小輸出。
		["-c", "core.quotepath=false", "log", "--full-history", "-M", "--name-status",
			"--format=%x00%H%x1f%an%x1f%ae%x1f%ad%x1f%s%x1f%d%x1f%b%x1e",
			"--", srcDir, `:(exclude)${srcDir}/public`, `:(exclude)${srcDir}/.vitepress`],
		{ cwd: REPO_ROOT, encoding: "utf8", maxBuffer: 1 << 30 },
	);
	const renamedTo = new Map(); // 舊路徑 -> 現在的路徑 (由新到舊走訪歷史)
	// 只收目前有進 Git 的檔 (與原插件 globby gitignore:true 一致): news.md 等生成物即使存在也不算
	const tracked = new Set(
		execFileSync("git", ["-c", "core.quotepath=false", "ls-files", "-z", "--", srcDir], { cwd: REPO_ROOT, encoding: "utf8", maxBuffer: 1 << 30 })
			.split("\0").filter((p) => !exclude.some((e) => p.startsWith(e))),
	);
	const isCurrent = (p) => tracked.has(p);
	const commits = [];
	for (const chunk of log.split("\0").slice(1)) {
		const cut = chunk.lastIndexOf("\x1e"); // 取最後一個: body 內若含 0x1e 也不會切錯
		const head = chunk.slice(0, cut), files = chunk.slice(cut + 1);
		const [hash, author_name, author_email, date, message, refs, body] = head.split("\x1f").map((v) => v.trim());
		const tags = (refs ?? "").replace(/[()]/g, "").split(", ").filter((r) => r.startsWith("tag: ")).map((r) => r.slice(5).trim());
		for (const line of files.split("\n")) {
			if (!line) continue;
			const [status, from, to] = line.split("\t");
			const path = renamedTo.get(to ?? from) ?? to ?? from;
			if (status.startsWith("R")) renamedTo.set(from, path);
			if (!path.endsWith(".md") || !isCurrent(path)) continue;
			const commit = {
				path: path.slice(srcDir.length + 1),
				hash, date, date_timestamp: new Date(date).getTime(), message, body,
				author_name, author_email,
				author_avatar: createHash("sha256").update(author_email).digest("hex"),
				repo_url: repoURL,
				hash_url: `${repoURL}/commit/${hash}`,
			};
			if (tags.length) {
				commit.tags = tags;
				commit.tag = tags[0];
				commit.release_tag_url = `${repoURL}/releases/tag/${tags[0]}`;
				commit.release_tags_url = tags.map((t) => `${repoURL}/releases/tag/${t}`);
			}
			commits.push(commit);
		}
	}
	return { commits };
}

export function GitChangelog(options) {
	let changelog;
	return {
		name: "lom-git-changelog",
		apply: "build", // dev 一次送出全部資料太大 (約 49MB), dev 仍用原插件
		config: () => ({
			optimizeDeps: { exclude: ["@nolebase/vitepress-plugin-git-changelog/client"] },
			ssr: { noExternal: ["@nolebase/vitepress-plugin-git-changelog", "@nolebase/ui"] },
		}),
		resolveId: (id) => (id === VIRTUAL_ID ? RESOLVED_ID : null),
		load(id) {
			if (id !== RESOLVED_ID) return null;
			changelog ??= collectCommits(options); // client / server 兩次建置共用同一份
			return `export default ${JSON.stringify(changelog)}`;
		},
	};
}
