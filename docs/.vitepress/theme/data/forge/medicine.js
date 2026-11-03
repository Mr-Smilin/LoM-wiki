// 煉丹房 - 靈丹
//
// 新增項目：複製下面任一個 { … } 區塊，貼進 items，改內容即可。不需要改任何 .vue。
//
// 翻譯（同 eventSeries.js 的寫法）：會因語言不同的文字寫成 { root: 繁中, ja: 日文, en: 英文 }，
// 只有繁中時直接寫字串。沒寫的語言顯示繁中；簡中不用寫，build 時由繁中自動轉換。
//
//   name     項目名稱 { root, ja, en }。root（繁中）同分類內不可重複，也是網址錨點，例如 #南蝥礜石散
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
  title: "煉丹房 - 靈丹",
  intro: {
    root: "每完成一級產出一顆，可重複開發。",
    ja: "1レベル完成するごとに1個産出され、繰り返し開発できる。",
    en: "Each completed level produces one; can be developed repeatedly.",
  },
  items: [
    {
      name: { root: "南蝥礜石散", ja: "南蝥礜石散", en: "Nanmao Yushi Powder" },
      icon: "/images/items/medis/icon_medi_01.webp",
      parent: null,
      requires: [],
      info: {
        "總煉丹": 15,
        "總銀兩": 300,
        "物品效果": {
          root: `
陰陽+10
體力+2
內力+1
抗毒+2
心相+30
`,
          ja: `
陰陽+10
体力+2
内功+1
対毒+2
心相+30
`,
          en: `
Yin Yang +10
Stamina +2
Internal Power +1
Poison Resistance +2
Mind +30
`,
        },
      },
      obtain: { root: "初始", ja: "初期", en: "Initial" },
      note: "",
    },
    {
      name: { root: "穿心龍膽湯", en: "Chuanxin Longdan Soup" },
      icon: "/images/items/medis/icon_medi_02.webp",
      parent: "南蝥礜石散",
      requires: { root: ["南蝥礜石散開發中"], ja: ["南蝥礜石散開発中"], en: ["Nanmao Yushi Powder in development"] },
      info: {
        "總煉丹": 15,
        "總銀兩": 300,
        "物品效果": {
          root: `
陰陽-10
體力+1
內力+2
抗麻+2
心相+30
`,
          ja: `
陰陽-10
体力+1
内功+2
対麻痺+2
心相+30
`,
          en: `
Yin Yang -10
Stamina +1
Internal Power +2
Numbness Resistance +2
Mind +30
`,
        },
      },
      obtain: { root: "初始", ja: "初期", en: "Initial" },
      note: "",
    },
    {
      name: { root: "乖乖水", en: "Guai Guai Water" },
      icon: "/images/items/medis/icon_medi_04.webp",
      parent: "南蝥礜石散",
      requires: { root: ["南蝥礜石散開發中"], ja: ["南蝥礜石散開発中"], en: ["Nanmao Yushi Powder in development"] },
      info: {
        "總煉丹": 15,
        "總銀兩": 300,
        "物品效果": {
          root: `
陰陽-10
修養+5
性情-2
向心+3
心相+50
`,
          ja: `
陰陽-10
品性+5
性情-2
団結+3
心相+50
`,
          en: `
Yin Yang -10
Cultivation +5
Temperament -2
Attraction +3
Mind +50
`,
        },
      },
      obtain: { root: "初始", ja: "初期", en: "Initial" },
      note: "",
    },
    {
      name: { root: "胡椒粉丸", en: "Pepper Pill" },
      icon: "/images/items/medis/icon_medi_03.webp",
      parent: "穿心龍膽湯",
      requires: {
        root: ["穿心龍膽湯開發中", "門派規模2"],
        ja: ["穿心龍膽湯開発中", "門派規模2"],
        en: ["Chuanxin Longdan Soup in development", "Sect Scale 2"],
      },
      info: {
        "總煉丹": 25,
        "總銀兩": 500,
        "物品效果": {
          root: `
抗毒+3
抗麻+3
心相+50
`,
          en: `
Poison Resistance +3
Numbness Resistance +3
Mind +50
`,
        },
      },
      obtain: { root: "初始", ja: "初期", en: "Initial" },
      note: "",
    },
    {
      name: { root: "睡丹", en: "Sleeping Pill" },
      icon: "/images/items/medis/icon_medi_05.webp",
      parent: "南蝥礜石散",
      requires: { root: ["南蝥礜石散開發中"], ja: ["南蝥礜石散開発中"], en: ["Nanmao Yushi Powder in development"] },
      info: {
        "總煉丹": 25,
        "總銀兩": 500,
        "物品效果": {
          root: `
體力+5
內力+5
心相+80
行動-1
`,
          ja: `
体力+5
内功+5
心相+80
行動回数-1
`,
          en: `
Stamina +5
Internal Power +5
Mind +80
Action Count -1
`,
        },
      },
      obtain: {
        root: "- 🚩[四師兄辭別](/event/detailed_description/3-08-1-四師兄遠遊經商)時，選擇「難辦的要求」，並擲骰【🎲≧70 土特產】，再選「神仙有靈丹」。[門人辭別-四師兄歸來](/event/simple/3-11-1-門人辭別#四師兄歸來)後，在男弟子房找[四師兄閒聊](/event/simple/0-0-0-四師兄閒聊)，選擇「以前托你打聽的事」獲得。",
        ja: "- 🚩[四師兄、商いの長旅へ](/ja/event/detailed_description/3-08-1-四師兄遠遊經商)の別れの時、「わざと難癖をつける」を選び、ダイスで【🎲≧70 さあ、地元の土産品だな】を出し、さらに「華山に仙人がいて、仙人は霊丹を持っているらしい」を選ぶ。[門人の暇乞い-四師兄が帰る](/ja/event/simple/3-11-1-門人辭別#四師兄歸來)の後、男弟子室で[四師兄との雑談](/ja/event/simple/0-0-0-四師兄閒聊)を行い、「以前頼んでおいた件」で入手。",
        en: "- 🚩During [Fourth Senior Brother's Business Trip](/en/event/detailed_description/3-08-1-四師兄遠遊經商), choose \"A difficult request\", roll 【🎲≥70 Local Specialties】, then choose \"Immortals have elixirs\". After [Disciples' Farewell - Fourth Senior Brother Returns](/event/simple/3-11-1-門人辭別#四師兄歸來), chat with the Fourth Senior Brother in the male disciples' room ([Chatting with Fourth Senior Brother](/event/simple/0-0-0-四師兄閒聊)) and choose \"The thing I asked you to look into\" to obtain.",
      },
      note: { root: "- 剩餘行動≧2時才能用", ja: "残り行動回数≧2の時のみ使用可", en: "- Usable only with ≥ 2 actions remaining" },
    },
    {
      name: { root: "萬靈油", ja: "万霊油", en: "Ten Thousand Spirit Oil" },
      icon: "/images/items/medis/icon_medi_22.webp",
      parent: "南蝥礜石散",
      requires: {
        root: ["南蝥礜石散開發中", "門派規模2"],
        ja: ["南蝥礜石散開発中", "門派規模2"],
        en: ["Nanmao Yushi Powder in development", "Sect Scale 2"],
      },
      info: {
        "總煉丹": 25,
        "總銀兩": 750,
        "物品效果": {
          root: `
體力+1
內力+1
抗毒+1
抗麻+1
心相+50
`,
          ja: `
体力+1
内功+1
対毒+1
対麻痺+1
心相+50
`,
          en: `
Stamina +1
Internal Power +1
Poison Resistance +1
Numbness Resistance +1
Mind +50
`,
        },
      },
      obtain: {
        root: "- 曾經🚩[留學青城](/event/simple/2-08-2-唐門迎敵)，且[唐門內戰](/event/simple/2-12-3-唐門內戰)時🚩捉住唐守鴻，[唐守鴻處置](/event/simple/2-12-3-唐守鴻處置)時自動獲得。",
        ja: "- かつて🚩「青城留学」([唐門の迎撃](/ja/event/simple/2-08-2-唐門迎敵)) しており、かつ[唐門内戦](/ja/event/simple/2-12-3-唐門內戰)の時に🚩「唐守鴻を捕らえた」なら、[唐守鴻の処遇](/ja/event/simple/2-12-3-唐守鴻處置)の時に自動入手。",
        en: "- Having 🚩[studied at Qingcheng](/event/simple/2-08-2-唐門迎敵) and 🚩captured Tang Shouhong during [Tangmen Civil War](/en/event/simple/2-12-3-唐門內戰), obtained automatically during [Dealing with Tang Shouhong](/event/simple/2-12-3-唐守鴻處置).",
      },
      note: {
        root: "- 若🚩[和葉雲裳結緣](/event/pursuit/girl2)、🚩[葉雲裳同行武林大會](/event/simple/3-08-2-邀請葉雲舟)，[前往錦香宮](/event/simple/3-09-3-前往錦香宮)時選擇搭船，已解鎖此物可防止雲裳暈船。(只要曾經長按解鎖過就行，不需要真的做出成品。)",
        ja: "- 🚩「葉雲裳と結縁」([葉雲裳結縁攻略](/ja/event/pursuit/girl2))、🚩「葉雲裳が武林大会に同行」([葉雲舟を誘う](/ja/event/simple/3-08-2-邀請葉雲舟))なら、[錦香宮へ向かう](/ja/event/simple/3-09-3-前往錦香宮)時に船を選んでもこの品を解放済みなら雲裳の船酔いを防げる。(一度でも長押しで解放していればよく、実際に完成品を作る必要はない。)",
        en: "- With 🚩[Ye Yunshang romance](/event/pursuit/girl2) and 🚩[Ye Yunshang accompanies you to the Martial Arts Conference](/event/simple/3-08-2-邀請葉雲舟), if you choose to travel by boat during [Heading to Jinxiang Palace](/event/simple/3-09-3-前往錦香宮), having unlocked this item prevents Yunshang's seasickness. (It only needs to have been unlocked by long-pressing once; you don't need to actually craft it.)",
      },
    },
  ],
};
