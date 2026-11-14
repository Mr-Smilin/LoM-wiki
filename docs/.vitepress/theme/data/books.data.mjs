// 秘笈列表（system/books/index.md 的 <BookList>）的資料：建置時讀每本書頁（system/books/book_*.md）開頭的 book: 這段。
// 改書只要改那本書頁；新增一本秘笈就新增書頁、開頭照下面的格式寫，列表會自動多一列。
//
//   book:
//     kind: 刀劍                              種類（必填）：刀劍、拳掌、內功、暗器、特殊
//     points: 80                              武學點（必填，數字）
//     price: 3500                             價格（沒在賣就不寫；有兩種價格寫字串，例如 "1000 或 500"）
//     bonus: { 刀劍: 10, 輕功: 10, 性情: 5 }  練滿的素質，一次性的（性情、道德…）也寫在一起；往 50 靠攏寫「靠中」
//     talents: [疾如風, 颯踏流星劍]           天賦，照頁面上要顯示的寫（例：儒學LV1）
//     requires: [性情>=60, 刀劍>=20]          條件，一項一個，顯示時一行一個
//
// 欄位名要用英文：簡中頁是建置時從繁中轉的，中文的欄位名會被一起轉成簡體。
// 寫錯（少了必填、數字寫成字、欄位名打錯）時建置會直接報錯，訊息寫出是哪一頁哪一欄。
// 簡中讀 zh-hans/ 底下轉好的那份，所以書名、素質名都是簡體。
import { createContentLoader } from "vitepress";

const FIELDS = ["kind", "points", "price", "bonus", "talents", "requires"];

function check(page, book) {
    const where = `${page.url.replace(/^\//, "")}（秘笈列表的資料 book:）`;
    const fail = (msg) => {
        throw new Error(`${where}：${msg}`);
    };
    if (!book || typeof book !== "object") fail("開頭缺少 book: 這段，格式見 .vitepress/theme/data/books.data.mjs 開頭的說明");
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
    for (const key of ["talents", "requires"]) {
        if (book[key] === undefined) continue;
        if (!Array.isArray(book[key]) || book[key].some((s) => typeof s !== "string" && typeof s !== "number")) {
            fail(`${key} 要寫成 [甲, 乙] 這樣的清單`);
        }
    }
}

export default createContentLoader(["system/books/book_*.md", "zh-hans/system/books/book_*.md"], {
    transform(pages) {
        const byLocale = { root: [], "zh-hans": [] };
        for (const page of pages) {
            const no = page.url.match(/book_(\d+)/)?.[1];
            if (!no) continue;
            const book = page.frontmatter.book;
            check(page, book);
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
                requires: (book.requires || []).map(String),
            });
        }
        // 遊戲裡的清單順序就是代號順序
        for (const list of Object.values(byLocale)) list.sort((a, b) => Number(a.no) - Number(b.no));
        return byLocale;
    },
});
