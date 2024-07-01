<!-- .vitepress/theme/MyLayout.vue -->
<script setup>
import DefaultTheme from "vitepress/theme";
import { defineAsyncComponent } from 'vue';

const { Layout } = DefaultTheme;
const NotFound = defineAsyncComponent(() => import('./NotFound.vue'));
</script>

<template>
  <Layout>
    <!-- 其他自定義內容可以放在這裡 -->
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>
