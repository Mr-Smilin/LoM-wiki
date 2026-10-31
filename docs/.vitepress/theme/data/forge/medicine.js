// 煉丹房 - 靈丹
//
// 新增項目：複製下面任一個 { … } 區塊，貼進 items，改內容即可。不需要改任何 .vue。
//   name     項目名稱（同分類內不可重複，也是網址錨點，例如 #南螫礜石散）
//   icon     圖示路徑（/images/ 開頭）
//   parent   上一層項目的 name；開發樹起點填 null
//   special  true = 不在開發樹上（事件取得等），會列在「特殊取得」；平常不用寫
//   requires 解鎖條件，一個條件一個字串；沒有條件填 []
//   info     數值表，一行一個欄位："欄位名稱": 值（多行文字用反引號 ` 包起來）
//
// 新增一行數值：在該項目的 info 裡加一行 "欄位名稱": 值。
//
//   obtain   獲得方式（Markdown：[文字](/路徑) 是連結，「- 」開頭是條列）
//   note     備註（Markdown，同上）
export default {
  title: "煉丹房 - 靈丹",
  intro: "每完成一級產出一顆，可重複開發。",
  items: [
    {
      name: "南螫礜石散",
      icon: "/images/items/medis/icon_medi_01.webp",
      parent: null,
      requires: [],
      info: {
        "總煉丹": 15,
        "總銀兩": 300,
        "物品效果": `
陰陽+10
體力+2
內力+1
抗毒+2
心相+30
`,
      },
      obtain: "初始",
      note: "",
    },
    {
      name: "穿心龍膽湯",
      icon: "/images/items/medis/icon_medi_02.webp",
      parent: "南螫礜石散",
      requires: ["南螫礜石散開發中"],
      info: {
        "總煉丹": 15,
        "總銀兩": 300,
        "物品效果": `
陰陽-10
體力+1
內力+2
抗麻+2
心相+30
`,
      },
      obtain: "初始",
      note: "",
    },
    {
      name: "乖乖水",
      icon: "/images/items/medis/icon_medi_04.webp",
      parent: "南螫礜石散",
      requires: ["南螫礜石散開發中"],
      info: {
        "總煉丹": 15,
        "總銀兩": 300,
        "物品效果": `
陰陽-10
修養+5
性情-2
向心+3
心相+50
`,
      },
      obtain: "初始",
      note: "",
    },
    {
      name: "胡椒粉丸",
      icon: "/images/items/medis/icon_medi_03.webp",
      parent: "穿心龍膽湯",
      requires: ["穿心龍膽湯開發中", "門派規模2"],
      info: {
        "總煉丹": 25,
        "總銀兩": 500,
        "物品效果": `
抗毒+3
抗麻+3
心相+50
`,
      },
      obtain: "初始",
      note: "",
    },
    {
      name: "睡丹",
      icon: "/images/items/medis/icon_medi_05.webp",
      parent: "南螫礜石散",
      requires: ["南螫礜石散開發中"],
      info: {
        "總煉丹": 25,
        "總銀兩": 500,
        "物品效果": `
體力+5
內力+5
心相+80
行動-1
`,
      },
      obtain: "- 🚩[四師兄辭別](/event/detailed_description/3-08-1-四師兄遠遊經商)時，選擇「難辦的要求」，並擲骰【🎲≧70 土特產】，再選「神仙有靈丹」。[門人辭別-四師兄歸來](/event/simple/3-11-1-門人辭別#四師兄歸來)後，在男弟子房找[四師兄閒聊](/event/simple/0-0-0-四師兄閒聊)，選擇「以前托你打聽的事」獲得。",
      note: "- 剩餘行動≧2時才能用",
    },
    {
      name: "萬靈油",
      icon: "/images/items/medis/icon_medi_22.webp",
      parent: "南螫礜石散",
      requires: ["南螫礜石散開發中", "門派規模2"],
      info: {
        "總煉丹": 25,
        "總銀兩": 750,
        "物品效果": `
體力+1
內力+1
抗毒+1
抗麻+1
心相+50
`,
      },
      obtain: "- 曾經🚩[留學青城](/event/simple/2-08-2-唐門迎敵)，且[唐門內戰](/event/simple/2-12-3-唐門內戰)時🚩捉住唐守鴻，[唐守鴻處置](/event/simple/2-12-3-唐守鴻處置)時自動獲得。",
      note: "- 若🚩[和葉雲裳結緣](/event/pursuit/girl2)、🚩[葉雲裳同行武林大會](/event/simple/3-08-2-邀請葉雲舟)，[前往錦香宮](/event/simple/3-09-3-前往錦香宮)時選擇搭船，已解鎖此物可防止雲裳暈船。(只要曾經長按解鎖過就行，不需要真的做出成品。)",
    },
  ],
};
