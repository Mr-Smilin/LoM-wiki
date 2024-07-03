<template>
	<div>
		<details v-for="item in navItems" :key="item.text" :open="true">
			<summary>{{ item.text }}</summary>
			<ul v-if="item.items">
				<li v-for="subItem in item.items" :key="subItem.text">
					<a :href="subItem.link">{{ subItem.text }}</a>
				</li>
			</ul>
			<a v-else :href="item.link">{{ item.text }}</a>
		</details>
	</div>
</template>

<script>
import { useData } from "vitepress";
export default {
	setup() {
		const { theme } = useData();
		return {
			navItems: theme.value.nav,
		};
	},
};
</script>
