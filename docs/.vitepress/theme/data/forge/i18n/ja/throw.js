// 鍛冶場 - 暗器 - 投射（日本語）
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
  title: "鍛冶場 - 暗器 - 投射",
  items: {
    "鞭炮": {
      name: "爆竹",
      requires: [],
      obtain: "初期",
      note: "",
    },
    "流星箭": {
      name: "流星矢",
      requires: ["爆竹レベル5", "門派規模2"],
      obtain: "初期",
      note: "",
    },
    "雷火彈": {
      name: "雷火弾",
      requires: ["流星矢レベル10", "門派規模3"],
      obtain: "初期",
      note: "- 戦役では味方へのダメージも大きい。範囲を避けるよう注意",
    },
    "神奇球": {
      name: "神奇球",
      requires: ["爆竹レベル10", "門派規模2"],
      obtain: "初期",
      note: "戦役では自分の足を取られるので慎重に",
    },
  },
};
