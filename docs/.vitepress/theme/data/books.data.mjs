// 秘笈列表（system/books/index.md 的 <BookList>）的資料：建置時讀每本書頁（system/books/book_*.md）開頭的 book: 這段。
// 改書只要改那本書頁；新增一本秘笈就新增書頁、開頭照下面的格式寫，列表會自動多一列。
// 寫法與範例也寫在〈LoM-wiki 公開組件〉（develop/4-2-wiki-template.md）的「BookList 秘笈列表」。
//
//   book:
//     kind: 刀劍                              種類（必填）：刀劍、拳掌、內功、暗器、特殊
//     points: 80                              武學點（必填，數字）
//     price: 3500                             價格（沒在賣就不寫；有兩種價格寫字串，例如 "1000 或 500"）
//     bonus: { 刀劍: 10, 輕功: 10, 性情: 5 }  練滿的素質，一次性的（性情、道德…）也寫在一起；往 50 靠攏寫「靠中」
//     talents: [疾如風, 颯踏流星劍]           天賦，照頁面上要顯示的寫（例：儒學LV1）
//     requires: [性情>=60, 刀劍>=20]          修練條件（沒有就不寫），只收下面兩種寫法
//
// 修練條件（requires）：
//   1. 每一級都一樣：寫成清單。逗號分開的是「且」（全部都要），同一項裡用 || 分開的是「或」（符合一個就好）。
//        requires: [性情>=60, 刀劍>=20, 輕功>=20]    性情>=60、刀劍>=20、輕功>=20 都要
//        requires: [佛學LV1||儒學LV1||道學LV2]       佛學LV1、儒學LV1、道學LV2 其中一個
//        requires: [體力20, 佛學LV1||儒學LV1]        體力20，而且佛學LV1、儒學LV1 其中一個
//   2. 各級不同：照等級分組，等級寫成 LV3，範圍寫成 LV2~4（半形 ~）。
//      等級由小到大寫、不能重疊，沒有條件的等級不用寫；每一組裡面照第 1 種的且、或寫。
//        requires:
//          LV1: [學問20]
//          LV2~3: [學問30]
//          LV4~7: [學問50]
//          LV8~10: [學問80]
//   其他寫法建置時會報錯，例如：單獨一項的「或」、條件裡夾「或」「且」「、」、|| 前後是空的、
//   全形的 ≧ ≦ ＞ ＜、在條件後面加「(LV6)」、把「LV2」當成一項。
//   顯示：只有一組「或」時照舊分行、中間夾一行「或」；跟其他條件寫在一起時，同一行寫成「甲 或 乙」。
//
// 寫錯（少了必填、數字寫成字、欄位名打錯、條件的寫法不對）時建置會直接報錯，訊息寫出是哪一頁哪一欄。
// 簡中讀 zh-hans/ 底下轉好的那份，所以書名、素質名都是簡體。
import { createContentLoader } from "vitepress";

const FIELDS = ["kind", "points", "price", "bonus", "talents", "requires"];
// 等級的範圍：遊戲畫面從 0 / 10 到 10 / 10，兩頭都收
const MIN_LEVEL = 0;
const MAX_LEVEL = 10;
const SEE = "寫法見 .vitepress/theme/data/books.data.mjs 開頭的說明";
const EXAMPLE_OR = "[佛學LV1||儒學LV1]";
const EXAMPLE_AND = "[內力>=40, 拳掌>=40]";

