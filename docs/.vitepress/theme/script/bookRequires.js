// 秘笈的修練條件：解析（建置時驗證寫法）與顯示（排成一行一行）。
// 三邊共用：data/books.data.mjs 收資料、components/books/BookList.vue 畫列表、
// components/books/BookRequires.vue 印在書頁上，所以條件只寫在書頁開頭的 book: 一次。

// 預設的錯誤處理：書頁上用（建置時 loader 會傳自己的 fail，訊息裡會帶頁名）
const defaultFail = (msg) => {
    throw new Error(msg);
};

// 等級的範圍：遊戲畫面從 0 / 10 到 10 / 10，兩頭都收
const MIN_LEVEL = 0;
const MAX_LEVEL = 10;
export const SEE = "寫法見〈LoM-wiki 公開組件〉的「BookList 秘笈列表」（develop/4-2-wiki-template.md）";
const EXAMPLE_OR = "[佛學LV1||儒學LV1]";
const EXAMPLE_AND = "[內力>=40, 拳掌>=40]";
const OPS = "== > < >= <=";

// 一個條件只收三種寫法：
//   素質、數量（學問>=20、道德<40、黃酒>=1）：名稱、比較符號、數字連在一起，名稱裡不能有比較符號
//   有等級的天賦（佛學LV1）
//   只有一級的天賦（自戀）：只寫名稱，不能有數字或比較符號
const COMPARE = /^[^<>=!\s\d]+(==|>=|<=|>|<)\d+$/;
const TALENT_LEVEL = /^[^<>=!\s\d]+LV\d+$/;
const TALENT = /^[^<>=!\s\d]+$/;

function checkCondition(s, at, fail) {
    if (COMPARE.test(s) || TALENT_LEVEL.test(s) || TALENT.test(s)) return;
    if (/[<>=!]/.test(s)) fail(`${at}的「${s}」：要寫成名稱、比較符號、數字連在一起，例如 學問>=20；比較符號只有 ${OPS} 五種`);
    if (/lv\s*\d/i.test(s)) fail(`${at}的「${s}」：天賦等級寫成 佛學LV1（大寫 LV，中間不空格）`);
    const m = /^([^\d\s]+?)\s*(\d+)$/.exec(s);
    if (m) fail(`${at}的「${s}」：要寫比較符號，例如 ${m[1]}>=${m[2]}（符號有 ${OPS} 五種）`);
    fail(`${at}的「${s}」：條件要寫成 學問>=20、佛學LV1，或只寫只有一級的天賦名稱（自戀），${SEE}`);
}

// 一組條件：逗號分開的每一項是「且」，項目裡用 || 分開的是「或」。
// 回傳 [["體力>=20"], ["佛學LV1", "儒學LV1"]]，意思是 體力>=20 且（佛學LV1 或 儒學LV1）。
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
            if (/[≧≦＞＜＝]/.test(s)) fail(`${at}的「${s}」：比較符號用半形的 ${OPS}`);
            checkCondition(s, at, fail);
        }
        return alts;
    });
}

// 修練條件：回傳 [{ level, items }]。每一級都一樣時只有一組、level 是空字串；
// 各級不同時一級一組，level 是顯示用的「LV3」「LV2～4」。
export function parseRequires(requires, fail = defaultFail) {
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

// 比較符號：書頁寫半形，顯示成全形；搜尋時把打進來的全形換回半形，跟書頁的寫法比對
const FULL_OPS = { ">=": "≧", "<=": "≦", "==": "＝", ">": "＞", "<": "＜" };
export const fullOps = (text) => text.replace(/>=|<=|==|>|</g, (op) => FULL_OPS[op]);
export const halfOps = (text) =>
    text
        .replace(/≧|＞＝/g, ">=")
        .replace(/≦|＜＝/g, "<=")
        .replace(/＝＝|＝/g, "==")
        .replace(/＞/g, ">")
        .replace(/＜/g, "<");

// 一組條件變成顯示用的字：同一項裡的「或」用「 或 」接起來
const partsOf = (items, or) => items.map((alts) => alts.map(fullOps).join(` ${or} `));

// 把 parseRequires 的結果排成一行一行（items 之間是且、[甲, 乙] 是或）：
//   只有一組「或」：分行、中間夾一行「或」；跟其他條件寫在一起：同一行寫「甲 或 乙」，才分得出哪幾個是或
//   各級不同：一級一行「LV2～3：學問≧30」
export function reqLines(requires, or = "或") {
    const lines = [];
    for (const { level, items } of requires) {
        const parts = partsOf(items, or);
        if (level) {
            lines.push(`${level}：${parts.join("、")}`);
        } else if (items.length === 1 && items[0].length > 1) {
            items[0].forEach((alt, i) => {
                if (i) lines.push(or);
                lines.push(fullOps(alt));
            });
        } else {
            lines.push(...parts);
        }
    }
    return lines;
}

// 一行寫完（書頁上用）：「且」用「、」接、「或」用「 或 」接；各級不同時一級一行
export function reqText(requires, or = "或") {
    return requires.map(({ level, items }) => (level ? `${level}：` : "") + partsOf(items, or).join("、"));
}
