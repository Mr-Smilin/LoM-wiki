<template>
  <div :class="{'shary': isHighlighted}" v-html="compiledMarkdown"></div>
</template>

<script setup>
import { ref, watchEffect, getCurrentInstance } from 'vue';
import { marked } from 'marked';

const instance = getCurrentInstance();
const slots = instance.slots;
const compiledMarkdown = ref('');
const isHighlighted = ref(false);

watchEffect(() => {
  const slotContent = slots.default ? slots.default().map(node => node.children).join('').trim() : '';
  if (slotContent.startsWith('||') && slotContent.endsWith('||')) {
    isHighlighted.value = true;
    compiledMarkdown.value = marked(slotContent.slice(2, -2));
  } else {
    isHighlighted.value = false;
    compiledMarkdown.value = marked(slotContent);
  }
});
</script>

<style>
.shary{
  position: relative;
}
.shary::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;

}
</style>
