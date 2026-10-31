// Forge - Equipment - Weapons (English)
//
// Text-only translation file. Numbers, parent and icons come from the zh data/forge/weapon.js.
// Keys are the zh item names (the "name" in data/forge/weapon.js). Missing fields fall back to zh.
//   name     display name
//   requires unlock conditions
//   info     text columns such as the elixir "Item Effects" (numbers come from the zh file)
//   obtain   how to obtain (Markdown)
//   note     notes (Markdown)
export default {
  title: "Forge - Equipment - Weapons",
  items: {
    "唐門小劍": {
      name: "Tang Sect Short Sword",
      requires: [],
      obtain: "Initial",
      note: "",
    },
    "唐門菁英小劍": {
      name: "Tang Sect Elite Short Sword",
      requires: ["Tang Sect Short Sword Lv 5", "Sect Scale 2"],
      obtain: "Initial",
      note: "",
    },
    "唐門傳承小劍": {
      name: "Tang Sect Legacy Short Sword",
      requires: ["Tang Sect Elite Short Sword Lv 10", "Sect Scale 3"],
      obtain: `
- 🚩[Abandoned Temple route](/en/event/simple/2-06-1-離家出走) without 🚩[studying at Qingcheng](/event/simple/2-08-2-唐門迎敵): obtained during [Tang Sect Aftermath](/event/simple/2-08-2-唐門戰後).
- 🚩[Inn route](/en/event/simple/2-06-1-離家出走): obtained during [Return to Tangmen](/en/event/simple/2-10-1-回歸唐門).
- [Ye Yunshang romance route](/event/pursuit/girl2): obtained after rolling 【🎲<50 Ancient Weapon Remains】 during [Life at the Valley Bottom](/event/simple/3-05-1-谷底生活).
`,
      note: "",
    },
    "瀝泉小劍": {
      name: "Liquan Small Sword",
      requires: ["Tang Sect Elite Short Sword Lv 10", "Sect Scale 3"],
      obtain: "- 🚩[Ye Yunzhou accompanies you to the Martial Arts Conference](/event/simple/3-08-2-邀請葉雲舟), and you do not leave the Tang Sect partway through the conference (i.e. Zhao Huo does not challenge Shangguan Jun, and 🚩[Ye Yunzhou fights for the Tang Sect](/event/simple/3-10-2-點蒼逆徒)). At [Resting at the Inn](/event/simple/3-10-2-客棧休憩) after the conference, take a bath first, then go downstairs to drink to trigger [Night Visit at Nanxi](/event/simple/3-10-2-南溪夜訪); obtained if Ye Yunzhou's favorability ≥ 40.",
      note: "",
    },
    "切魚刀": {
      name: "Fish-Slaughtering Knife",
      requires: ["Tang Sect Short Sword Lv 5", "Sect Scale 2"],
      obtain: "- 🚩[Hopeless route](/en/event/simple/1-06-1-掌門的安排): at the monthly meeting choose \"Join the Demonic Cult\", \"It's not baseless\" and \"I know Liu E\". Lost after leaving the Hopeless route.",
      note: "",
    },
    "玉霄神匕": {
      name: "Yuxiao Divine Dagger",
      requires: ["Tang Sect Short Sword Lv 10"],
      obtain: `
(Tentative, not fully verified)
- Have triggered Xiaomei's trip to Xiangyang
- Have triggered the [Xiaomei Seeks Refuge](/en/event/simple/2-10-3-小梅投靠) event
- 🚩[Stayed on the mountain during the Woyun Hill incident](/en/event/simple/3-01-2-臥雲崗事件)
- During [First Senior Brother Seriously Injured](/en/event/simple/3-01-3-大師兄重傷), treat the First Senior Brother and choose "Don't stop channeling" so that Xiaomei stays at the Tang Sect
- In early month 2 of year 3, with ≤ 2 actions left, the Mei & Zhu farewell event triggers automatically. If the following are met, she leaves this dagger with the Third Senior Brother to pass on later:
  1. Have triggered Xiaomei's trip to Xiangyang
  2. Yu Xiaomei favorability ≥ 50
  3. 🚩Yu Zhu is not at the Tang Sect
- If all of the above are met, the Third Senior Brother automatically gives you this dagger during [Flying Stone Gang War Resolution](/en/event/simple/3-03-1-飛石幫解戰)
`,
      note: "\"Yuxiao Shen\" refers to the plum blossom.",
    },
    "金錢劍": {
      name: "Money Sword",
      requires: ["Tang Sect Short Sword Lv 10"],
      obtain: "- During [Qingcheng Awakening](/event/simple/2-08-3-青城醒轉) with Morality < 40, choose \"Rummage through the chests\", then obtained after 【🎲<66 Money?】.",
      note: "",
    },
    "完竟劍": {
      name: "Wanjing Sword",
      requires: [],
      obtain: "- During [Brainstorming](/event/simple/3-12-1-集思廣益#郁竹意見), when visiting Xiaozhu choose 【Destroy the blueprints】 and 【Forge a sword for me】; obtained when you visit the forge in late month 2 of year 4 on the West Wulin route.",
      note: "Once obtained, the game forcibly switches your equipment to this weapon.",
    },
  },
};
