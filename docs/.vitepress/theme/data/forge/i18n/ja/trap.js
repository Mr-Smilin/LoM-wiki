// 鍛冶場 - 暗器 - 罠（日本語）
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
  title: "鍛冶場 - 暗器 - 罠",
  items: {
    "似草針": {
      name: "似草針",
      requires: [],
      obtain: "初期",
      note: "",
    },
    "地鳴雷": {
      name: "地鳴雷",
      requires: ["似草針レベル10", "門派規模2"],
      obtain: "初期",
      note: "",
    },
    "猛火油櫃": {
      name: "猛火油櫃",
      requires: ["似草針レベル10", "門派規模2"],
      obtain: "- 🚩「破廟ルート」([家出](/ja/event/simple/2-06-1-離家出走)) で、[唐門の迎撃](/ja/event/simple/2-08-2-唐門迎敵)の時に講経堂の防衛に加わり、ダイスで【🎲＜66 猛火油櫃の図紙】を出すと入手",
      note: "",
    },
  },
};
