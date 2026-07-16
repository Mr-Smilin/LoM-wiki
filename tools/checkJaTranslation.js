// This script gates the docs/ja translation progress.
//
//   MISSING  台帳に未記載のページ数
//   STALE    台帳の sha256 と現在のファイル内容が食い違う行数
//   RESIDUE  中国語残存の機械検出ヒット数 (allowlist 除く)
//
// 3つとも 0 で exit 0。
//
// RESIDUE は品質の証明ではない。高精度・低再現率に振ってあり、
// 「あからさまな機械置換の残骸を落とす」下限ゲートとしてしか機能しない。
// 全ページをLLMに読ませることを強制するのは MISSING / STALE の方。

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..");
const JA_DIR = path.join(ROOT, "docs/ja");
// 台帳と allowlist は tools/ 側に置く。docs/ja は upstream へ出す成果物そのものなので、
// 作業状態を混ぜない。
const LEDGER = path.join(ROOT, "tools/ja-translation-ledger.tsv");
const ALLOWLIST = path.join(ROOT, "tools/ja-residue-allowlist.txt");

// 繁体字が載っているのが仕様のページ。RESIDUE 検査から外す (台帳の対象からは外さない)。
const RESIDUE_EXEMPT_FILES = new Set([
	"glossary.md", // 用語対訳表。1列目が繁体字なのが役目
]);

// 中国語にしか現れない字・機能語。カナが混じっていても中国語構文の残骸として拾う。
//
// 日本語と共通の語彙 (表示・使用・獲得・影響・同時・因此 など) は絶対に足さないこと。
// 正しい日本語を残骸と誤判定し、allowlist を膨らませる圧力になる。
const ZH_MARKERS = new RegExp(
	[
		// 日本語に存在しない字
		"們", "這", "麼", "沒", "咱", "甭", "嗎",
		// 中国語専用の機能語・語順マーカー
		"因為", "但是", "如果", "已經", "覺得", "喜歡", "知道",
		"而且", "或者", "還是", "還能", "還令", "就算", "就連", "不過是",
		"對於", "對旁人", "亦無妨", "亦是", "自居", "模樣", "身上",
		"事到如今", "無法把", "越教越", "所想", "按汝",
		// 置換翻訳の定番残骸 (「汝の」化されても語幹が残る)
		"變得", "看著", "想看", "獲得的", "之際", "畢竟", "不禁",
	].join("|")
);

const KANA = /[぀-ゟ゠-ヿ]/;
const HAN = /[一-鿿]/;
const SENTENCE_END = /[。？！]/;

// 散文とみなす最小の CJK 文字数。これ未満は見出し・表セル・固有名詞の可能性が高い。
const PROSE_MIN_CJK = 12;

// HTML タグ。`掌門好感<30` `サイコロ>=80` のような比較演算子をタグとして
// 食わないよう、タグ名で始まるものだけに限定する。
const HTML_TAG = /<\/?[a-zA-Z][^<>]*>/g;
const MD_LINK = /!?\[[^\]]*\]\([^)]*\)/g;

/**
 * 「訳 (原文)」の併記記法。括弧内は繁体字のままが正しいので検査から外す。
 *   例: title: 汗青書33：全軍覆没 (全軍覆沒)
 *
 * Markdown リンクの `](...)` を食うと本文が壊れるため、リンクを先に落としてから呼ぶこと。
 */
function stripParens(s) {
	return s.replace(/[(（][^)）]*[)）]/g, " ");
}

/** マークアップを剥がして地の文だけ残す */
function stripMarkup(s) {
	return s
		.replace(/<!--[\s\S]*?-->/g, " ")
		.replace(MD_LINK, " ")
		.replace(HTML_TAG, " ")
		.replace(/https?:\/\/\S+/g, " ")
		.replace(/`[^`]*`/g, " ")
		.replace(/[!\[\]()|#*`~=;/\\"'{}]/g, " ");
}

/**
 * ステータス行・能力値リストか判定する。`体力+1、内功+1、銀両-100` のような行は
 * 漢字主体でカナが少ないのが正常。
 *
 * 注意: stripMarkup は ± を消すので、ここでは使えない。
 */
function isStatLine(s) {
	const rest = s
		.replace(MD_LINK, "、")
		.replace(HTML_TAG, "、")
		.replace(/[一-鿿゠-ヿА-я\w《》【】]{1,10}\s*(LV)?\s*[+\-−＋－≧≦≥≤><=]\s*\d*/gi, " ")
		// 発生時期の表記。`二年十月下旬` `第3年12月上旬` は漢字だけでも正常。
		.replace(/第?[〇一二三四五六七八九十百\d]+年/g, " ")
		.replace(/[〇一二三四五六七八九十百\d]+月/g, " ")
		.replace(/[上中下]旬/g, " ")
		.replace(/[、,。・：:／/\s\d%％]/g, "");
	const cjk = [...rest].filter((c) => HAN.test(c) || KANA.test(c));
	return cjk.length < 4;
}

