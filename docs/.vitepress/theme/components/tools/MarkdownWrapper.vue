<template>
  <template v-for="(part, index) in compiledParts" :key="index">
    <VPNolebaseInlineLinkPreview v-if="part?.type === 'link'" 
      :href="part.href" 
    >{{ part.text }}</VPNolebaseInlineLinkPreview>
    <WikiLink v-else-if="part?.type === 'wikilink'" :text="part.text" />
    <span v-else v-html="part"></span>
  </template>
</template>

<script setup>
import { ref, watchEffect, getCurrentInstance, render,onMounted } from 'vue';
import { withBase } from 'vitepress';
import { marked } from 'marked';

const props = defineProps({
  content: {
    type: String,
    default: null
  }
});

const instance = getCurrentInstance();
const slots = instance.slots;
const compiledParts = ref([]);

const markedOptions = {
  breaks: true,
  gfm: true,
  headerIds: false,
  mangle: false
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

function processContent(html) {
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
                content = slots.default ? slots.default().map(node => { 
                    if (typeof node.children === 'string') {
                        return node.children;
                    } else if (node.type === Symbol.for('v-txt')) {
                        return node.children;
                    } else {
                        const el = document.createElement('div');
                        render(node, el);
                        return el.innerHTML;
                    }
                }).join('').trim() : '';
            }

            let rawHtml = marked(content, markedOptions);
            rawHtml = removePTags(rawHtml);
            rawHtml = processHighlights(rawHtml);
            compiledParts.value = processContent(rawHtml);
        } catch (error) {
            console.error('Markdown parsing error:', error);
            compiledParts.value = ['Error parsing markdown'];
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