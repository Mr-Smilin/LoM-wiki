// Alchemy Room - Elixirs (English)
//
// Text-only translation file. Numbers, parent and icons come from the zh data/forge/medicine.js.
// Keys are the zh item names (the "name" in data/forge/medicine.js). Missing fields fall back to zh.
//   name     display name
//   requires unlock conditions
//   info     text columns such as the elixir "Item Effects" (numbers come from the zh file)
//   obtain   how to obtain (Markdown)
//   note     notes (Markdown)
export default {
  title: "Alchemy Room - Elixirs",
  intro: "Each completed level produces one; can be developed repeatedly.",
  items: {
    "南螫礜石散": {
      name: "Nanshi Yushi Powder",
      requires: [],
      info: {
        "物品效果": `
Yin Yang +10
Stamina +2
Internal Power +1
Poison Resistance +2
Mind +30
`,
      },
      obtain: "Initial",
      note: "",
    },
    "穿心龍膽湯": {
      name: "Chuanxin Longdan Soup",
      requires: ["Nanshi Yushi Powder in development"],
      info: {
        "物品效果": `
Yin Yang -10
Stamina +1
Internal Power +2
Numbness Resistance +2
Mind +30
`,
      },
      obtain: "Initial",
      note: "",
    },
    "乖乖水": {
      name: "Guai Guai Water",
      requires: ["Nanshi Yushi Powder in development"],
      info: {
        "物品效果": `
Yin Yang -10
Cultivation +5
Temperament -2
Attraction +3
Mind +50
`,
      },
      obtain: "Initial",
      note: "",
    },
    "胡椒粉丸": {
      name: "Pepper Pill",
      requires: ["Chuanxin Longdan Soup in development", "Sect Scale 2"],
      info: {
        "物品效果": `
Poison Resistance +3
Numbness Resistance +3
Mind +50
`,
      },
      obtain: "Initial",
      note: "",
    },
    "睡丹": {
      name: "Sleeping Pill",
      requires: ["Nanshi Yushi Powder in development"],
      info: {
        "物品效果": `
Stamina +5
Internal Power +5
Mind +80
Action Count -1
`,
      },
      obtain: "- 🚩During [Fourth Senior Brother's Business Trip](/en/event/detailed_description/3-08-1-四師兄遠遊經商), choose \"A difficult request\", roll 【🎲≥70 Local Specialties】, then choose \"Immortals have elixirs\". After [Disciples' Farewell - Fourth Senior Brother Returns](/event/simple/3-11-1-門人辭別#四師兄歸來), chat with the Fourth Senior Brother in the male disciples' room ([Chatting with Fourth Senior Brother](/event/simple/0-0-0-四師兄閒聊)) and choose \"The thing I asked you to look into\" to obtain.",
      note: "- Usable only with ≥ 2 actions remaining",
    },
    "萬靈油": {
      name: "Panacea Oil",
      requires: ["Nanshi Yushi Powder in development", "Sect Scale 2"],
      info: {
        "物品效果": `
Stamina +1
Internal Power +1
Poison Resistance +1
Numbness Resistance +1
Mind +50
`,
      },
      obtain: "- Having 🚩[studied at Qingcheng](/event/simple/2-08-2-唐門迎敵) and 🚩captured Tang Shouhong during [Tangmen Civil War](/en/event/simple/2-12-3-唐門內戰), obtained automatically during [Dealing with Tang Shouhong](/event/simple/2-12-3-唐守鴻處置).",
      note: "- With 🚩[Ye Yunshang romance](/event/pursuit/girl2) and 🚩[Ye Yunshang accompanies you to the Martial Arts Conference](/event/simple/3-08-2-邀請葉雲舟), if you choose to travel by boat during [Heading to Jinxiang Palace](/event/simple/3-09-3-前往錦香宮), having unlocked this item prevents Yunshang's seasickness. (It only needs to have been unlocked by long-pressing once; you don't need to actually craft it.)",
    },
  },
};
