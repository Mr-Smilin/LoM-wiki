// 秘笈列表的「獲得方式」欄：內容就是每本書頁的「## 獲得方式」這節（從這個標題到下一個 ## 標題之前），
// 列表不另外存一份，改書頁就好。
//
// 兩個地方用到，共用這裡的取法，顯示和搜尋的範圍才會一樣：
//   tools/buildBookSources.mjs  建置前把這節原樣組成 system/books/_sources.md，給列表頁的 <BookList> 引入（顯示用）
//   data/books.data.mjs         轉成純文字，給列表的搜尋比對
// 簡中書頁是轉好的，標題是「获得方式」。

const HEADING = /^##\s+(?:獲得方式|获得方式)\s*$/;
const NEXT_HEADING = /^#{1,2}\s/;

// 書頁的 markdown → 「## 獲得方式」這節的內容（不含標題）；沒有這節回傳空字串
export function sourceSection(markdown) {
    const lines = markdown.split(/\r?\n/);
    const start = lines.findIndex((line) => HEADING.test(line));
    if (start < 0) return "";
    let end = lines.findIndex((line, i) => i > start && NEXT_HEADING.test(line));
    if (end < 0) end = lines.length;
    return lines.slice(start + 1, end).join("\n").trim();
}

// 搜尋用的純文字：拿掉標記，只留畫面上看得到的字
export function sourceText(section) {
    return section
        .replace(/\[\[([^\]|#]*)(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]/g, (m, page, label) => label ?? page) // [[頁名#錨點|顯示的字]]
        .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // [字](網址)
        .replace(/<[^>]+>/g, "") // 元件、HTML 標籤（<Girl3Icon>虞小梅</Girl3Icon> 留下名字）
        .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, "") // 清單符號
        .replace(/\*\*|__|`|\|\|/g, "") // 粗體、行內程式碼、防雷
        .replace(/\s+/g, " ")
        .trim();
}
