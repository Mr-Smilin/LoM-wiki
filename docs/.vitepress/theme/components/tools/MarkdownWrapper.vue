<template>
  <span 
    :class="{'shary': isHighlighted}" 
    v-html="compiledMarkdown"
  ></span>
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
const isHighlighted = ref(false);

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

watchEffect(() => {
  try {
    let content;
    if (props.content !== null) {
      content = props.content;
    } else {
      content = slots.default ? slots.default().map(node => node.children).join('').trim() : '';
    }

    if (content.startsWith('||') && content.endsWith('||')) {
      isHighlighted.value = true;
      content = content.slice(2, -2);
    } else {
      isHighlighted.value = false;
    }

    let rawHtml = marked(content, markedOptions);
    rawHtml = removePTags(rawHtml);
    // compiledMarkdown.value = DOMPurify.sanitize(rawHtml);
    compiledMarkdown.value = rawHtml;
  } catch (error) {
    console.error('Markdown parsing error:', error);
    compiledMarkdown.value = 'Error parsing markdown';
  }
});
</script>

<style scoped>
.shary {
  position: relative;
  cursor: pointer;
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
.shary:hover::before {
  opacity: 0.5;
}
</style>