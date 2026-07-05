import "dotenv/config";
import { defineConfig } from "vitepress";
// 連結預覽
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
// 歷史貢獻
import {
	GitChangelog,
	GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";
// 註腳
import footnote from "markdown-it-footnote";
import { withMermaid } from "vitepress-plugin-mermaid";

const baseUrl = "/LoM-wiki/";

// https://vitepress.dev/reference/site-config
const baseConfig = {
	title: "活俠傳wiki", // 站點名稱
	// titleTemplate: "", title | titleTemplate
	description: "Legend of Mortal Wiki", // 站點敘述
	lang: "zh-TW", // 站點語系
	base: baseUrl, // 站點子目錄
	sitemap: {
		hostname: `https://smilin.net${baseUrl}`,
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
					{ text: "陣營列表", link: "/people/factions/" },
					{ text: "江湖眾生相", link: "/people/mobs/" },
				],
				activeMatch: "/people/",
			},
			{
				text: "系統",
				items: [
					{ text: "門派設施", link: "/system/facility" },
					{ text: "秘笈列表", link: "/system/books/" },
					{ text: "技能效果", link: "/system/skill" },
					{ text: "對戰教學", link: "/system/Engagement/BattleUI" },
					{ text: "煉丹效果", link: "/system/pills" },
					{ text: "鍛冶場、煉丹房開發路線圖", link: "/system/forge-roadmap" },
					{ text: "道具列表", link: "/system/items" },
					{ text: "養成指令", link: "/system/training" },
					{ text: "原聲帶", link: "/system/soundtrack" },
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
					{ text: "生死簿(驟死結局)", link: "/event/badends" },
					{ text: "汗青書(結局)", link: "/event/ends" },
				],
				activeMatch: "/event/",
			},
			{
				text: "其他",
				items: [
					{ text: "江湖快報(官方更新)", link: "/other/news" },
					{ text: "遊戲指南", link: "/other/guide/1-game-objective" },
					{ text: "鳥熊問答集", link: "/other/qna/" },
					{
						text: "拆包資料",
						items: [
							{
								text: "v1.0.3130",
								link: "https://smilin.pse.is/LoM",
							},
						],
					},
					{
						text: "圖片產生器",
						items: [
							{
								text: "汗青書(結局) 圖片產生器",
								link: "/other/image-generator/end",
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
								text: "江湖快報(官方更新)頁面模塊說明",
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
									text: "江湖快報(官方更新)頁面模塊說明",
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
			"/other/guide/": [
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
							text: "關於行動點",
							link: "/other/guide/mechanism/action-point",
						},
						{
							text: "關於心相",
							link: "/other/guide/mechanism/mood",
						},
						{
							text: "關於貢獻度",
							link: "/other/guide/mechanism/contribution",
						},
						{
							text: "關於能力值",
							link: "/other/guide/mechanism/attribute",
						},
						{
							text: "關於心上人",
							link: "/other/guide/mechanism/dream-sweetheart",
						},
						{
							text: "關於投降",
							link: "/other/guide/mechanism/surrender",
						},
						{
							text: "關於命運",
							link: "/other/guide/mechanism/destiny",
						},
						{
							text: "關於四師兄商店",
							link: "/other/guide/mechanism/brother4-selling",
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
			// provider: "local",
			// options: {
			// 	locales: {
			// 		root: {
			// 			translations: {
			// 				button: {
			// 					buttonText: "搜索喔",
			// 					buttonAriaLabel: "搜索喔",
			// 				},
			// 				modal: {
			// 					noResultsText: "啊咧咧~搜尋結果跑哪去了? (・・?)",
			// 					resetButtonTitle: "重新來過啦~",
			// 					footer: {
			// 						selectText: "選好了",
			// 						navigateText: "換一個",
			// 						closeText: "掰掰~",
			// 					},
			// 				},
			// 			},
			// 		},
			// 	},
			// },
			provider: "algolia",
			options: {
				locales: {
					root: {
						placeholder: "在這輸入喔",
						translations: {
							button: {
								buttonText: "搜索喔",
								buttonAriaLabel: "搜索喔",
							},
							modal: {
								searchBox: {
									resetButtonTitle: "重新來過啦~",
									resetButtonAriaLabel: "重新來過啦~",
									cancelButtonText: "不要了啦",
									cancelButtonAriaLabel: "不要了啦",
								},
								startScreen: {
									recentSearchesTitle: "最近找過的喔",
									noRecentSearchesText: "還沒找過東西喔 (>_<)",
									saveRecentSearchButtonTitle: "記住這個~",
									removeRecentSearchButtonTitle: "忘記這個~",
									favoriteSearchesTitle: "最喜歡的搜尋",
									removeFavoriteSearchButtonTitle: "不喜歡了啦",
								},
								errorScreen: {
									titleText: "啊咧咧~搜尋結果跑哪去了? (・・?)",
									helpText: "要不要檢查一下網路連接,或是再試一次呢? ヾ(･ω･*)ﾉ",
								},
								footer: {
									selectText: "選好了",
									navigateText: "換一個",
									closeText: "掰掰~",
								},
								noResultsScreen: {
									noResultsText: "晤...找不到啦 (;´･ω･)",
									suggestedQueryText: "要不要試試這個呢?",
									reportMissingResultsText: "咦?應該要有結果嗎?",
									reportMissingResultsLinkText: "告訴人家吧!",
								},
							},
						},
						searchParameters: {
							distinct: true,
							analytics: true,
							clickAnalytics: true,
						},
					},
				},
				appId: process.env.ALGOLIA_ID,
				apiKey: process.env.ALGOLIA_KEY,
				indexName: "LoM_wiki",
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
			link: "/en/",
			themeConfig: {
				nav: [
					{
						text: "People",
						items: [
							{ text: "Character List", link: "/en/people/characters/" },
							{ text: "Dream Sweetheart", link: "/en/people/dream-sweetheart" },
							{ text: "Title List", link: "/en/people/title-list" },
							{ text: "Faction List", link: "/en/people/factions/" },
						],
						activeMatch: "/en/people/",
					},
					{
						text: "System",
						items: [
							{ text: "Faction Facilities", link: "/en/system/facility" },
							{ text: "Secret Manual", link: "/en/system/books/" },
							{ text: "Skill", link: "/en/system/skill" },
							{ text: "Pills", link: "/system/pills" },
							{
								text: "Forge & Alchemy Room Development Roadmap",
								link: "/en/system/forge-roadmap",
							},
							{ text: "Items", link: "/en/system/items" },
							{ text: "Training", link: "/en/system/training" },
						],
						activeMatch: "/en/system/",
					},
					{
						text: "Event",
						items: [
							{
								text: "Main Timeline",
								link: "/en/event/story-branch-timeline",
							},
							{
								text: "Simple Timeline",
								link: "/en/event/story-simple-table",
							},
							{
								text: "Chronicles of Glory(Achievement)",
								link: "/en/event/achievements",
							},
							{
								text: "Book of Life and Death(badend)",
								link: "/en/event/badends",
							},
							{ text: "History Book(End)", link: "/en/event/ends" },
						],
						activeMatch: "/en/event/",
					},
					{
						text: "Other",
						items: [
							{ text: "NEWS", link: "/en/other/news" },
							{ text: "Game Guide", link: "/en/other/guide/1-game-objective" },
							{ text: "Author Q&A", link: "/en/other/qna/" },
							{
								text: "Game Data",
								items: [
									{
										text: "v1.0.3130",
										link: "https://smilin.pse.is/LoM",
									},
								],
							},
							{
								text: "Image Generator",
								items: [
									{
										text: "Historical Book (Ending) Image Generator",
										link: "/en/other/image-generator/end",
									},
								],
							},
							{ text: "唐門圖書館(google sheet)", link: "/en/other/lom-sheet" },
						],
						activeMatch: "/en/guide/",
					},
					{
						text: "Assisted Editor",
						items: [
							{
								text: "How to Start Collaborating on LoM-wiki",
								link: "/en/develop/1-start",
							},
							{
								text: "Configuration File Description",
								link: "/en/develop/2-vitepress",
							},
							{
								text: "How to Preview Changes Locally",
								link: "/en/develop/3-run-local",
							},
							{
								text: "About Markdown Editing",
								items: [
									{
										text: "Markdown Basics",
										link: "/en/develop/4-example",
									},
									{
										text: "Common Usage of Markdown",
										link: "/en/develop/4-1-template.md",
									},
									{
										text: "LoM-wiki Public Components",
										link: "/en/develop/4-2-wiki-template.md",
									},
									{
										text: "Usage of Character Biography Components",
										link: "/en/develop/4-3-character-template.md",
									},
									{
										text: "Official Update Page Module Description",
										link: "/en/develop/4-4-news-template.md",
									},
								],
							},
							{
								text: "Markdown Template",
								items: [
									{
										text: "Clean Template",
										link: "/en/develop/clean-template.md",
									},
									{
										text: "Character Page Template",
										link: "/en/develop/clean-character-template.md",
									},
								],
							},
						],
					},
				],
				sidebar: {
					"/en/develop/": [
						{
							text: "Assisted Editor",
							items: [
								{
									text: "How to Start Collaborating on LoM-wiki",
									link: "/en/develop/1-start",
								},
								{
									text: "Configuration File Description",
									link: "/en/develop/2-vitepress",
								},
								{
									text: "How to Preview Changes Locally",
									link: "/en/develop/3-run-local",
								},
								{
									text: "About Markdown Editing",
									items: [
										{
											text: "Markdown Basics",
											link: "/en/develop/4-example",
										},
										{
											text: "Common Usage of Markdown",
											link: "/en/develop/4-1-template.md",
										},
										{
											text: "LoM-wiki Public Components",
											link: "/en/develop/4-2-wiki-template.md",
										},
										{
											text: "Usage of Character Biography Components",
											link: "/en/develop/4-3-character-template.md",
										},
										{
											text: "Official Update Page Module Description",
											link: "/en/develop/4-4-news-template.md",
										},
									],
								},
								{
									text: "Markdown Template",
									items: [
										{
											text: "Clean Template",
											link: "/en/develop/clean-template.md",
										},
										{
											text: "Character Page Template",
											link: "/en/develop/clean-character-template.md",
										},
									],
								},
							],
						},
					],
					"/en/other/guide/": [
						{
							text: "Game Guide",
							items: [
								{
									text: "Game Objective",
									link: "/en/other/guide/1-game-objective",
								},
								{
									text: "What Should I Do at the Beginning?",
									link: "/en/other/guide/2-how-to-start",
								},
								{
									text: "About Action Points",
									link: "/en/other/guide/mechanism/action-point",
								},
								{
									text: "About Mood",
									link: "/en/other/guide/mechanism/mood",
								},
								{
									text: "About Contribution Points",
									link: "/en/other/guide/mechanism/contribution",
								},
								{
									text: "About Attributes",
									link: "/en/other/guide/mechanism/attribute",
								},
								{
									text: "About Sweetheart",
									link: "/en/other/guide/mechanism/dream-sweetheart",
								},
								{
									text: "About Surrender",
									link: "/en/other/guide/mechanism/surrender",
								},
								{
									text: "About Destiny",
									link: "/en/other/guide/mechanism/destiny",
								},
								{
									text: "Fourth Brother Shop Mechanism",
									link: "/en/other/guide/mechanism/brother4-selling",
								},
							],
						},
					],
				},
			},
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
			lazyLoading: true,
		},
		component: {
			blockTags: [],
			inlineTags: [],
		},
		config: (md) => {
			// wikilinks
			md.inline.ruler.before("link", "wikilink", (state, silent) => {
				if (state.src.charAt(state.pos) === "<") {
					return false;
				}
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

			// 註腳
			md.use(footnote);
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
	head: [
		[
			"link",
			{
				// rel: "preload",
				// rel: "stylesheet",
				rel: "prefetch",
				href: `${baseUrl}font/SourceHanSerifTW-Bold.otf`,
				as: "font",
				type: "font/otf",
				crossorigin: "",
			},
		],
		[
			"link",
			{
				// rel: "preload",
				// rel: "stylesheet",
				rel: "prefetch",
				href: `${baseUrl}font/SourceHanSerifTW-Regular.otf`,
				as: "font",
				type: "font/otf",
				crossorigin: "",
			},
		],
		[
			"link",
			{
				// rel: "preload",
				// rel: "stylesheet",
				rel: "prefetch",
				href: `${baseUrl}font/DFXingShuStd-W5.otf`,
				as: "font",
				type: "font/otf",
				crossorigin: "",
			},
		],
		...(!!process.env.GOOGLE_ANALYTICS
			? [
					[
						"script",
						{
							async: true,
							src:
								"https://www.googletagmanager.com/gtag/js?id=" +
								process.env.GOOGLE_ANALYTICS,
						},
					],
					[
						"script",
						{},
						`window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${process.env.GOOGLE_ANALYTICS}');`,
					],
			  ]
			: []),
	],
};

// Mermaid
export default withMermaid({
	...baseConfig,
	// Mermaid 特定配置
	mermaid: {
		theme: "dark",
	},
	mermaidPlugin: {
		class: "mermaid mermaid-m",
	},
});
