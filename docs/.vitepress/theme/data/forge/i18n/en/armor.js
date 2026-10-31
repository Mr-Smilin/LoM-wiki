// Forge - Equipment - Armor (English)
//
// Text-only translation file. Numbers, parent and icons come from the zh data/forge/armor.js.
// Keys are the zh item names (the "name" in data/forge/armor.js). Missing fields fall back to zh.
//   name     display name
//   requires unlock conditions
//   info     text columns such as the elixir "Item Effects" (numbers come from the zh file)
//   obtain   how to obtain (Markdown)
//   note     notes (Markdown)
export default {
  title: "Forge - Equipment - Armor",
  items: {
    "唐門制服": {
      name: "Tang Sect Uniform",
      requires: [],
      obtain: "Initial",
      note: "",
    },
    "輕量化": {
      name: "Lightweight",
      requires: ["Tang Sect Uniform Lv 5", "Sect Scale 2"],
      obtain: "Initial",
      note: "",
    },
    "紙甲": {
      name: "Paper Armor",
      requires: ["Lightweight Lv 10", "Sect Scale 3"],
      obtain: "- 🚩[Abandoned Temple route](/en/event/simple/2-06-1-離家出走): during [Tang Sect Under Attack](/event/simple/2-08-2-唐門迎敵), help defend the Sutra Hall and roll 【🎲<33 Paper Armor Blueprint】 to obtain.",
      note: "",
    },
    "護心鏡": {
      name: "Heart Protector",
      requires: ["Tang Sect Uniform Lv 10", "Sect Scale 2"],
      obtain: "Initial",
      note: "- Still the armor with the best stats",
    },
    "密密縫": {
      name: "Dense Stitching",
      requires: ["Tang Sect Uniform Lv 10", "Sect Scale 3"],
      obtain: `
- 🚩[Apprenticed to Xiahou Lan](/en/event/simple/2-04-1-衣服遭竊): during [Snow Mountain Appointment](/event/simple/3-07-2-雪山之約), have Xiahou Lan fight the third round, then roll 【🎲<70 Ruthless Kill】.
- 🚩[Xiahou Lan romance](/event/pursuit/girl5): during [Inviting Xiahou Lan](/event/simple/3-08-3-邀請夏侯蘭), choose "No" and "Attack", then lose the duel.
`,
      note: "",
    },
    "牛皮制服": {
      name: "Cowhide Uniform",
      requires: ["Tang Sect Uniform Lv 10", "Sect Scale 2"],
      obtain: "- 🚩[Studied at Qingcheng](/event/simple/2-08-2-唐門迎敵): obtained automatically through the story during [Qingcheng Midterm Exam](/event/simple/2-11-3-青城段考).",
      note: "",
    },
    "逆鱗寶衣": {
      name: "Reverse Scale Treasure Robe",
      requires: ["Lightweight Lv 10"],
      obtain: `
- During [Master Brother's Fun Time](/en/event/simple/1-04-1-大師兄找樂子), obtain the item "First Senior Brother's Doodle".
- 🚩[Study at Kongtong](/en/event/simple/2-02-1-留學討論) and 🚩[join the Iron Fist Sect](/en/event/simple/2-03-1-崆峒留學)
- [*Miscellaneous Notes on Forging Eighteen Exotic Weapons*](/en/event/simple/2-02-1-留學討論) cultivation level ≥ 7
- Obtained after the "Reverse Scale Treasure Robe" forging event triggers randomly from the handyman command at the Kongtong Iron Fist Sect, or at the Tang Sect forge after 🚩taking in Yu Zhu
`,
      note: "",
    },
    "烏蠶寶衣": {
      name: "Black Silkworm Treasure Robe",
      requires: ["Heart Protector Lv 10"],
      obtain: `
- Trigger the "Heart of Bamboo" event under the following conditions, making sure your love interest at that time is Yu Zhu:
  1. 🚩Yu Xiaomei is at the Tang Sect
  2. 🚩Yu Zhu is at the Tang Sect
  3. Yu Zhu favorability ≥ 50
  4. No earlier than early month 11 of year 2
  5. No later than early month 12 of year 2
  6. Click the main gate to trigger the event
- In early month 2 of year 3, with ≤ 2 actions left, the Mei & Zhu farewell event triggers automatically; if your love interest is Yu Zhu, obtained at the end of the event
`,
      note: "",
    },
  },
};
