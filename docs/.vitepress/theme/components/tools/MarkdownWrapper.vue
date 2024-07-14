<template>
  <span v-html="compiledMarkdown"></span>
</template>

<script setup>
import { ref, watchEffect, getCurrentInstance } from 'vue';
import { marked } from 'marked';

const props = defineProps({
  content: {
    type: String,
    default: null
  }
});

const instance = getCurrentInstance();
const slots = instance.slots;
const compiledMarkdown = ref('');

const markedOptions = {
  breaks: true,
  gfm: true,
  headerIds: false,
  mangle: false,
};

function removePTags(html) {
  html = html.replace(/^<p>/, '');
  html = html.replace(/<\/p>\s*$/, '');
  return html;
}

function processHighlights(html) {
  return html.replace(/\|\|(.*?)\|\|/g, (match, p1) => {
    return `<span class="shary" tabindex="0">${p1}</span>`;
  });
}

watchEffect(() => {
  try {
    let content;
    if (props.content !== null) {
      content = props.content;
    } else {
      content = slots.default ? slots.default().map(node => node.children).join('').trim() : '';
    }

    let rawHtml = marked(content, markedOptions);
    rawHtml = removePTags(rawHtml);
    rawHtml = processHighlights(rawHtml);
    compiledMarkdown.value = rawHtml;
  } catch (error) {
    console.error('Markdown parsing error:', error);
    compiledMarkdown.value = 'Error parsing markdown';
  }
});
</script>

<style>
.shary {
  position: relative;
  cursor: pointer;
  display: inline-block;
}

.shary::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  transition: opacity 0.3s ease;
}

.shary:hover::before,
.shary:focus::before,
.shary:active::before {
  opacity: 0;
}

@media (max-width: 768px) {
  .shary:active::before {
    opacity: 0;
  }
}
</style>