import { defineConfig } from "vitepress";
// 連結預覽
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
// 歷史貢獻
import {
	GitChangelog,
	GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";

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
				text: "人物",
				items: [
					{ text: "人物列表", link: "/people/characters/" },
					{ text: "夢境心上人", link: "/people/dream-sweetheart" },
					{ text: "稱號列表", link: "/people/title-list" },
				],
				activeMatch: "/people/",
			},
			{
				text: "系統",
				items: [
					{ text: "門派設施", link: "/system/facility" },
					{ text: "秘笈列表", link: "/system/books" },
					{ text: "技能效果(尚未編輯)", link: "no-page" },
					{ text: "道具列表(尚未編輯)", link: "/system/items" },
					{ text: "養成指令", link: "/system/develop" },
				],
				activeMatch: "/system/",
			},
			{
				text: "事件",
				items: [
					{
						text: "主支線年表",
						link: "/event/story-branch-timeline",
					},
					{
						text: "主支線簡易表格",
						link: "/event/story-simple-table",
					},
					{ text: "風雲史(成就)", link: "/event/achievements" },
					{ text: "生死簿", link: "/event/badends" },
					{ text: "汗青書(編輯中)", link: "/event/ends" },
				],
				activeMatch: "/event/",
			},
			{
				text: "其他",
				items: [
					{ text: "官方更新", link: "/other/news" },
					{ text: "遊戲指南(施工中)", link: "/other/guide/1-game-objective" },
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
				activeMatch: "/guide/",
			},
			{
				text: "協助編輯",
				items: [
					{ text: "如何開始", link: "/develop/1-start" },
					{ text: "設定檔項目說明", link: "/develop/2-vitepress" },
					{ text: "本地運行(進階)", link: "/develop/3-run-local" },
					{
						text: "Markdown 編輯須知",
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
								text: "LoM-wiki 公開組件",
								link: "/develop/4-2-wiki-template.md",
							},
							{
								text: "人物列傳組件",
								link: "/develop/4-3-character-template.md",
							},
							{
								text: "官方更新頁面模塊說明",
								link: "/develop/4-4-news-template.md",
							},
						],
					},
					{
						text: "Markdown 開發參考模板",
						items: [
							{
								text: "乾淨模板",
								link: "/develop/clean-template.md",
							},
							{
								text: "角色頁面模板",
								link: "/develop/clean-character-template.md",
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
							text: "Markdown 編輯須知",
							items: [
								{
									text: "Markdown 基本知識",
									link: "/develop/4-example",
								},
								{
									text: "Markdown 常見用法",
									link: "/develop/4-1-template.md",
								},
								{
									text: "LoM-wiki 公開組件",
									link: "/develop/4-2-wiki-template.md",
								},
								{
									text: "人物列傳組件",
									link: "/develop/4-3-character-template.md",
								},
								{
									text: "官方更新頁面模塊說明",
									link: "/develop/4-4-news-template.md",
								},
							],
						},
						{
							text: "Markdown 開發參考模板",
							items: [
								{
									text: "乾淨模板",
									link: "/develop/clean-template.md",
								},
								{
									text: "角色頁面模板",
									link: "/develop/clean-character-template.md",
								},
							],
						},
					],
				},
			],
			"/guide/": [
				{
					text: "遊戲指南",
					items: [
						{
							text: "遊戲目標",
							link: "/other/guide/1-game-objective",
						},
						{
							text: "一開始應該做些甚麼？",
							link: "/other/guide/2-how-to-start",
						},
						{
							text: "關於心上人",
							link: "/people/dream-sweetheart",
						},
						{
							text: "關於投降",
							link: "/other/guide/mechanism/surrender",
						},
						{
							text: "關於心相",
							link: "/other/guide/mechanism/mood",
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

		externalLinkIcon: false, // 外部連結標示
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
			// wikilinks
			md.inline.ruler.before("link", "wikilink", (state, silent) => {
				const regex = /\[\[(.*?)\]\]/;
				const match = regex.exec(state.src.slice(state.pos));
				if (!match) return false;

				if (!silent) {
					const [fullMatch, linkText] = match;
					const token = state.push("wikilink", "", 0);
					token.content = linkText;
					token.meta = { fullMatch };
				}

				state.pos += match[0].length;
				return true;
			});

			md.renderer.rules.wikilink = (tokens, idx) => {
				const token = tokens[idx];
				return `<WikiLink text="${token.content}" />`;
			};
			// 連結預覽
			md.use(InlineLinkPreviewElementTransform);
		},
	},
	vite: {
		plugins: [
			GitChangelog({
				repoURL: () => "https://github.com/Mr-Smilin/LoM-wiki",
			}),
			GitChangelogMarkdownSection(),
		],
		ssr: {
			noExternal: ["@nolebase/*"],
		},
	},
});
