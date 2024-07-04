<!-- .vitepress/theme/MyLayout.vue -->
<script setup>
import DefaultTheme from "vitepress/theme";
import { defineAsyncComponent } from "vue";
import Twikoo from "./Twikoo.vue";
import Borderless from "./Borderless.vue";

const { Layout } = DefaultTheme;
const NotFound = defineAsyncComponent(() => import("./NotFound.vue"));
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
