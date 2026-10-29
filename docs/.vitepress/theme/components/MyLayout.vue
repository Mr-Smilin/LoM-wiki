<!-- .vitepress/theme/MyLayout.vue -->
<script setup>
// import { onMounted } from 'vue';
import DefaultTheme from "vitepress/theme";
// 新增 watch 和 nextTick，前者監視404，後者等待dom加載完畢
import { defineAsyncComponent, provide, computed, watch, nextTick } from "vue";
import { useData } from "vitepress";
import Twikoo from "./default/Twikoo.vue";
import Borderless from "./default/Borderless.vue";
import MetaManager from "./default/MetaManager.vue";
import EventSeriesNav from "./default/EventSeriesNav.vue";

const { Layout } = DefaultTheme;
const NotFound = defineAsyncComponent(() => import("./default/NotFound.vue"));
import { useThemeTransition } from '../script/themeTransition.js';
const { toggleAppearance } = useThemeTransition();

// 瀏覽數標籤跟隨語系 (僅 zh-hans 需切換, 其餘維持既有繁體)
// 新增 site 和 page，前者用來獲取全部語言信息，後者用來獲取頁面上下文。
const { localeIndex, site, page } = useData();
const visitorLabel = computed(() => (localeIndex.value === "zh-hans" ? "浏览数：" : "瀏覽數："));

// onMounted(() => {
// 	import('bootstrap/dist/js/bootstrap.bundle.min.js');
// 	import('bootstrap-vue/dist/bootstrap-vue.css');
// });

provide('toggle-appearance', async (event) => {
	await toggleAppearance(event);
})

// 直接修正原生語言選擇器的<a>的herf
const fixLanguageLinks = async () => {
	// 等待DOM渲染完畢
    await nextTick(); 
    const base = site.value.base || "/";
	// 獲取地址
    const currentPath = window.location.pathname; 
    // 剝離 base，例如 /LoM-wiki/zh-hans/event/... 轉換成 /zh-hans/event/...
    let subPath = currentPath;
    if (base !== "/" && subPath.startsWith(base)) {
		// 保留開頭的斜杠/
        subPath = subPath.slice(base.length - 1); 
    }
    // 剝離當前語言前綴，獲取乾净的 subPath
    const localeKeys = Object.keys(site.value.locales).filter(k => k !== "root");
    for (const key of localeKeys) {
        if (subPath === `/${key}/` || subPath === `/${key}`) {
            subPath = "/";
            break;
        } else if (subPath.startsWith(`/${key}/`)) {
            subPath = subPath.slice(key.length + 1);
            break;
        }
    }
    //  計算所有語言正確的 URL
    const cleanBase = base.replace(/\/$/, "");
    const correctUrls = {
        root: cleanBase + (subPath === "/" ? "/" : subPath)
    };
    for (const key of localeKeys) {
        correctUrls[key] = cleanBase + `/${key}` + (subPath === "/" ? "/" : subPath);
    }
    // 遍歷語言選擇器下拉菜單，重寫 href
    const links = document.querySelectorAll('.VPNavBarTranslations a, .VPNavScreenTranslations a');
    links.forEach(link => {
        const labelText = link.textContent.trim();
        const targetKey = Object.keys(site.value.locales).find(
            k => (site.value.locales[k].label || k) === labelText
        );
        if (targetKey && correctUrls[targetKey]) {
            link.setAttribute('href', correctUrls[targetKey]);
        }
    });
};
// 監聽路由變化，每次跳轉頁面都修正一次鏈接
watch(() => page.value.path, fixLanguageLinks, { immediate: true });
// 404也要處理。
watch(() => page.value.isNotFound, fixLanguageLinks);

</script>

<template>
	<Layout>
		<!-- 其他自定義內容可以放在這裡 -->
		<template #not-found>
			<NotFound />
		</template>
		<template #home-features-after>
			<div class="home-comment-container">
				<Twikoo></Twikoo>
			</div>
		</template>
		<template #doc-before>
			<p class="post-visitor">
				{{ visitorLabel }}<span id="twikoo_visitors">0</span>
			</p>
			<EventSeriesNav />
		</template>
		<template #doc-after>
			<Twikoo></Twikoo>
			<Borderless></Borderless>
		</template>
		<template #layout-bottom>
			<MetaManager></MetaManager>
		</template>
	</Layout>
</template>
