<!-- .vitepress/theme/MyLayout.vue -->
<script setup>
// import { onMounted } from 'vue';
import DefaultTheme from "vitepress/theme";
import { useData } from 'vitepress'
import { defineAsyncComponent, nextTick, provide } from "vue";
import Twikoo from "./default/Twikoo.vue";
import Borderless from "./default/Borderless.vue";

const { Layout } = DefaultTheme;
const NotFound = defineAsyncComponent(() => import("./default/NotFound.vue"));
const { isDark } = useData()

// onMounted(() => {
// 	import('bootstrap/dist/js/bootstrap.bundle.min.js');
// 	import('bootstrap-vue/dist/bootstrap-vue.css');
// });
const enableTransitions = () =>
	'startViewTransition' in document &&
	window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async (event) => {
	const x = event.clientX;
	const y = event.clientY;

	if (!enableTransitions()) {
		isDark.value = !isDark.value
		return
	}

	const clipPath = [
		`circle(0px at ${x}px ${y}px)`,
		`circle(${Math.hypot(
			Math.max(x, innerWidth - x),
			Math.max(y, innerHeight - y)
		)}px at ${x}px ${y}px)`
	]

	await document.startViewTransition(async () => {
		isDark.value = !isDark.value
		await nextTick()
	}).ready

	document.documentElement.animate(
		{ clipPath: isDark.value ? clipPath.reverse() : clipPath },
		{
			duration: 300,
			easing: 'ease-in',
			pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
		}
	)
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
	</Layout>
</template>
