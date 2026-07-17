<template>
  <template v-for="(part, index) in compiledParts" :key="index">
    <component v-if="part?.type === 'component'" :is="part.component" v-bind="part.props">
      <MarkdownWrapper :content="part.children" :disable-links="disableLinks" />
    </component>
    <MdNode v-else-if="part?.type" :node="part" />
    <span v-else>{{ part }}</span>
  </template>
</template>

<script setup>
import { ref, watchEffect, getCurrentInstance, onMounted, h, resolveComponent } from 'vue';
import { withBase } from 'vitepress';
import MarkdownIt from 'markdown-it';

const props = defineProps({
  content: {
    type: [String, Array, Object],
    default: null
  },
  // 連結（含 wikilink）改以純文字渲染，供已在連結內的場景（如 WikiLink 自訂文字）避免巢狀 <a>
  disableLinks: {
    type: Boolean,
    default: false
  }
});

const instance = getCurrentInstance();
const slots = instance.slots;
const compiledParts = ref([]);

// 這兩個元件都是全域註冊，用 resolveComponent 取得以避免循環 import
const LinkPreview = resolveComponent('VPNolebaseInlineLinkPreview');
const WikiLinkComponent = resolveComponent('WikiLink');

const md = new MarkdownIt({
  breaks: true,
  html: true,
  linkify: true
});

function processHighlights(html) {
  return html.replace(/\|\|(.*?)\|\|/g, (match, p1) => {
    return `<span class="shary" tabindex="0">${p1}</span>`;
  });
}

// 先把 [[wikilink]] 換成佔位元素，內文（可能含已渲染的 HTML）藏進屬性，
// 讓後續的 DOM 解析把它當成單一節點處理
function markWikiLinks(html) {
  return html.replace(/\[\[([^\]]+)\]\]/g, (match, text) => {
    return `<span data-md-wikilink="${escapeAttr(text)}"></span>`;
  });
}

function escapeAttr(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// 字串 → markdown 渲染 → DOM 解析 → 節點描述樹
// 用 DOM 走訪取代字串切割，連結被抽換成元件時外層標籤（strong/em/span 等）的巢狀結構才能保留
function parseString(text) {
  let html = md.renderInline(text.trim());
  html = processHighlights(html);
  html = markWikiLinks(html);
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return Array.from(doc.body.childNodes)
    .map(domToNode)
    .filter(node => node !== null);
}

function domToNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return { type: 'text', text: node.textContent };
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }
  if (node.hasAttribute('data-md-wikilink')) {
    return { type: 'wikilink', text: node.getAttribute('data-md-wikilink') };
  }
  if (node.tagName === 'A') {
    return {
      type: 'link',
      href: normalizeHref(node.getAttribute('href')),
      children: mapChildren(node)
    };
  }
  const tag = node.tagName.toLowerCase();
  if (tag === 'script') {
    return null;
  }
  const attrs = {};
  for (const attr of node.attributes) {
    attrs[attr.name] = attr.value;
  }
  return {
    type: 'element',
    tag,
    attrs,
    children: mapChildren(node)
  };
}

function mapChildren(node) {
  return Array.from(node.childNodes)
    .map(domToNode)
    .filter(child => child !== null);
}

function normalizeHref(rawHref) {
  let href = !!rawHref ? rawHref : '#';
  href = href.endsWith('.md') ? href.slice(0, -3) : href;
  href = href.endsWith('.html') ? href.slice(0, -5) : href;
  return href.startsWith('/LoM-wiki') ? href : withBase(href);
}

function renderNode(node) {
  if (node.type === 'text') {
    return node.text;
  }
  if (node.type === 'wikilink') {
    if (props.disableLinks) {
      return wikilinkDisplayText(node.text);
    }
    return h(WikiLinkComponent, { text: node.text });
  }
  if (node.type === 'link') {
    const children = node.children.map(renderNode);
    if (props.disableLinks) {
      return children;
    }
    return h(LinkPreview, { href: node.href }, () => children);
  }
  if (node.type === 'element') {
    return h(node.tag, node.attrs, node.children.map(renderNode));
  }
  return null;
}

function wikilinkDisplayText(text) {
  const parts = text.split('|');
  return parts.length > 1 ? parts[1] : parts[0];
}

const MdNode = (nodeProps) => renderNode(nodeProps.node);
MdNode.props = { node: Object };

function processContent(content) {
  if (typeof content === 'string') {
    return parseString(content);
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
    } else if (typeof content.default === 'function') {
      // 元件 vnode 的 children 可能是 slots 物件
      return processContent(content.default());
    } else if (content.children) {
      return processContent(content.children);
    }
    return [];
  } else if (content === null || content === undefined) {
    return [];
  }
  return [content];
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
  /* 高亮內的連結是 positioned 元素（nolebase 的 [relative=""]），需墊高遮罩才蓋得住 */
  z-index: 1;
}

.shary:hover::before,
.shary:focus::before,
.shary:active::before {
  opacity: 0;
  /* 遮罩透明後仍會攔截點擊，需放行讓連結可點 */
  pointer-events: none;
}

@media (max-width: 768px) {
  .shary:active::before {
    opacity: 0;
    pointer-events: none;
  }
}
</style>
