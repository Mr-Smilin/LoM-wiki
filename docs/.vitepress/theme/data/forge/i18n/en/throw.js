// Forge - Hidden Weapons - Lobbed Throw (English)
//
// Text-only translation file. Numbers, parent and icons come from the zh data/forge/throw.js.
// Keys are the zh item names (the "name" in data/forge/throw.js). Missing fields fall back to zh.
//   name     display name
//   requires unlock conditions
//   info     text columns such as the elixir "Item Effects" (numbers come from the zh file)
//   obtain   how to obtain (Markdown)
//   note     notes (Markdown)
export default {
  title: "Forge - Hidden Weapons - Lobbed Throw",
  items: {
    "鞭炮": {
      name: "Firecracker",
      requires: [],
      obtain: "Initial",
      note: "",
    },
    "流星箭": {
      name: "Meteor Arrow",
      requires: ["Firecracker Lv 5", "Sect Scale 2"],
      obtain: "Initial",
      note: "",
    },
    "雷火彈": {
      name: "Thunderfire Bomb",
      requires: ["Meteor Arrow Lv 10", "Sect Scale 3"],
      obtain: "Initial",
      note: "- Also deals heavy damage to your own side in battle; keep allies out of its area",
    },
    "神奇球": {
      name: "Miracle Orb",
      requires: ["Firecracker Lv 10", "Sect Scale 2"],
      obtain: "Initial",
      note: "- Can entangle yourself in battle; use with care",
    },
  },
};
