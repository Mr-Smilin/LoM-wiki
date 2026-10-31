// Alchemy Room - Poisons (English)
//
// Text-only translation file. Numbers, parent and icons come from the zh data/forge/poison.js.
// Keys are the zh item names (the "name" in data/forge/poison.js). Missing fields fall back to zh.
//   name     display name
//   requires unlock conditions
//   info     text columns such as the elixir "Item Effects" (numbers come from the zh file)
//   obtain   how to obtain (Markdown)
//   note     notes (Markdown)
export default {
  title: "Alchemy Room - Poisons",
  items: {
    "赤煉砂": {
      name: "Scarlet Smelting Sand",
      requires: [],
      obtain: "Initial",
      note: "",
    },
    "烏水仙": {
      name: "Black Narcissus",
      requires: ["Scarlet Smelting Sand Lv 5", "Sect Scale 2"],
      obtain: "Initial",
      note: "",
    },
    "三陰蟲草膠": {
      name: "Triple-Yin Cordyceps Paste",
      requires: ["Scarlet Smelting Sand Lv 10", "Sect Scale 2"],
      obtain: "Initial",
      note: "",
    },
    "彼岸仙香": {
      name: "Other Shore Immortal Incense",
      requires: ["Scarlet Smelting Sand Lv 10", "Sect Scale 3"],
      obtain: "Initial",
      note: "",
    },
  },
};
