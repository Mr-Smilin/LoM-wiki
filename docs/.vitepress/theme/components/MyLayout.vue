<!-- .vitepress/theme/MyLayout.vue -->
<script setup>
// import { onMounted } from 'vue';
import DefaultTheme from "vitepress/theme";
import { defineAsyncComponent, provide } from "vue";
import Twikoo from "./default/Twikoo.vue";
import Borderless from "./default/Borderless.vue";
import MetaManager from "./default/MetaManager.vue";

const { Layout } = DefaultTheme;
const NotFound = defineAsyncComponent(() => import("./default/NotFound.vue"));
import { useThemeTransition } from '../script/themeTransition.js';
const { toggleAppearance } = useThemeTransition();

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
				瀏覽數：<span id="twikoo_visitors">0</span>
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
