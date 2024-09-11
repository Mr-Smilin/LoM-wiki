<template>
  <template v-for="(part, index) in compiledParts" :key="index">
    <VPNolebaseInlineLinkPreview v-if="part?.type === 'link'" 
      :href="part.href" 
    >{{ part.text }}</VPNolebaseInlineLinkPreview>
    <WikiLink v-else-if="part?.type === 'wikilink'" :text="part.text" />
    <component v-else-if="part?.type === 'component'" :is="part.component" v-bind="part.props">
      <MarkdownWrapper :content="part.children" />
    </component>
    <span v-else v-html="part"></span>
  </template>
</template>

<script setup>
import { ref, watchEffect, getCurrentInstance, onMounted } from 'vue';
import { withBase } from 'vitepress';
import MarkdownIt from 'markdown-it';

const props = defineProps({
  content: {
    type: String,
    default: null
  }
});

const instance = getCurrentInstance();
const slots = instance.slots;
const compiledParts = ref([]);

const md = new MarkdownIt({
  breaks: true,
  html: true,
  linkify: true
});

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

function processContent(content) {
  if (typeof content === 'string') {
    const html = md.renderInline(content);
    const cleanHtml = removePTags(processHighlights(html));
    return processLinks(cleanHtml);
  } else if (Array.isArray(content)) {
    return content.map(item => processContent(item)).flat();
  } else if (typeof content === 'object' && content !== null) {
    if (content.type && typeof content.type !== 'symbol') {
      return [{
        type: 'component',
        component: content.type,
        props: content.props || {},
        children: content.children
      }];
    } else if (content.children) {
      return processContent(content.children);
    }
  }
  return [content];
}

function processLinks(html) {
  const linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi;
  const wikiLinkRegex = /\[\[([^\]]+)\]\]/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      parts.push(html.slice(lastIndex, match.index));
    }
    let href = !!match[1] ? match[1] : '#';
    href = href.endsWith('.md') ? href.slice(0, -3) : href;
    href = href.endsWith('.html') ? href.slice(0, -5) : href;
    href = href.startsWith('/LoM-wiki') ? href : withBase(href)
    parts.push({
      type: 'link',
      href: href,
      text: match[2]
    });
    lastIndex = linkRegex.lastIndex;
  }

  while((match = wikiLinkRegex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      parts.push(html.slice(lastIndex, match.index));
    }
    parts.push({
      type: 'wikilink',
      text: match[1]
    });
    lastIndex = wikiLinkRegex.lastIndex;
  }

  if (lastIndex < html.length) {
    parts.push(html.slice(lastIndex));
  }

  return parts;
}

onMounted(() => {
  watchEffect(() => {
    try {
      let content;
      if (props.content !== null) {
        content = props.content;
      } else {
        content = slots.default ? slots.default() : '';
      }

      compiledParts.value = processContent(content);
    } catch (error) {
      console.error('Content parsing error:', error);
      compiledParts.value = ['Error parsing content'];
    }
  });
})
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
  background-color: var(--vp-c-gray-2);
  border-radius: 5px;
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