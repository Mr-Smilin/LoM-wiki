import { defineConfig } from "vitepress";
import markdownItContainer from "markdown-it-container";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Legend of Mortal Wiki", // 站點名稱
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
		logo: {
			light: "/images/logo-light.svg",
			dark: "/images/logo-dark.svg",
		},
		siteTitle: false,
		nav: [
			{
				text: "結緣",
				link: "/meeting", // 結緣頁面, 不對應實際連結
			},
			{
				text: "人物",
				items: [
					{ text: "人物列表", link: "/characters/" },
					{ text: "夢境心上人", link: "/people/dream-sweetheart" },
					{ text: "稱號列表", link: "/people/title-list" },
				],
				activeMatch: "/characters/",
			},
			{
				text: "機制",
				items: [
					{
						text: "投降",
						link: "/mechanism/surrender",
					},
				],
			},
			{
				text: "武功",
				items: [{ text: "秘笈列表", link: "/books" }],
				activeMatch: "/books/",
			},
			{
				text: "互動事件",
				items: [
					{
						text: "主支線年表",
						link: "/event/story-branch-timeline",
					},
					{
						text: "主支線簡易表格",
						link: "/event/story-simple-table",
					},
					{ text: "養成指令整理", link: "/event/develop" },
					{ text: "門派設施", link: "/event/facility" },
				],
			},
			{ text: "結局", link: "/end" },
			{
				text: "其他",
				items: [
					{ text: "官方更新", link: "/other/news" },
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
					{ text: "如何開始", link: "/develop/1-start" },
					{ text: "設定檔項目說明", link: "/develop/2-vitepress" },
					{ text: "本地運行(進階)", link: "/develop/3-run-local" },
					{
						text: "Markdown 相關",
						items: [
							{
								text: "基本知識",
								link: "/develop/4-example",
							},
							{
								text: "常見用法",
								link: "/develop/4-1-template.md",
							},
							{
								text: "乾淨模板",
								link: "/develop/clean-template.md",
							},
							{
								text: "LoM-wiki 公開組件",
								link: "/develop/4-2-wiki-template.md",
							},
							{
								text: "人物列傳組件",
								link: "/develop/4-3-character-template.md",
							},
						],
					},
				],
			},
		],

		sidebar: {
			"/develop/": [
				{
					text: "協助編輯",
					items: [
						{ text: "如何開始", link: "/develop/1-start" },
						{ text: "設定檔項目說明", link: "/develop/2-vitepress" },
						{ text: "本地運行(進階)", link: "/develop/3-run-local" },
						{
							text: "Markdown 基本知識",
							link: "/develop/4-example",
							items: [
								{
									text: "Markdown 常見用法",
									link: "/develop/4-1-template.md",
								},
								{
									text: "Markdown 乾淨模板",
									link: "/develop/clean-template.md",
								},
								{
									text: "LoM-wiki 公開組件",
									link: "/develop/4-2-wiki-template.md",
								},
								{
									text: "人物列傳組件",
									link: "/develop/4-3-character-template.md",
								},
							],
						},
					],
				},
			],
		},

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
	markdown: {
		container: {
			tipLabel: "💡提示",
			warningLabel: "⚠️警告",
			dangerLabel: "☢️危險",
			infoLabel: "📃內容",
			detailsLabel: "📖詳細內容",
		},
		image: {
			// 圖片懶加載
			lazyLoading: false,
		},
		component: {
			blockTags: [],
			inlineTags: [],
		},
		config: (md) => {
			// 目前沒用
			md.use(markdownItContainer, "md", {
				validate: function (params) {
					return params.trim().match(/^md\s+(.*)$/);
				},
				render: function (tokens, idx) {
					var m = tokens[idx].info.trim().match(/^md\s+(.*)$/);

					if (tokens[idx].nesting === 1) {
						// opening tag
						return "<MarkdownWrapper>\n" + md.utils.escapeHtml(m[1]) + "\n";
					} else {
						// closing tag
						return "</MarkdownWrapper>\n";
					}
				},
			});
		},
	},

	// 		next();
	// 	});
	// },
	// head: [
	// 	[
	// 		"link",
	// 		{
	// 			rel: "stylesheet",
	// 			href: "https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css",
	// 		},
	// 	],
	// ],
});
