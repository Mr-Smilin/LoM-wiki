<!-- .vitepress/theme/MyLayout.vue -->
<script setup>
// import { onMounted } from 'vue';
import DefaultTheme from "vitepress/theme";
import { defineAsyncComponent } from "vue";
import Twikoo from "./default/Twikoo.vue";
import Borderless from "./default/Borderless.vue";

const { Layout } = DefaultTheme;
const NotFound = defineAsyncComponent(() => import("./default/NotFound.vue"));

// onMounted(() => {
// 	import('bootstrap/dist/js/bootstrap.bundle.min.js');
// 	import('bootstrap-vue/dist/bootstrap-vue.css');
// });
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
		<template #doc-after>
			<Twikoo></Twikoo>
			<Borderless></Borderless>
		</template>
	</Layout>
</template>
