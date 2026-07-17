// Fetch 活俠傳 Steam news and generate 江湖快報 draft files.
//
// Source of truth per field (the two Steam feeds share the same unix `date`,
// so we join on it):
//   RSS  (?l=tchinese) -> 繁中 title + CORRECT store view link + pubDate
//   JSON API           -> tags (patchnotes?) + article body (BBCode)
// The JSON API's `gid` does NOT match the store view URL, so links MUST come
// from RSS. Tags only exist in the JSON API. Hence the join.
//
// Classification is by tag only (Steam has just: patchnotes | none):
//   patchnotes -> release ;  none -> announce
// demoUpdate / majorUpdate have no Steam tag -> rename the suffix by hand
// before merging on the rare occasion it matters.
//
// Output = DRAFTS. BBCode->markdown is approximate; polish before merge.
//
// Usage:
//   node tools/fetchNews.js            write new draft files
//   node tools/fetchNews.js --dry-run  show what would be created, write nothing
//   node tools/fetchNews.js --selftest run the built-in asserts

const fs = require("fs");
const path = require("path");

const APPID = 1859910;
const NEWS_DIR = path.join(__dirname, "../docs/other/news");
const API_URL = `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=${APPID}&count=100&format=json`;
const RSS_URL = `https://store.steampowered.com/feeds/news/app/${APPID}/?l=tchinese`;

const classify = tags => (tags.includes("patchnotes") ? "release" : "announce");

// release only: rename Steam's bare section headings to the wiki's convention.
// announce / demoUpdate are left untouched.
const RELEASE_HEADINGS = { "調整": "功能調整", "修正": "功能修正" };
const releaseHeadings = body =>
    body.replace(/^### (.+)$/gm, (m, h) => `### ${RELEASE_HEADINGS[h.trim()] || h}`);

const WEEKDAY = ["日", "一", "二", "三", "四", "五", "六"];
// Taiwan time (UTC+8) — the wiki dates are local.
function twParts(unixSec) {
    const d = new Date((unixSec + 8 * 3600) * 1000);
    return {
        ymd: `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`,
        human: `${d.getUTCFullYear()} 年 ${d.getUTCMonth() + 1} 月 ${d.getUTCDate()} 日 週${WEEKDAY[d.getUTCDay()]}`,
    };
}

function decodeEntities(s) {
    return s
        .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
}

// Steam BBCode (from JSON API `contents`) -> markdown in the wiki's OLD style:
// every content line ends with two trailing spaces (hard break) — VitePress
// renders wrong without them — lines sit adjacent within a block, blank lines
// only around ### headers / links, list items are plain lines (no `- `).
function bbcodeToMarkdown(src) {
    let s = src.replace(/ /g, " ").replace(/\r/g, "");
    s = s.replace(/\[previewyoutube="([^";\]]+)[^\]]*\]\[\/previewyoutube\]/g, "\nhttps://youtu.be/$1\n");
    s = s.replace(/^\s*\d+(?:\.\d+)+\s*\n/, ""); // drop leading bare version line (already in title)
    s = s.replace(/\[url=([^\]]+)\]([\s\S]*?)\[\/url\]/g, "[$2]($1)");
    s = s.replace(/\[h[1-3]\]([\s\S]*?)\[\/h[1-3]\]/g, "\n### $1\n"); // all headers -> ###
    s = s.replace(/\[\/?b\]/g, ""); // drop bold, keep text
    s = s.replace(/\[p\]([\s\S]*?)\[\/p\]/g, "$1\n"); // each paragraph -> its own line
    s = s.replace(/\[\*\]/g, "\n").replace(/\[\/\*\]/g, ""); // list item -> its own line (adjacent, no blank between)
    s = s.replace(/\[\/?(olist|list)\]/g, "\n");
    s = s.replace(/\[img\][\s\S]*?\[\/img\]/g, "");
    s = s.replace(/\[\/?[a-z][^\]]*\]/gi, "");        // drop any remaining tags

    // old-style pass: two-space hard break on every content line; blank line
    // only around ### headers and standalone links.
    const out = [];
    const blank = () => { if (out.length && out[out.length - 1] !== "") out.push(""); };
    for (const raw of s.split("\n")) {
        const l = raw.trim();
        if (l === "") continue; // drop input blanks; old style keeps lines adjacent within a block
        if (l.startsWith("### ") || l.startsWith("http")) { blank(); out.push(l); blank(); continue; }
        out.push(l + "  ");
    }
    return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function parseRss(xml) {
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
    return items.map(it => {
        const pick = tag => {
            const m = it.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
            return m ? m[1].replace(/^<!\[CDATA\[|\]\]>$/g, "").trim() : "";
        };
        const link = pick("link");
        const gidM = link.match(/\/view\/(\d+)/);
        return {
            title: decodeEntities(pick("title")),
            link,
            gid: gidM ? gidM[1] : null,
            date: Math.floor(Date.parse(pick("pubDate")) / 1000),
        };
    });
}