/** 引用・出典行か判定する。中国語の記事タイトルは原語のままが正しい。 */
function isCitation(s) {
	return /^\s*\[\^[^\]]+\]:/.test(s) || /^\s*>\s*(出典|引用)/.test(s);
}

function kanaRatio(s) {
	const cjk = [...stripMarkup(s)].filter((c) => HAN.test(c) || KANA.test(c));
	if (cjk.length === 0) return { ratio: null, len: 0 };
	const k = cjk.filter((c) => KANA.test(c)).length;
	return { ratio: k / cjk.length, len: cjk.length };
}

function walk(dir) {
	const out = [];
	for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) out.push(...walk(p));
		else if (e.name.endsWith(".md")) out.push(p);
	}
	return out.sort();
}

function sha256(p) {
	return crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex");
}

function loadAllowlist() {
	if (!fs.existsSync(ALLOWLIST)) return [];
	return fs
		.readFileSync(ALLOWLIST, "utf8")
		.split("\n")
		.map((l) => l.trim())
		.filter((l) => l && !l.startsWith("#"));
}

function scanResidue(file, allow) {
	if (RESIDUE_EXEMPT_FILES.has(path.relative(JA_DIR, file))) return [];
	const rel = path.relative(ROOT, file);
	const hits = [];
	let inFence = false;

	fs.readFileSync(file, "utf8")
		.split("\n")
		.forEach((line, idx) => {
			const s = line.trim();
			if (/^```/.test(s)) {
				inFence = !inFence;
				return;
			}
			if (inFence || !s || !HAN.test(s)) return;
			if (isCitation(s)) return;
			if (allow.some((a) => s.includes(a))) return;

			// リンクを先に落としてから「訳 (原文)」の原文部分を除く
			// (順序が逆だとリンク先を食って本文が壊れる)
			const body = stripParens(s.replace(MD_LINK, " "));
			if (!HAN.test(body)) return;

			if (ZH_MARKERS.test(body)) {
				hits.push({ file: rel, line: idx + 1, why: "zh-marker", text: s.slice(0, 90) });
				return;
			}

			// カナが1文字も無い散文だけを拾う。カナ密度が低いだけの行は、この wiki では
			// 固有名詞が濃いため正常な日本語でも頻出し (「崆峒派留学中に賭博闘技場で敗北」= 0.13)、
			// 未訳 (「渴望の事物求不得。」= 0.13) と比率では分離できない。
			if (isStatLine(s)) return;
			const { ratio, len } = kanaRatio(body);
			if (ratio === 0 && len >= PROSE_MIN_CJK && SENTENCE_END.test(body)) {
				hits.push({ file: rel, line: idx + 1, why: "kana=0", text: s.slice(0, 90) });
			}
		});
	return hits;
}

function readLedger() {
	const ledger = new Map();
	if (!fs.existsSync(LEDGER)) return ledger;
	for (const l of fs.readFileSync(LEDGER, "utf8").split("\n")) {
		const s = l.trim();
		if (!s || s.startsWith("#")) continue;
		const [p, status, hash] = s.split("\t");
		if (p) ledger.set(p, { status, hash });
	}
	return ledger;
}

function main() {
	const verbose = process.argv.includes("--verbose");
	const files = walk(JA_DIR);
	const allow = loadAllowlist();
	const ledger = readLedger();

	const missing = [];
	const stale = [];
	for (const f of files) {
		const rel = path.relative(JA_DIR, f);
		const rec = ledger.get(rel);
		if (!rec) missing.push(rel);
		else if (rec.hash !== sha256(f)) stale.push(rel);
	}

	const residue = files.flatMap((f) => scanResidue(f, allow));

	console.log(`MISSING: ${missing.length}`);
	console.log(`STALE: ${stale.length}`);
	console.log(`RESIDUE: ${residue.length}`);

	const show = (label, arr, fmt) => {
		if (!arr.length) return;
		const n = verbose ? arr.length : 15;
		const more = arr.length > n ? `, 先頭${n}件` : "";
		console.log(`\n--- ${label} (${arr.length}件${more}) ---`);
		arr.slice(0, n).forEach((x) => console.log("  " + fmt(x)));
	};
	show("MISSING: 台帳に未記載", missing, (x) => x);
	show("STALE: 台帳のsha256と内容が不一致", stale, (x) => x);
	show("RESIDUE: 中国語残存の疑い", residue, (x) => `${x.file}:${x.line} [${x.why}] ${x.text}`);

	const ok = !missing.length && !stale.length && !residue.length;
	if (!ok) console.log("\n未達。上記を解消すること。");
	process.exit(ok ? 0 : 1);
}

main();
