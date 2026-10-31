// Forge - Hidden Weapons - Straight Throw (English)
//
// Text-only translation file. Numbers, parent and icons come from the zh data/forge/dart.js.
// Keys are the zh item names (the "name" in data/forge/dart.js). Missing fields fall back to zh.
//   name     display name
//   requires unlock conditions
//   info     text columns such as the elixir "Item Effects" (numbers come from the zh file)
//   obtain   how to obtain (Markdown)
//   note     notes (Markdown)
export default {
  title: "Forge - Hidden Weapons - Straight Throw",
  items: {
    "脫手鏢": {
      name: "Hand-Released Dart",
      requires: [],
      obtain: "Initial",
      note: "",
    },
    "飛梭": {
      name: "Flying Shuttle",
      requires: ["Hand-Released Dart Lv 5", "Sect Scale 2"],
      obtain: "Initial",
      note: "",
    },
    "無形箭": {
      name: "Invisible Arrow",
      requires: ["Flying Shuttle Lv 10", "Sect Scale 3"],
      obtain: `
- Initial
- 🚩Fully heal the First Senior Brother during [Master Brother Injured](/en/event/simple/3-01-1-大師兄負傷); at the inn on the way back from Woyun Hill ([Watching at Woyun Hill](/en/event/simple/3-01-3-圍觀臥雲崗)), chat about "Vajra Divine Spear Finger" to obtain.
`,
      note: "",
    },
    "鐵橄欖": {
      name: "Iron Olive",
      requires: ["Hand-Released Dart Lv 10", "Sect Scale 2"],
      obtain: "Initial",
      note: "",
    },
  },
};
