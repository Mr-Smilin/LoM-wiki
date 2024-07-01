import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "LoM-wiki", // 站點名稱
	// titleTemplate: "", title | titleTemplate
	description: "活俠傳wiki", // 站點敘述
	lang: "zh-TW", // 站點語系
	base: "/LoM-wiki/", // 站點子目錄
	appearance: "dark", // 默認深色主題
	lastUpdated: true, // 是否使用 Git 获取每个页面的最后更新时间戳
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			// { text: "Home", link: "/" },
			// { text: "Examples", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "遊戲公告",
				items: [{ text: "最新消息", link: "/news" }],
			},
			{
				items: [
					{ text: "養成指令整理", link: "/develop" },
					{ text: "門派設施", link: "/facility" },
					{ text: "稱號列表", link: "/title-list" },
					{ text: "夢境心上人", link: "/dream-sweetheart" },
				],
			},
			{
				text: "外部資源",
				items: [{ text: "唐門圖書館(google sheet)", link: "/lom-sheet" }],
			},
			// {
			// 	text: "調試",
			// 	items: [
			// 		{ text: "Markdown 擴充範例", link: "/markdown-examples" },
			// 		{ text: "運行時 API 範例", link: "/api-examples" },
			// 	],
			// },
		],

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
