// 鍛冶場 - 暗器 - 平射（日本語）
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
  title: "鍛冶場 - 暗器 - 平射",
  items: {
    "脫手鏢": {
      name: "脱手鏢",
      anchor: "脫手標",
      requires: [],
      obtain: "初期",
      note: "",
    },
    "飛梭": {
      name: "飛梭",
      requires: ["脱手鏢レベル5", "門派規模2"],
      obtain: "初期",
      note: "",
    },
    "無形箭": {
      name: "無形矢",
      requires: ["飛梭レベル10", "門派規模3"],
      obtain: `
- 初期
- [臥雲崗見物](/ja/event/simple/3-01-3-圍觀臥雲崗)で「石公遠の死演技」になり([大師兄の負傷](/ja/event/simple/3-01-1-大師兄負傷)で大師兄を治癒済み、または未治癒で🎲≧50)、かつ1月中旬の宿屋で雑談「金剛神槍指」をしていない場合、帰路の宿屋の雑談「金剛神槍指」で入手。
`,
      note: "",
    },
    "鐵橄欖": {
      name: "鉄橄欖",
      requires: ["脱手鏢レベル10", "門派規模2"],
      obtain: "初期",
      note: "",
    },
  },
};