// 一組條件：逗號分開的每一項是「且」，項目裡用 || 分開的是「或」。
// 回傳 [["體力20"], ["佛學LV1", "儒學LV1"]]，意思是 體力20 且（佛學LV1 或 儒學LV1）。
// 擋掉編輯時容易寫出來的其他寫法，讓所有書頁只有一種寫法。
function parseGroup(list, at, fail) {
    if (!Array.isArray(list)) fail(`${at}要寫成 [甲, 乙] 這樣的清單，${SEE}`);
    return list.map((raw) => {
        if (typeof raw !== "string" && typeof raw !== "number") fail(`${at}的每一項要是一個條件，例如 ${EXAMPLE_AND}`);
        const text = String(raw).trim();
        const alts = text.split("||").map((s) => s.trim());
        if (alts.some((s) => !s)) fail(`${at}的「${text}」：|| 前後都要有條件，例如 ${EXAMPLE_OR}`);
        for (const s of alts) {
            if (/^(或|或者|且|和|or|and)$/i.test(s)) {
                fail(`${at}的「${s}」不能單獨寫成一項：「且」用逗號分開，「或」寫在同一項裡用 ||，例如 ${EXAMPLE_OR}`);
            }
            if (/^LV\d/i.test(s) || /[(（]\s*LV\d/i.test(s)) fail(`${at}的「${s}」：各級條件不同時要照等級分組，${SEE}`);
            if (s.includes("或")) fail(`${at}的「${s}」：「或」要寫在同一項裡用 ||，例如 ${EXAMPLE_OR}`);
            if (/[且、，,]/.test(s)) fail(`${at}的「${s}」：「且」要用半形逗號分成兩項，例如 ${EXAMPLE_AND}`);
            if (s.includes("|")) fail(`${at}的「${s}」：「或」要寫兩條直線 ||，例如 ${EXAMPLE_OR}`);
            if (/[≧≦＞＜＝]/.test(s)) fail(`${at}的「${s}」：比較符號用半形的 >= <= > <`);
        }
        return alts;
    });
}

// 修練條件：回傳 [{ level, items }]。每一級都一樣時只有一組、level 是空字串；
// 各級不同時一級一組，level 是顯示用的「LV3」「LV2～4」。
function parseRequires(requires, fail) {
    if (requires === undefined || requires === null) return [];
    if (Array.isArray(requires)) {
        const items = parseGroup(requires, "requires ", fail);
        return items.length ? [{ level: "", items }] : [];
    }
    if (typeof requires !== "object") fail(`requires（修練條件）要寫成 [甲, 乙] 這樣的清單，或照等級分組，${SEE}`);
    const groups = [];
    let last = MIN_LEVEL - 1;
    for (const [key, list] of Object.entries(requires)) {
        const at = `requires 的「${key}」`;
        const m = /^LV(\d+)(?:~(\d+))?$/.exec(key);
        if (!m) fail(`${at}：等級要寫成 LV3 或 LV2~4（大寫 LV、半形 ~），${SEE}`);
        const from = Number(m[1]);
        const to = m[2] === undefined ? from : Number(m[2]);
        if (from < MIN_LEVEL || to > MAX_LEVEL || from > to) fail(`${at}：等級只有 ${MIN_LEVEL}～${MAX_LEVEL}，~ 前面的數字不能比後面大`);
        if (from <= last) fail(`${at}：跟前一組的等級重疊或順序顛倒，要照等級由小到大寫`);
        last = to;
        const items = parseGroup(list, at, fail);
        if (!items.length) fail(`${at}：沒有條件；沒有條件的等級不用寫`);
        groups.push({ level: from === to ? `LV${from}` : `LV${from}～${to}`, items });
    }
    return groups;
}

// 檢查 book: 這段，回傳整理好的修練條件
function check(page, book) {
    const where = `${page.url.replace(/^\//, "")}（秘笈列表的資料 book:）`;
    const fail = (msg) => {
        throw new Error(`${where}：${msg}`);
    };
    if (!book || typeof book !== "object") fail(`開頭缺少 book: 這段，${SEE}`);
    for (const key of Object.keys(book)) {
        if (!FIELDS.includes(key)) fail(`不認得的欄位「${key}」，只能寫 ${FIELDS.join("、")}`);
    }
    if (typeof book.kind !== "string" || !book.kind) fail("kind（種類）沒寫");
    if (!Number.isInteger(book.points)) fail("points（武學點）要寫數字");
    if (book.price !== undefined && typeof book.price !== "number" && typeof book.price !== "string") fail("price（價格）要寫數字或字串");
    if (book.bonus !== undefined) {
        if (typeof book.bonus !== "object" || Array.isArray(book.bonus)) fail("bonus（素質）要寫成 { 刀劍: 10, 輕功: 10 }");
        for (const [stat, value] of Object.entries(book.bonus)) {
            if (typeof value !== "number" && value !== "靠中") fail(`bonus 的「${stat}」要寫數字或「靠中」`);
        }
    }
    if (book.talents !== undefined) {
        if (!Array.isArray(book.talents) || book.talents.some((s) => typeof s !== "string" && typeof s !== "number")) {
            fail("talents 要寫成 [甲, 乙] 這樣的清單");
        }
    }
    return parseRequires(book.requires, fail);
}

export default createContentLoader(["system/books/book_*.md", "zh-hans/system/books/book_*.md"], {
    transform(pages) {
        const byLocale = { root: [], "zh-hans": [] };
        for (const page of pages) {
            const no = page.url.match(/book_(\d+)/)?.[1];
            if (!no) continue;
            const book = page.frontmatter.book;
            const requires = check(page, book);
            const locale = page.url.startsWith("/zh-hans/") ? "zh-hans" : "root";
            byLocale[locale].push({
                no,
                title: page.frontmatter.title || no,
                url: page.url,
                kind: book.kind,
                points: book.points,
                price: book.price ?? "",
                // 保留寫的順序：顯示時照書頁寫的排
                bonus: Object.entries(book.bonus || {}),
                talents: (book.talents || []).map(String),
                requires,
            });
        }
        // 遊戲裡的清單順序就是代號順序
        for (const list of Object.values(byLocale)) list.sort((a, b) => Number(a.no) - Number(b.no));
        return byLocale;
    },
});