function existingGids() {
    const set = new Set();
    for (const f of fs.readdirSync(NEWS_DIR).filter(f => f.endsWith(".md"))) {
        const m = fs.readFileSync(path.join(NEWS_DIR, f), "utf8").match(/\/view\/(\d+)/g) || [];
        m.forEach(u => set.add(u.match(/\d+/)[0]));
    }
    return set;
}

function nextSeq(ymd, extra) {
    const seqs = fs.readdirSync(NEWS_DIR)
        .concat(extra)
        .filter(f => f.startsWith(ymd + "-"))
        .map(f => parseInt(f.slice(9, 11), 10))
        .filter(n => !isNaN(n));
    return String((seqs.length ? Math.max(...seqs) : 0) + 1).padStart(2, "0");
}

function render(item, body) {
    const { human } = twParts(item.date);
    const link = item.link.includes("?") ? item.link : item.link + "?l=tchinese";
    return `## [${item.title}](${link})\n\n發表時間  \n${human}\n\n${body}\n`;
}

async function main() {
    const args = process.argv.slice(2);
    if (args.includes("--selftest")) return selftest();
    const dry = args.includes("--dry-run");

    const [rssText, apiJson] = await Promise.all([
        fetch(RSS_URL).then(r => r.text()),   // Node 20+ built-in fetch, no dependency
        fetch(API_URL).then(r => r.json()),
    ]);
    const byDate = new Map();
    for (const n of apiJson.appnews.newsitems) {
        byDate.set(n.date, { tags: n.tags || [], contents: n.contents || "" });
    }
    const seen = existingGids();
    const written = [];
    const created = []; // filenames created this run, so nextSeq counts them too

    // oldest first -> stable sequence numbers
    const items = parseRss(rssText).filter(i => i.gid).sort((a, b) => a.date - b.date);
    // GUARD: 0 parsed items means the feed format changed, NOT "no news". Fail loud.
    if (!items.length) throw new Error("RSS 解析到 0 則有效項目 — feed 格式可能變了，請檢查 " + RSS_URL);

    for (const item of items) {
        if (seen.has(item.gid)) continue;
        const api = byDate.get(item.date);
        // GUARD: no API match by date -> body would be empty & tags missing. Warn, don't ship silently.
        if (!api) console.warn(`  ⚠ 無對應 API 內文(date=${item.date}): ${item.title} — body 會是空的，需手補`);
        const cat = classify((api || {}).tags || []);
        const { ymd } = twParts(item.date);
        const seq = nextSeq(ymd, created);
        const fname = `${ymd}-${seq}-${cat}.md`;
        created.push(fname);
        let body = bbcodeToMarkdown((api || {}).contents || "");
        if (cat === "release") body = releaseHeadings(body);
        const md = render(item, body);
        if (!dry) fs.writeFileSync(path.join(NEWS_DIR, fname), md, "utf8");
        written.push({ fname, cat, title: item.title });
    }

    if (!written.length) return console.log("沒有新的 Steam 新聞。");
    console.log(`${dry ? "[dry-run] 會產生" : "已產生"} ${written.length} 則草稿：`);
    written.forEach(w => console.log(`  ${w.fname}  [${w.cat}]  ${w.title}`));
    if (!dry) console.log("\n下一步：檢查/微調草稿內容 → 需要的話把 suffix 改成 demoUpdate/majorUpdate → npm run build");
}

function selftest() {
    const assert = require("assert");
    assert.strictEqual(classify(["patchnotes"]), "release");
    assert.strictEqual(classify([]), "announce");
    assert.strictEqual(classify(["foo"]), "announce");
    // 2025-10-10 13:29 UTC -> Taiwan 2025-10-10 (still same day) Fri=週五
    const p = twParts(1760102940);
    assert.strictEqual(p.ymd, "20251010");
    assert.strictEqual(p.human, "2025 年 10 月 10 日 週五");
    // BBCode -> markdown
    // leading bare version line dropped; [b] stripped to plain text
    const md = bbcodeToMarkdown("1.0.5000.13\n[b]x[/b]\n[h2]修正[/h2][olist][*]a[/*][*]b[/*][/olist]");
    assert.ok(md.includes("x") && !md.includes("**") && !md.includes("[b]"), md);
    assert.ok(!md.includes("1.0.5000.13"), "version line should be dropped: " + md);
    assert.ok(md.includes("### 修正"), md);
    // release heading map (only applied when cat==='release')
    assert.strictEqual(releaseHeadings("### 修正\n### 調整\n### 前導預告"),
        "### 功能修正\n### 功能調整\n### 前導預告"); // unknown heading untouched
    // old style: adjacent plain hard-break lines (two trailing spaces), no bullets
    assert.ok(md.includes("a  \nb"), JSON.stringify(md));
    assert.ok(!md.includes("- a"), "should not use bullets: " + md);
    console.log("selftest OK");
}

if (require.main === module) main().catch(e => { console.error(e.message); process.exit(1); });
else module.exports = { bbcodeToMarkdown, classify, twParts, render, parseRss, releaseHeadings };
