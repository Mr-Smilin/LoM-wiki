<template>
	<div class="nav-container">
	  <details v-for="item in navItems" :key="item.text" open>
		<summary>{{ item.text }}</summary>
		<ul v-if="item.items" class="sub-items">
		  <li v-for="subItem in item.items" :key="subItem.text" class="sub-item">
			<a :href="isString(subItem.link) ? withBase(subItem.link) : '#'">{{ subItem.text }}</a>
		  </li>
		</ul>
		<a v-else :href="isString(item.link) ? withBase(item.link) : '#'">{{ item.text }}</a>
	  </details>
	</div>
</template>
  
<script>
  import { withBase, useData } from "vitepress";
  
  export default {
	setup() {
	  const { theme } = useData();
  
	  const isString = (value) => typeof value === 'string' || value instanceof String;
  
	  return {
		navItems: theme.value.nav,
		withBase,
		isString,
	  };
	},
  };
</script>
  
<style scoped>
  .nav-container {
	padding: 1rem;
	background-color: var(--vp-c-bg);
	border-radius: 8px;
  }
  
  details {
	margin-bottom: 1rem;
  }
  
  summary {
	font-weight: bold;
	cursor: pointer;
	padding: 0.5rem;
	background-color: var(--vp-c-bg-alt);
	border-bottom: 2px solid var(--vp-c-bg-alt);
	border-radius: 4px;
	transition: background-color 0.3s,border-bottom 0.3s;
  }
  
  summary:hover {
	background-color: var(--vp-c-bg-hover);
    border-bottom: 2px solid #42b983;
  }
  
  .sub-items {
	margin: 0;
	padding: 0;
	list-style: none;
  }
  
  .sub-item {
	margin: 0.5rem 0;
  }
  
  a {
	text-decoration: none;
	color: var(--vp-c-brand);
	transition: color 0.3s, text-decoration 0.3s;
  }
  
  a:hover {
	text-decoration: underline;
	color: var(--vp-c-brand-hover);
  }
</style>
  