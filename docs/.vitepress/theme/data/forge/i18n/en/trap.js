// Forge - Hidden Weapons - Traps (English)
//
// Text-only translation file. Numbers, parent and icons come from the zh data/forge/trap.js.
// Keys are the zh item names (the "name" in data/forge/trap.js). Missing fields fall back to zh.
//   name     display name
//   requires unlock conditions
//   info     text columns such as the elixir "Item Effects" (numbers come from the zh file)
//   obtain   how to obtain (Markdown)
//   note     notes (Markdown)
export default {
  title: "Forge - Hidden Weapons - Traps",
  items: {
    "似草針": {
      name: "Herb-Like Needle",
      requires: [],
      obtain: "Initial",
      note: "",
    },
    "地鳴雷": {
      name: "Ground-Thunder Mine",
      requires: ["Herb-Like Needle Lv 10", "Sect Scale 2"],
      obtain: "Initial",
      note: "",
    },
    "猛火油櫃": {
      name: "Fierce Fire Oil Tank",
      requires: ["Herb-Like Needle Lv 10", "Sect Scale 2"],
      obtain: "- 🚩[Abandoned Temple route](/en/event/simple/2-06-1-離家出走): during [Tang Sect Under Attack](/event/simple/2-08-2-唐門迎敵), help defend the Sutra Hall and roll 【🎲<66 Fierce Fire Oil Tank Blueprint】 to obtain.",
      note: "",
    },
  },
};
