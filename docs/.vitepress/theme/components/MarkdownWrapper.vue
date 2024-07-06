<template>
    <div v-html="compiledMarkdown"></div>
  </template>
  
  <script setup>
  import { ref, watchEffect, getCurrentInstance } from 'vue';
  import { marked } from 'marked';
  
  const instance = getCurrentInstance();
  const slots = instance.slots;
  const compiledMarkdown = ref('');
  
  watchEffect(() => {
    const slotContent = slots.default ? slots.default().map(node => node.children).join('') : '';
    compiledMarkdown.value = marked(slotContent);
  });
  </script>
  