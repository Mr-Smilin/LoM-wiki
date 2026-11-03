// 鍛冶場 - 裝備 - 武器
//
// 新增項目：複製下面任一個 { … } 區塊，貼進 items，改內容即可。不需要改任何 .vue。
//
// 翻譯（同 eventSeries.js 的寫法）：會因語言不同的文字寫成 { root: 繁中, ja: 日文, en: 英文 }，
// 只有繁中時直接寫字串。沒寫的語言顯示繁中；簡中不用寫，build 時由繁中自動轉換。
//
//   name     項目名稱 { root, ja, en }。root（繁中）同分類內不可重複，也是網址錨點，例如 #唐門小劍
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
  title: "鍛冶場 - 裝備 - 武器",
  items: [
    {
      name: { root: "唐門小劍", ja: "唐門短剣", en: "Tang Sect Short Sword" },
      icon: "/images/items/swords/icon_sword_01.webp",
      parent: null,
      requires: [],
      stats: {
        "決鬥-捅人傷害": ["-", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "決鬥-爆擊骰子": ["-", 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
        "戰役-近戰傷害": [10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40],
        "戰役-爆擊率": ["0%", "2%", "4%", "6%", "8%", "10%", "12%", "14%", "16%", "18%", "20%"],
        "單級鍛造": ["-", 5, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "累積鍛造": ["-", 5, 7, 10, 14, 19, 25, 32, 40, 49, 59],
        "單級銀兩": ["-", 250, 100, 150, 200, 250, 300, 350, 400, 450, 500],
        "累積銀兩": ["-", 250, 350, 500, 700, 950, 1250, 1600, 2000, 2450, 2950],
      },
      obtain: { root: "初始", ja: "初期", en: "Initial" },
      note: "",
    },
    {
      name: { root: "唐門菁英小劍", ja: "唐門精鋭短剣", en: "Tang Sect Elite Short Sword" },
      icon: "/images/items/swords/icon_sword_10.webp",
      parent: "唐門小劍",
      requires: {
        root: ["唐門小劍等級5", "門派規模2"],
        ja: ["唐門短剣レベル5", "門派規模2"],
        en: ["Tang Sect Short Sword Lv 5", "Sect Scale 2"],
      },
      stats: {
        "決鬥-捅人傷害": ["-", 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        "決鬥-爆擊骰子": ["-", 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
        "戰役-近戰傷害": [10, 17, 23, 30, 36, 43, 49, 56, 62, 69, 75],
        "戰役-爆擊率": ["0%", "3%", "5%", "8%", "10%", "13%", "15%", "18%", "20%", "23%", "25%"],
        "單級鍛造": ["-", 5, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        "累積鍛造": ["-", 5, 8, 12, 17, 23, 30, 38, 47, 57, 68],
        "單級銀兩": ["-", 250, 150, 200, 250, 300, 350, 400, 450, 500, 550],
        "累積銀兩": ["-", 250, 400, 600, 850, 1150, 1500, 1900, 2350, 2850, 3400],
      },
      obtain: { root: "初始", ja: "初期", en: "Initial" },
      note: "",
    },
    {
      name: { root: "唐門傳承小劍", ja: "唐門伝承短剣", en: "Tang Sect Legacy Short Sword" },
      icon: "/images/items/swords/icon_sword_20.webp",
      parent: "唐門菁英小劍",
      requires: {
        root: ["唐門菁英小劍等級10", "門派規模3"],
        ja: ["唐門精鋭短剣レベル10", "門派規模3"],
        en: ["Tang Sect Elite Short Sword Lv 10", "Sect Scale 3"],
      },
      stats: {
        "決鬥-捅人傷害": ["-", 3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
        "決鬥-爆擊骰子": ["-", 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
        "戰役-近戰傷害": [10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50],
        "戰役-爆擊率": ["0%", "6%", "12%", "18%", "24%", "30%", "36%", "42%", "48%", "54%", "60%"],
        "單級鍛造": ["-", 5, 5, 5, 5, 10, 10, 10, 10, 10, 10],
        "累積鍛造": ["-", 5, 10, 15, 20, 30, 40, 50, 60, 70, 80],
        "單級銀兩": ["-", 400, 400, 400, 400, 800, 800, 800, 800, 800, 800],
        "累積銀兩": ["-", 400, 800, 1200, 1600, 2400, 3200, 4000, 4800, 5600, 6400],
      },
      obtain: {
        root: `
- 🚩[破廟線](/event/simple/2-06-1-離家出走)，未🚩[留學青城](/event/simple/2-08-2-唐門迎敵)，[唐門戰後](/event/simple/2-08-2-唐門戰後)中獲得。
- 🚩[客棧線](/event/simple/2-06-1-離家出走)，[回歸唐門](/event/simple/2-10-1-回歸唐門)中獲得。
- [葉雲裳結緣線](/event/pursuit/girl2)，[谷底生活](/event/simple/3-05-1-谷底生活)時【🎲＜50 古老的兵器殘骸】後獲得。
`,
        ja: `
- 🚩「破廟ルート」([家出](/ja/event/simple/2-06-1-離家出走)) で、🚩「青城留学」なし ([唐門の迎撃](/ja/event/simple/2-08-2-唐門迎敵)) の場合、[唐門の戦後処理](/ja/event/simple/2-08-2-唐門戰後)で入手。
- 🚩「宿屋ルート」([家出](/ja/event/simple/2-06-1-離家出走)) の場合、[唐門への帰還](/ja/event/simple/2-10-1-回歸唐門)で入手。
- [葉雲裳結縁攻略](/ja/event/pursuit/girl2)のルートで、[谷底での生活](/ja/event/simple/3-05-1-谷底生活)の【🎲＜50 古い兵器の残骸】の後に入手。
`,
        en: `
- 🚩[Abandoned Temple route](/en/event/simple/2-06-1-離家出走) without 🚩[studying at Qingcheng](/event/simple/2-08-2-唐門迎敵): obtained during [Tang Sect Aftermath](/event/simple/2-08-2-唐門戰後).
- 🚩[Inn route](/en/event/simple/2-06-1-離家出走): obtained during [Return to Tangmen](/en/event/simple/2-10-1-回歸唐門).
- [Ye Yunshang romance route](/event/pursuit/girl2): obtained after rolling 【🎲<50 Ancient Weapon Remains】 during [Life at the Valley Bottom](/event/simple/3-05-1-谷底生活).
`,
      },
      note: "",
    },
    {
      name: { root: "瀝泉小劍", ja: "瀝泉短剣", en: "Liquan Small Sword" },
      icon: "/images/items/swords/icon_sword_22.webp",
      parent: "唐門菁英小劍",
      requires: {
        root: ["唐門菁英小劍等級10", "門派規模3"],
        ja: ["唐門精鋭短剣レベル10", "門派規模3"],
        en: ["Tang Sect Elite Short Sword Lv 10", "Sect Scale 3"],
      },
      stats: {
        "決鬥-捅人傷害": ["-", 9, 17, 26, 34, 43, 51, 60, 68, 77, 85],
        "決鬥-備揍減免": ["-", 3, 5, 8, 10, 13, 15, 18, 20, 23, 25],
        "戰役-近戰傷害": [10, 17, 23, 30, 36, 43, 49, 56, 62, 69, 75],
        "戰役-爆擊率": ["0%", "3%", "6%", "9%", "12%", "15%", "18%", "21%", "24%", "27%", "30%"],
        "單級鍛造": ["-", 5, 6, 7, 8, 9, 10, 10, 10, 10, 10],
        "累積鍛造": ["-", 5, 11, 18, 26, 35, 45, 55, 65, 75, 85],
        "單級銀兩": ["-", 500, 600, 700, 800, 900, 1000, 1000, 1000, 1000, 1000],
        "累積銀兩": ["-", 500, 1100, 1800, 2600, 3500, 4500, 5500, 6500, 7500, 8500],
      },
      obtain: {
        root: "- 🚩[葉雲舟同行武林大會](/event/simple/3-08-2-邀請葉雲舟)，且大會中途未離開唐門(即趙活未挑戰上官隼，且🚩[葉雲舟代表唐門出戰](/event/simple/3-10-2-點蒼逆徒))。大會後[客棧休憩](/event/simple/3-10-2-客棧休憩)時，先洗澡，再下樓喝酒，以觸發[南溪夜訪](/event/simple/3-10-2-南溪夜訪)事件，葉雲舟好感≥40獲得。",
        ja: "- 🚩「葉雲舟が武林大会に同行」([葉雲舟を誘う](/ja/event/simple/3-08-2-邀請葉雲舟)参照)、かつ大会の途中で唐門を離れていない(= 趙活が上官隼に挑戦せず、🚩「葉雲舟が唐門代表として出場」([点蒼の逆徒](/ja/event/simple/3-10-2-點蒼逆徒)参照))。大会後の[宿屋での休息](/ja/event/simple/3-10-2-客棧休憩)で、先に入浴してから階下で酒を飲み、[南渓の夜の来訪](/ja/event/simple/3-10-2-南溪夜訪)イベントを発生させ、葉雲舟好感≥40なら入手。",
        en: "- 🚩[Ye Yunzhou accompanies you to the Martial Arts Conference](/event/simple/3-08-2-邀請葉雲舟), and you do not leave the Tang Sect partway through the conference (i.e. Zhao Huo does not challenge Shangguan Jun, and 🚩[Ye Yunzhou fights for the Tang Sect](/event/simple/3-10-2-點蒼逆徒)). At [Resting at the Inn](/event/simple/3-10-2-客棧休憩) after the conference, take a bath first, then go downstairs to drink to trigger [Night Visit at Nanxi](/event/simple/3-10-2-南溪夜訪); obtained if Ye Yunzhou's favorability ≥ 40.",
      },
      note: "",
    },
    {
      name: { root: "切魚刀", ja: "魚切り包丁", en: "Fish-Slaughtering Knife" },
      icon: "/images/items/swords/icon_sword_11.webp",
      parent: "唐門小劍",
      requires: {
        root: ["唐門小劍等級5", "門派規模2"],
        ja: ["唐門短剣レベル5", "門派規模2"],
        en: ["Tang Sect Short Sword Lv 5", "Sect Scale 2"],
      },
      stats: {
        "決鬥-捅人傷害": ["-", 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
        "戰役-近戰傷害": [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "戰役-爆擊率": ["0%", "6%", "12%", "18%", "24%", "30%", "36%", "42%", "48%", "54%", "60%"],
        "單級鍛造": ["-", 5, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        "累積鍛造": ["-", 5, 8, 12, 17, 23, 30, 38, 47, 57, 68],
        "單級銀兩": ["-", 250, 150, 200, 250, 300, 350, 400, 450, 500, 550],
        "累積銀兩": ["-", 250, 400, 600, 850, 1150, 1500, 1900, 2350, 2850, 3400],
      },
      obtain: {
        root: "- 🚩[無可救藥線](/event/simple/1-06-1-掌門的安排)，月會選擇投靠魔教、不是空穴來風、我認識劉顎，即可獲得。離開無可救藥線後消失。",
        ja: "- 🚩「救いようのないルート」([掌門の手配](/ja/event/simple/1-06-1-掌門的安排)) の月例会で「いっそ本当に魔教に寝返る」「六魔の悪名がこれほど高いのには、それなりの理由があるはずだ。」「実は俺、あの劉顎を知ってます。」を選べば入手。救いようのないルートを離れると消失。",
        en: "- 🚩[Hopeless route](/en/event/simple/1-06-1-掌門的安排): at the monthly meeting choose \"Join the Demonic Cult\", \"It's not baseless\" and \"I know Liu E\". Lost after leaving the Hopeless route.",
      },
      note: "",
    },
    {
      name: { root: "玉霄神匕", en: "Yuxiao Divine Dagger" },
      icon: "/images/items/swords/icon_sword_21.webp",
      parent: "唐門小劍",
      requires: { root: ["唐門小劍等級10"], ja: ["唐門短剣レベル10"], en: ["Tang Sect Short Sword Lv 10"] },
      stats: {
        "決鬥-捅人": ["-", 7, 13, 20, 26, 33, 39, 46, 52, 59, 65],
        "決鬥-爆擊骰子": ["-", 3, 5, 8, 10, 13, 15, 18, 20, 23, 25],
        "戰役-近戰傷害": [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "戰役-爆擊率": ["0%", "5%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%"],
        "單級鍛造": ["-", 5, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        "累積鍛造": ["-", 5, 8, 12, 17, 23, 30, 38, 47, 57, 68],
        "單級銀兩": ["-", 250, 150, 200, 250, 300, 350, 400, 450, 500, 550],
        "累積銀兩": ["-", 250, 400, 600, 850, 1150, 1500, 1900, 2350, 2850, 3400],
      },
      obtain: {
        root: `
(以下內容暫定，未仔細驗證)
- 曾觸發小梅襄陽行
- 曾觸發[小梅投靠](/event/simple/2-10-3-小梅投靠)事件
- 🚩[臥雲崗事件留守山上](/event/simple/3-01-2-臥雲崗事件)
- [大師兄重傷](/event/simple/3-01-3-大師兄重傷)時觸發治療大師兄，並選擇「不收功」，以讓小梅留在唐門
- 第三年二月上旬行動次數≤2，自動觸發梅竹辭別事件，此時符合以下條件，則她將此刀交給三師兄來日轉交:
 1. 曾觸發小梅襄陽行
 2. 虞小梅好感≥50
 3. 🚩郁竹不在唐門
- 滿足以上，於[飛石幫解戰](/event/simple/3-03-1-飛石幫解戰)時，自動觸發由三師兄給予此刀
`,
        ja: `
(以下の内容は暫定で、詳しくは検証されていない)
- 小梅の襄陽行が発生済み
- [小梅、唐門を頼る](/ja/event/simple/2-10-3-小梅投靠)が発生済み
- 🚩[臥雲崗イベント](/ja/event/simple/3-01-2-臥雲崗事件)で山に残る
- [大師兄の重傷](/ja/event/simple/3-01-3-大師兄重傷)で大師兄の治療が発生し、「やめない」を選んで小梅を唐門に留める
- 3年目2月上旬に行動回数≦2になると、梅竹の別れのイベントが自動で発生する。このとき以下を満たしていれば、小梅はこの刀を後で渡すよう三師兄に託す:
 1. 小梅の襄陽行が発生済み
 2. 虞小梅好感≧50
 3. 🚩郁竹が唐門にいない
- 以上を満たしていれば、[飛石幇解戦](/ja/event/simple/3-03-1-飛石幫解戰)で、三師兄からこの刀が自動で渡される
`,
        en: `
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
      },
      note: { root: "「玉霄神」是指梅花", ja: "「玉霄神」は梅の花のこと", en: "\"Yuxiao Shen\" refers to the plum blossom." },
    },
    {
      name: { root: "金錢劍", ja: "金銭剣", en: "Money Sword" },
      icon: "/images/items/swords/icon_sword_12.webp",
      parent: "唐門小劍",
      requires: { root: ["唐門小劍等級10"], ja: ["唐門短剣レベル10"], en: ["Tang Sect Short Sword Lv 10"] },
      stats: {
        "決鬥-捅人傷害": ["-", 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
        "戰役-近戰傷害": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        "戰役-爆擊率": ["0%", "2%", "4%", "6%", "8%", "10%", "12%", "14%", "16%", "18%", "20%"],
        "單級鍛造": ["-", 5, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "累積鍛造": ["-", 5, 7, 10, 14, 19, 25, 32, 40, 49, 59],
        "單級銀兩": ["-", 250, 100, 150, 200, 250, 300, 350, 400, 450, 500],
        "累積銀兩": ["-", 250, 350, 500, 700, 950, 1250, 1600, 2000, 2450, 2950],
      },
      obtain: {
        root: "- [青城醒轉](/event/simple/2-08-3-青城醒轉)時道德＜40，選擇翻箱倒櫃，再【🎲＜66 錢?】後獲得。",
        ja: "- [青城での目覚め](/ja/event/simple/2-08-3-青城醒轉)の時に道徳＜40で、「人がいないうちに周りを物色する」を選び、さらに【🎲＜66 金?】の後に入手。",
        en: "- During [Qingcheng Awakening](/event/simple/2-08-3-青城醒轉) with Morality < 40, choose \"Rummage through the chests\", then obtained after 【🎲<66 Money?】.",
      },
      note: "",
    },
    {
      name: { root: "完竟劍", ja: "完竟剣", en: "Wanjing Sword" },
      icon: "/images/items/swords/icon_sword_90.webp",
      parent: null,
      special: true,
      requires: [],
      stats: { "決鬥-捅人傷害": 100, "戰役-近戰傷害": 100, "戰役-爆擊率": "15%" },
      obtain: {
        root: "- [集思廣益](/event/simple/3-12-1-集思廣益#郁竹意見)訪問小竹時，選擇【銷毀圖紙】、【為我造一柄劍吧】，西武林線第四年二月下旬訪問鍛冶場時獲得。",
        ja: "- [皆の知恵を集める](/ja/event/simple/3-12-1-集思廣益#郁竹意見)で小竹を訪ねたとき、【設計図を破棄する】、【俺に剣を一振り造ってくれ】を選ぶと、西武林ルート第4年2月下旬に鍛冶場を訪れた際に入手。",
        en: "- During [Brainstorming](/event/simple/3-12-1-集思廣益#郁竹意見), when visiting Xiaozhu choose 【Destroy the blueprints】 and 【Forge a sword for me】; obtained when you visit the forge in late month 2 of year 4 on the West Wulin route.",
      },
      note: {
        root: "取得後系統會強制自動更換為此裝備。",
        ja: "入手するとシステムにより強制的にこの装備へ自動で持ち替えられる。",
        en: "Once obtained, the game forcibly switches your equipment to this weapon.",
      },
    },
  ],
};
