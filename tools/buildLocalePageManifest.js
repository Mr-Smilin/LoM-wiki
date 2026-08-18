// docs/{root,ja,en} を走査し、locale ごとの「存在するページ」を manifest として生成する。
//
// 目的: icon-family コンポーネント (EndIcon / BadendIcon) が未翻訳ページへのリンクを
// root へ fallback する判定を、component 内のハードコード (MISSING_END_PAGES 等) ではなく
// 生成物 (SSoT = ファイルシステムの実態) から行えるようにする。翻訳の追加/削除で
// リストが実態とズレる drift を構造的に防ぐ。詳細は Issue #10。
//
// 出力先は buildWikiLinkIndex.js と同じ theme 配下。public/ はビルド時にそのまま配信される
// 静的アセット置き場であり、そこから JS で import すると Vite が警告を出すうえ、
// バンドルへの取り込みと public/ からのコピーで同じ JSON が二重に配信される。
// この manifest は URL で配る必要がなく component が import するだけなので theme 側に置く。
// 生成物は手編集禁止。

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.join(ROOT, "docs", ".vitepress", "theme", "data", "locale_page_manifest.json");

// localeIndex (VitePress) → docs 配下の event ディレクトリ。root は接頭辞なし。
const LOCALE_EVENT_DIRS = {
    root: path.join(ROOT, "docs", "event"),
    ja: path.join(ROOT, "docs", "ja", "event"),
    en: path.join(ROOT, "docs", "en", "event"),
    "zh-hans": path.join(ROOT, "docs", "zh-hans", "event"),
};

// <eventDir>/<section>/<prefix>-<番号>.md の番号一覧を昇順で返す。
function collectNumberedPages(eventDir, section, prefix) {
    const dir = path.join(eventDir, section);
    if (!fs.existsSync(dir)) {
        return [];
    }
    const re = new RegExp(`^${prefix}-(\\d+)\\.md$`);
    return fs
        .readdirSync(dir)
        .map((file) => {
            const m = file.match(re);
            return m ? Number(m[1]) : null;
        })
        .filter((n) => n !== null)
        .sort((a, b) => a - b);
}

const manifest = {};
for (const [locale, eventDir] of Object.entries(LOCALE_EVENT_DIRS)) {
    manifest[locale] = {
        // 結局詳細ページ (end-*): EndIcon が locale に無い番号を root へ fallback するのに使う
        ends: collectNumberedPages(eventDir, "ends", "end"),
        // 生死簿 index (badends/index.md) の有無: BadendIcon が index 系リンクの接頭辞判定に使う
        hasBadendsIndex: fs.existsSync(path.join(eventDir, "badends", "index.md")),
    };
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + "\n", "utf8");
console.log(`Locale page manifest generated: ${path.relative(ROOT, OUTPUT)}`);
