// 鍛冶場 - 裝備 - 防具
//
// 新增項目：複製下面任一個 { … } 區塊，貼進 items，改內容即可。不需要改任何 .vue。
//
// 翻譯（同 eventSeries.js 的寫法）：會因語言不同的文字寫成 { root: 繁中, ja: 日文, en: 英文 }，
// 只有繁中時直接寫字串。沒寫的語言顯示繁中；簡中不用寫，build 時由繁中自動轉換。
//
//   name     項目名稱 { root, ja, en }。root（繁中）同分類內不可重複，也是網址錨點，例如 #唐門制服
//   anchor   只在要沿用舊連結時寫，例如 { ja: "舊日文錨點" }；沒寫的語言用繁中名稱
//   icon     圖示路徑（/images/ 開頭）
//   parent   上一層項目的繁中名稱；開發樹起點填 null
//   special  true = 不在開發樹上（事件取得等），會列在「特殊取得」；平常不用寫
//   requires 解鎖條件，一個條件一個字串；沒有條件填 []
//            翻譯時整組寫成 { root: [...], ja: [...], en: [...] }
//   stats    數值表，一行一個素質："素質名稱": [等級0, 等級1, …, 等級10]
//            整行只有一個值時直接寫一個值，例如 "戰役-爆擊率": "15%"
//   info     （靈丹、毒藥）數值表，"欄位名稱": 值；多行文字（物品效果）可寫成 { root, ja, en }
//   obtain   獲得方式（Markdown：[文字](/路徑) 是連結，「- 」開頭是條列），可寫成 { root, ja, en }
//   note     備註（Markdown，同上），可寫成 { root, ja, en }
//
// 新增一行數值：在該項目的 stats（或 info）裡加一行 "名稱": [...]，個數要和其他行一樣。
// 名稱是新的話，到 terms.js 的 rows 加一行 "名稱": { ja: "…", en: "…" }（繁中直接顯示名稱，不用寫 root）；
// 數值裡的文字（例如「一種」）翻譯在 terms.js 的 values，寫法相同。
export default {
  title: "鍛冶場 - 裝備 - 防具",
  items: [
    {
      name: { root: "唐門制服", en: "Tang Sect Uniform" },
      icon: "/images/items/equips/icon_equip_01.webp",
      parent: null,
      requires: [],
      stats: {
        "決鬥-備揍減免": ["-", 3, 5, 8, 10, 13, 15, 18, 20, 23, 25],
        "戰役-全體血量": ["-", 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        "戰役-防禦等級": ["-", 1, 1, 1, 2, 2, 2, 2, 2, 2, 2],
        "單級鍛造": ["-", 5, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "累積鍛造": ["-", 5, 7, 10, 14, 19, 25, 32, 40, 49, 59],
        "單級銀兩": ["-", 150, 60, 90, 120, 150, 180, 210, 240, 270, 300],
        "累積銀兩": ["-", 150, 210, 300, 420, 570, 750, 960, 1200, 1470, 1770],
      },
      obtain: { root: "初始", ja: "初期", en: "Initial" },
      note: "",
    },
    {
      name: { root: "輕量化", ja: "軽量化", en: "Lightweight" },
      icon: "/images/items/equips/icon_equip_11.webp",
      parent: "唐門制服",
      requires: {
        root: ["唐門制服等級5", "門派規模2"],
        ja: ["唐門制服レベル5", "門派規模2"],
        en: ["Tang Sect Uniform Lv 5", "Sect Scale 2"],
      },
      stats: {
        "決鬥-暗器命中": ["-", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "戰役-移動速度": ["-", "-", "-", "-", "-", "-", "-", "-", "-", 1, 1],
        "單級鍛造": ["-", 5, 5, 6, 7, 8, 9, 10, 10, 10, 10],
        "累積鍛造": ["-", 5, 10, 16, 23, 31, 40, 50, 60, 70, 80],
        "單級銀兩": ["-", 250, 250, 300, 350, 400, 450, 500, 500, 500, 500],
        "累積銀兩": ["-", 250, 500, 800, 1150, 1550, 2000, 2500, 3000, 4500, 5000],
      },
      obtain: { root: "初始", ja: "初期", en: "Initial" },
      note: "",
    },
    {
      name: { root: "紙甲", en: "Paper Armor" },
      icon: "/images/items/equips/icon_equip_21.webp",
      parent: "輕量化",
      requires: { root: ["輕量化等級10", "門派規模3"], ja: ["軽量化レベル10", "門派規模3"], en: ["Lightweight Lv 10", "Sect Scale 3"] },
      stats: {
        "決鬥-備揍減免": ["-", 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
        "戰役-防禦等級": ["-", "-", "-", 1, 1, 1, 2, 2, 2, 2, 3],
        "戰役-移動速度": ["-", 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        "單級鍛造": ["-", 5, 6, 7, 8, 9, 10, 10, 10, 10, 10],
        "累積鍛造": ["-", 5, 11, 18, 26, 35, 45, 55, 65, 75, 85],
        "單級銀兩": ["-", 250, 300, 350, 400, 450, 500, 500, 500, 500, 500],
        "累積銀兩": ["-", 250, 550, 900, 1300, 1750, 2250, 2750, 3250, 3750, 4250],
      },
      obtain: {
        root: "- 🚩[破廟線](/event/simple/2-06-1-離家出走)，[唐門迎敵](/event/simple/2-08-2-唐門迎敵)時，協防講經堂並擲骰到【🎲＜33 紙甲圖紙】獲得",
        ja: "- 🚩「破廟ルート」([家出](/ja/event/simple/2-06-1-離家出走)) で、[唐門の迎撃](/ja/event/simple/2-08-2-唐門迎敵)の時に講経堂の防衛に加わり、ダイスで【🎲＜33 紙甲の図紙】を出すと入手",
        en: "- 🚩[Abandoned Temple route](/en/event/simple/2-06-1-離家出走): during [Tang Sect Under Attack](/event/simple/2-08-2-唐門迎敵), help defend the Sutra Hall and roll 【🎲<33 Paper Armor Blueprint】 to obtain.",
      },
      note: "",
    },
    {
      name: { root: "護心鏡", en: "Heart-Protecting Mirror" },
      icon: "/images/items/equips/icon_equip_10.webp",
      parent: "唐門制服",
      requires: {
        root: ["唐門制服等級10", "門派規模2"],
        ja: ["唐門制服レベル10", "門派規模2"],
        en: ["Tang Sect Uniform Lv 10", "Sect Scale 2"],
      },
      stats: {
        "決鬥-備揍減免": ["-", 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        "決鬥-額外血量": ["-", 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
        "戰役-全體血量": ["-", 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        "戰役-防禦等級": ["-", "-", 2, 2, 2, 3, 3, 3, 4, 4, 5],
        "單級鍛造": ["-", 5, 5, 6, 7, 8, 9, 10, 10, 10, 10],
        "累積鍛造": ["-", 5, 10, 16, 23, 31, 40, 50, 60, 70, 80],
        "單級銀兩": ["-", 250, 250, 300, 350, 400, 450, 500, 500, 500, 500],
        "累積銀兩": ["-", 250, 500, 800, 1150, 1550, 2000, 2500, 3000, 3500, 4000],
      },
      obtain: { root: "初始", ja: "初期", en: "Initial" },
      note: { root: "- 除路線限定的烏蠶寶衣外，目前仍是素質最佳的護甲", ja: "- ルート限定の烏蚕の宝衣を除けば、現状でも性能が最良の防具", en: "- Still the armor with the best stats" },
    },
    {
      name: { root: "密密縫", ja: "密々綴", en: "Dense Stitching" },
      icon: "/images/items/equips/icon_equip_20.webp",
      parent: "唐門制服",
      requires: {
        root: ["唐門制服等級10", "門派規模3"],
        ja: ["唐門制服レベル10", "門派規模3"],
        en: ["Tang Sect Uniform Lv 10", "Sect Scale 3"],
      },
      stats: {
        "決鬥-備揍減免": ["-", 7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
        "戰役-防禦等級": ["-", "-", 2, 2, 2, 3, 3, 3, 4, 4, 5],
        "戰役-每秒回血": ["-", "-", "-", "-", "-", 2, 2, 2, 2, 2, 3],
        "單級鍛造": ["-", 5, 6, 7, 8, 9, 10, 10, 10, 10, 10],
        "累積鍛造": ["-", 5, 11, 18, 26, 35, 45, 55, 65, 75, 85],
        "單級銀兩": ["-", 250, 300, 350, 400, 450, 500, 500, 500, 500, 500],
        "累積銀兩": ["-", 250, 550, 900, 1300, 1750, 2250, 2750, 3250, 3750, 4250],
      },
      obtain: {
        root: `
- 🚩[拜師夏侯蘭](/event/simple/2-04-1-衣服遭竊)，[雪山之約](/event/simple/3-07-2-雪山之約)時，由夏侯蘭出戰第三香，且後續擲骰【🎲＜70 無情殺害】。
- 🚩[和夏侯蘭結緣](/event/pursuit/girl5)，[邀請夏侯蘭](/event/simple/3-08-3-邀請夏侯蘭)時，選擇不是、襲擊，並對決落敗。
`,
        ja: `
- 🚩「夏侯蘭に師事」([衣服が盗まれる](/ja/event/simple/2-04-1-衣服遭竊)) で、[雪山の約束](/ja/event/simple/3-07-2-雪山之約)の時に夏侯蘭が第三香で出陣し、その後の処置が【🎲＜70 無情に殺害】になる。
- 🚩「夏侯蘭と結縁」([夏侯蘭結縁攻略](/ja/event/pursuit/girl5)) で、[夏侯蘭を誘う](/ja/event/simple/3-08-3-邀請夏侯蘭)の時に「違う」「襲撃」を選び、対決に敗北する。
`,
        en: `
- 🚩[Apprenticed to Xiahou Lan](/en/event/simple/2-04-1-衣服遭竊): during [Snow Mountain Appointment](/event/simple/3-07-2-雪山之約), have Xiahou Lan fight the third round, then roll 【🎲<70 Ruthless Kill】.
- 🚩[Xiahou Lan romance](/event/pursuit/girl5): during [Inviting Xiahou Lan](/event/simple/3-08-3-邀請夏侯蘭), choose "No" and "Attack", then lose the duel.
`,
      },
      note: "",
    },
    {
      name: { root: "牛皮制服", ja: "牛革の制服", en: "Cowhide Uniform" },
      icon: "/images/items/equips/icon_equip_22.webp",
      parent: "唐門制服",
      requires: {
        root: ["唐門制服等級10", "門派規模2"],
        ja: ["唐門制服レベル10", "門派規模2"],
        en: ["Tang Sect Uniform Lv 10", "Sect Scale 2"],
      },
      stats: {
        "決鬥-備揍減免": ["-", 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
        "戰役-全體血量": ["-", 7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
        "戰役-防禦等級": ["-", "-", "-", "-", "-", 1, 1, 1, 1, 1, 2],
        "單級鍛造": ["-", 5, 6, 7, 8, 9, 10, 10, 10, 10, 10],
        "累積鍛造": ["-", 5, 11, 18, 26, 35, 45, 55, 65, 75, 85],
        "單級銀兩": ["-", 250, 300, 350, 400, 450, 500, 500, 500, 500, 500],
        "累積銀兩": ["-", 250, 550, 900, 1300, 1750, 2250, 2750, 3250, 3750, 4250],
      },
      obtain: {
        root: "- 🚩[留學青城](/event/simple/2-08-2-唐門迎敵)，[青城段考](/event/simple/2-11-3-青城段考)時，劇情自動獲得。",
        ja: "- 🚩「青城留学」([唐門の迎撃](/ja/event/simple/2-08-2-唐門迎敵)) で、[青城の段階試験](/ja/event/simple/2-11-3-青城段考)の時に青城派好感＞2なら、シナリオで自動入手。",
        en: "- 🚩[Studied at Qingcheng](/event/simple/2-08-2-唐門迎敵): obtained automatically through the story during [Qingcheng Midterm Exam](/event/simple/2-11-3-青城段考).",
      },
      note: "",
    },
    {
      name: { root: "逆鱗寶衣", ja: "逆鱗宝衣", en: "Reverse Scale Treasure Robe" },
      anchor: { ja: "逆鱗宝衣" },
      icon: "/images/items/equips/icon_equip_24.webp",
      parent: "輕量化",
      requires: { root: ["輕量化等級10"], ja: ["軽量化レベル10"], en: ["Lightweight Lv 10"] },
      stats: {
        "決鬥-捅人傷害": ["-", 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
        "決鬥-暗器傷害": ["-", 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        "戰役-防禦等級": ["-", "-", "-", "-", "-", 2, 2, 2, 2, 2, 2],
        "戰役-反傷等級": ["-", "-", 1, 1, 2, 2, 3, 3, 4, 4, 5],
        "單級鍛造": ["-", 5, 6, 7, 8, 9, 10, 10, 10, 10, 10],
        "累積鍛造": ["-", 5, 11, 18, 26, 35, 45, 55, 65, 75, 85],
        "單級銀兩": ["-", 250, 300, 350, 400, 450, 500, 500, 500, 500, 500],
        "累積銀兩": ["-", 250, 550, 900, 1300, 1750, 2250, 2750, 3250, 3750, 4250],
      },
      obtain: {
        root: `
- [大師兄找樂子](/event/simple/1-04-1-大師兄找樂子)時，獲得物品「大師兄的塗鴉」。
- 🚩[留學崆峒](/event/simple/2-02-1-留學討論)並🚩[入鐵拳門](/event/simple/2-03-1-崆峒留學)
- [《十八種奇兵鍛法雜記》](/event/simple/2-02-1-留學討論)修練等級≥7
- 於崆峒鐵拳門雜匠指令，或🚩收留郁竹後在唐門鍛冶場雜匠指令隨機觸發打造逆鱗寶衣事件後獲得
`,
        ja: `
- [大師兄が楽しみを探す](/ja/event/simple/1-04-1-大師兄找樂子)で、アイテム「大師兄の落書き」を入手する。
- 🚩[留学について](/ja/event/simple/2-02-1-留學討論)で崆峒に留学し、🚩[崆峒派への留学](/ja/event/simple/2-03-1-崆峒留學)で鉄拳門に入る
- [十八種奇兵鍛法雑記](/ja/system/books/book_8004)修練レベル≧7
- 崆峒の鉄拳門での雑匠コマンド、または🚩郁竹を引き取った後の唐門の鍛冶場での雑匠コマンドでランダムに発生する逆鱗宝衣を作るイベントの後に入手
`,
        en: `
- During [Master Brother's Fun Time](/en/event/simple/1-04-1-大師兄找樂子), obtain the item "First Senior Brother's Doodle".
- 🚩[Study at Kongtong](/en/event/simple/2-02-1-留學討論) and 🚩[join the Iron Fist Sect](/en/event/simple/2-03-1-崆峒留學)
- [*Miscellaneous Notes on Forging Eighteen Exotic Weapons*](/en/event/simple/2-02-1-留學討論) cultivation level ≥ 7
- Obtained after the "Reverse Scale Treasure Robe" forging event triggers randomly from the handyman command at the Kongtong Iron Fist Sect, or at the Tang Sect forge after 🚩taking in Yu Zhu
`,
      },
      note: "",
    },
    {
      name: { root: "烏蠶寶衣", ja: "烏蚕の宝衣", en: "Black Silkworm Treasure Robe" },
      anchor: { ja: "烏蚕宝衣" },
      icon: "/images/items/equips/icon_equip_23.webp",
      parent: "護心鏡",
      requires: { root: ["護心鏡等級10"], ja: ["護心鏡レベル10"], en: ["Heart-Protecting Mirror Lv 10"] },
      stats: {
        "決鬥-血量": ["-", 50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
        "決鬥-抗毒": ["-", 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
        "決鬥-抗麻": ["-", 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
        "戰役-全部生命": ["-", 20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
        "戰役-防禦等級": ["-", "-", "-", "-", "-", 2, 2, 2, 2, 2, 5],
        "戰役-閃避等級": ["-", "-", "-", "-", "-", 1, 1, 1, 1, 1, 2],
        "單級鍛造": ["-", 5, 6, 7, 8, 9, 10, 10, 10, 10, 10],
        "累積鍛造": ["-", 5, 11, 18, 26, 35, 45, 55, 65, 75, 85],
        "單級銀兩": ["-", 250, 300, 350, 400, 450, 500, 500, 500, 500, 500],
        "累積銀兩": ["-", 250, 550, 900, 1300, 1750, 2250, 2750, 3250, 3750, 4250],
      },
      obtain: {
        root: `
- 符合以下以觸發[竹之心](/event/simple/2-11-1-竹之心)事件，並確保此時心上人為郁竹:
 1. 🚩[虞小梅在唐門](/event/simple/2-10-3-小梅投靠)
 2. 🚩[郁竹在唐門](/event/simple/2-10-2-郁竹拜師)
 3. 郁竹好感≥50
 4. 最早第二年十一月上旬
 5. 最晚第二年十二月上旬
 6. 點選大門觸發事件
- 第三年二月上旬行動次數≤2自動觸發梅竹辭別事件時，心上人為郁竹，於事件結束時獲得
`,
        ja: `
- 以下を満たして竹の心のイベントを発生させ、その時点で想い人を郁竹にしておく:
 1. 🚩虞小梅が唐門にいる
 2. 🚩郁竹が唐門にいる
 3. 郁竹好感≧50
 4. 最早で2年目11月上旬
 5. 最遅で2年目12月上旬
 6. 大門を選ぶと発生
- 3年目2月上旬に行動回数≦2で梅竹の別れのイベントが自動で発生したとき、想い人が郁竹なら、イベントの最後に入手
`,
        en: `
- Trigger the "Heart of Bamboo" event under the following conditions, making sure your love interest at that time is Yu Zhu:
  1. 🚩Yu Xiaomei is at the Tang Sect
  2. 🚩Yu Zhu is at the Tang Sect
  3. Yu Zhu favorability ≥ 50
  4. No earlier than early month 11 of year 2
  5. No later than early month 12 of year 2
  6. Click the main gate to trigger the event
- In early month 2 of year 3, with ≤ 2 actions left, the Mei & Zhu farewell event triggers automatically; if your love interest is Yu Zhu, obtained at the end of the event
`,
      },
      note: "",
    },
  ],
};
