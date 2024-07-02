import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "LoM-wiki", // 站點名稱
	// titleTemplate: "", title | titleTemplate
	description: "活俠傳wiki", // 站點敘述
	lang: "zh-TW", // 站點語系
	base: "/LoM-wiki/", // 站點子目錄
	sitemap: {
		hostname: "https://smilin.net/LoM-wiki/",
	},
	appearance: "dark", // 默認深色主題
	lastUpdated: true, // 是否使用 Git 获取每个页面的最后更新时间戳
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{
				text: "人物",
				items: [
					{ text: "夢境心上人", link: "/people/dream-sweetheart" },
					{ text: "稱號列表", link: "/people/title-list" },
					{
						text: "主支線重要發生時間軸",
						link: "/story-branch-timeline",
					},
				],
			},
			{ text: "武功", link: "/skill" },
			{
				text: "互動事件",
				items: [
					{ text: "養成指令整理", link: "/event/develop" },
					{ text: "門派設施", link: "/event/facility" },
				],
			},
			{ text: "結局", link: "/end" },
			{
				text: "其他",
				items: [
					{ text: "更新計畫", link: "/other/news" },
					{
						text: "拆包資料",
						items: [
							{
								text: "v1.0.3130",
								link: "https://smilin.pse.is/LoM",
							},
						],
					},
					{ text: "唐門圖書館(google sheet)", link: "/other/lom-sheet" },
				],
			},
			{
				text: "協助編輯",
				items: [
					{ text: "如何開始", link: "/devlep/1-start" },
					{ text: "設定檔項目說明", link: "/devlep/2-vitepress" },
					{ text: "本地運行(進階)", link: "/devlep/3-run-local" },
					{
						text: "Markdown 基本知識 & 頁面模板",
						link: "/devlep/4-markdown",
					},
				],
			},
		],
		// {
		// 	text: "wiki導覽",
		// 	link: "/wiki-list",
		// },
		// {
		// 	text: "人物",

		// },
		// {
		// 	text: "技能",
		// 	items: [],
		// },
		// {
		// 	text: "物品",
		// 	items: [],
		// },
		// {
		// 	text: "互動",

		// },

		socialLinks: [
			{ icon: "github", link: "https://github.com/Mr-Smilin/LoM-wiki" },
		],

		editLink: {
			pattern: "https://github.com/Mr-Smilin/LoM-wiki/edit/main/docs/:path",
			text: "在 Github 上編輯此頁面",
		},

		search: {
			provider: "local",
			options: {
				locales: {
					root: {
						translations: {
							button: {
								buttonText: "搜索",
								// buttonAriaLabel: "搜索文檔",
							},
							modal: {
								noResultsText: "無法找到相關結果",
								resetButtonTitle: "清除查詢條件",
								footer: {
									selectText: "選擇",
									navigateText: "切換",
									closeText: "關閉",
								},
							},
						},
					},
				},
			},
		},

		outline: {
			label: "頁面導航",
		},
	},
	locales: {
		root: {
			label: "繁體中文",
			lang: "zh-TW",
		},
		en: {
			label: "English",
			lang: "en",
			link: "/en",
		},
	},
});
