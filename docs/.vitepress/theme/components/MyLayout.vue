<!-- .vitepress/theme/MyLayout.vue -->
<script setup>
// import { onMounted } from 'vue';
import DefaultTheme from "vitepress/theme";
import { defineAsyncComponent, provide, computed } from "vue";
import { useData } from "vitepress";
import Twikoo from "./default/Twikoo.vue";
import Borderless from "./default/Borderless.vue";
import MetaManager from "./default/MetaManager.vue";

const { Layout } = DefaultTheme;
const NotFound = defineAsyncComponent(() => import("./default/NotFound.vue"));
import { useThemeTransition } from '../script/themeTransition.js';
const { toggleAppearance } = useThemeTransition();

// 瀏覽數標籤跟隨語系 (僅 zh-hans 需切換, 其餘維持既有繁體)
const { localeIndex } = useData();
const visitorLabel = computed(() => (localeIndex.value === "zh-hans" ? "浏览数：" : "瀏覽數："));

// onMounted(() => {
// 	import('bootstrap/dist/js/bootstrap.bundle.min.js');
// 	import('bootstrap-vue/dist/bootstrap-vue.css');
// });

provide('toggle-appearance', async (event) => {
	await toggleAppearance(event);
})
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
