// 煉丹房 - 毒薬（日本語）
//
// 文字だけを置く翻訳ファイル。数値・parent・アイコンは繁中の data/forge/<category>.js が正。
// キーは繁中の項目名（data/forge/<category>.js の name）。書かなかった欄は繁中が表示される。
//   name     表示名
//   anchor   URL のアンカー（#…）。既存リンク用。省略時は繁中の項目名
//   requires 解放条件
//   info     霊丹の「アイテム効果」など文字の欄（数値は繁中ファイルから）
//   obtain   入手方法（Markdown）
//   note     備考（Markdown）
export default {
  title: "煉丹房 - 毒薬",
  items: {
    "赤煉砂": {
      name: "赤煉砂",
      requires: [],
      obtain: "初期",
      note: "",
    },
    "烏水仙": {
      name: "烏水仙",
      requires: ["赤煉砂レベル5", "門派規模2"],
      obtain: "初期",
      note: "",
    },
    "三陰蟲草膠": {
      name: "三陰虫草膠",
      requires: ["赤煉砂レベル10", "門派規模2"],
      obtain: "初期",
      note: "",
    },
    "彼岸仙香": {
      name: "彼岸仙香",
      requires: ["赤煉砂レベル10", "門派規模3"],
      obtain: "初期",
      note: "",
    },
  },
};
