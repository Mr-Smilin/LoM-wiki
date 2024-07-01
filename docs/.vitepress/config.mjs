import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "LoM-wiki",
	description: "活俠傳wiki",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			// { text: "Home", link: "/" },
			// { text: "Examples", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "調試",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
			{
				items: [{ text: "測試", link: "/test" }],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],
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
