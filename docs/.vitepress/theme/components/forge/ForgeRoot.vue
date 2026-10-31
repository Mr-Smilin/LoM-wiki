<!--
  鍛冶場 / 煉丹房開發樹。只管「節點之間的關係」：讀資料檔、依 parent 組成樹。
  用法（Markdown 裡）：<ForgeRoot category="weapon" />
  category 對應 .vitepress/theme/data/forge/<category>.js；新增、修改項目只要改資料檔。
-->
<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import ForgeItem from "./ForgeItem.vue";

const modules = import.meta.glob("../../data/forge/*.js", { eager: true });

const props = defineProps({
  category: { type: String, required: true },
});

const data = computed(() => modules[`../../data/forge/${props.category}.js`]?.default);

const tree = computed(() => {
  const d = data.value;
  if (!d) {
    console.warn(`[forge] 找不到資料檔 data/forge/${props.category}.js`);
    return { roots: [], special: [] };
  }
  const nodes = new Map();
  for (const item of d.items) {
    if (nodes.has(item.name)) console.warn(`[forge] ${d.title}：項目名稱重複「${item.name}」，後面那個會被忽略`);
    else nodes.set(item.name, { item, children: [] });
  }
  const roots = [];
  const special = [];
  for (const node of nodes.values()) {
    const { parent, special: isSpecial } = node.item;
    if (isSpecial) special.push(node);
    else if (parent && nodes.has(parent)) nodes.get(parent).children.push(node);
    else {
      // 打錯 parent 時當成起點顯示，不讓項目消失
      if (parent) console.warn(`[forge] ${d.title}：「${node.item.name}」的 parent「${parent}」不存在`);
      roots.push(node);
    }
  }
  return { roots, special };
});

// 網址帶 #項目名稱 時展開該項目（VitePress 自己處理頁內錨點，瀏覽器原生的自動展開不會觸發）
const openFromHash = () => {
  const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (el?.tagName === "DETAILS" && el.classList.contains("forge-node")) {
    el.open = true;
    el.scrollIntoView();
  }
};
onMounted(() => {
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
});
onUnmounted(() => window.removeEventListener("hashchange", openFromHash));
</script>

<template>
  <div class="forge">
    <p v-if="data?.intro" class="forge-intro">{{ data.intro }}</p>
    <ul class="forge-tree">
      <ForgeItem v-for="node in tree.roots" :key="node.item.name" :node="node" />
    </ul>
    <template v-if="tree.special.length">
      <p class="forge-intro">特殊取得（不在開發樹上）</p>
      <ul class="forge-tree">
        <ForgeItem v-for="node in tree.special" :key="node.item.name" :node="node" />
      </ul>
    </template>
  </div>
</template>

<style>
.forge {
  --forge-icon: 160px; /* 卡片圖示大小：只改這個，卡片高度與連接線會跟著算 */
  --forge-box: calc(var(--forge-icon) + 14px);
  --forge-indent: 28px;
  --forge-gap: 10px;
  --forge-c1: #3fb950; /* 第一階連線：綠 */
  --forge-c2: #e8912d; /* 第二階連線：橘 */
  --forge-c3: #e5534b; /* 第三階（含以上）連線：紅 */
  margin: 8px 0 16px;
}
@media (max-width: 640px) {
  .forge { --forge-icon: 100px; }
}
/* 連線顏色：ul 給子項目的 L 形線用，li 給展開時旁邊那條直線用（分兩個變數，避免子項目覆蓋） */
.forge .forge-ul.forge-lvl-1 { --forge-line: var(--forge-c1); }
.forge .forge-ul.forge-lvl-2 { --forge-line: var(--forge-c2); }
.forge .forge-ul.forge-lvl-3 { --forge-line: var(--forge-c3); }
.forge .forge-li.forge-lvl-1 { --forge-stem: var(--forge-c1); --forge-card: var(--forge-c1); }
.forge .forge-li.forge-lvl-2 { --forge-stem: var(--forge-c2); --forge-card: var(--forge-c2); }
.forge .forge-li.forge-lvl-3 { --forge-stem: var(--forge-c3); --forge-card: var(--forge-c3); }
.forge .forge-intro { font-size: 14px; color: var(--vp-c-text-2); margin: 8px 0 0; }
.forge .forge-tree,
.forge .forge-ul { list-style: none; margin: 0; padding-left: var(--forge-indent); }
.forge .forge-tree { padding-left: 0; }
.forge .forge-li { position: relative; margin: 6px 0; padding: 0; }

/* 連接線：子節點左側的 L 形，終點在卡片垂直中線 */
.forge .forge-ul > .forge-li::before {
  content: ""; position: absolute; left: -18px; top: -6px; width: 14px;
  height: calc(var(--forge-box) / 2 + 6px);
  border-left: 2px solid var(--forge-line); border-bottom: 2px solid var(--forge-line);
}
.forge .forge-ul > .forge-li:not(:last-child)::after {
  content: ""; position: absolute; left: -18px; top: 0; bottom: -8px;
  border-left: 2px solid var(--forge-line);
}
/* 有子節點的卡片展開時：表格縮排到子節點位置，旁邊補一條直線接到子節點 */
.forge .forge-li:has(> .forge-ul) > details[open] { position: relative; }
.forge .forge-li:has(> .forge-ul) > details[open] > .forge-body { margin-left: var(--forge-indent); }
.forge .forge-li:has(> .forge-ul) > details[open]::before {
  content: ""; position: absolute; left: calc(var(--forge-indent) - 18px);
  top: 0; /* 從卡片背後開始畫（卡片 z-index 較高且不透明），卡片長高也接得上 */
  bottom: calc(-1 * var(--forge-gap)); /* .forge-body 的下外距會塌陷到 details 外 */
  border-left: 2px solid var(--forge-stem);
}

/* 卡片 */
.forge .forge-node { scroll-margin-top: 80px; }
.forge .forge-node > summary {
  display: inline-flex; align-items: center; gap: 12px; box-sizing: border-box;
  min-height: var(--forge-box); max-width: min(100%, 640px); margin: 0; padding: 6px 12px 6px 6px;
  position: relative; z-index: 1;
  border: 1px solid var(--vp-c-divider); border-radius: 8px;
  background: var(--vp-c-bg-soft); color: var(--vp-c-text-1);
  cursor: pointer; list-style: none;
}
/* 卡片底色依階層（特殊取得的卡片沒有階層，維持灰底） */
.forge .forge-li[class*="forge-lvl-"] > .forge-node > summary {
  background: color-mix(in srgb, var(--forge-card) 22%, var(--vp-c-bg-soft));
  border-color: color-mix(in srgb, var(--forge-card) 55%, transparent);
}
.forge .forge-node > summary::-webkit-details-marker { display: none; }
.forge .forge-node > summary::after { content: "▸"; color: var(--vp-c-text-2); }
.forge .forge-node[open] > summary::after { content: "▾"; }
.forge .forge-li > .forge-node > summary:hover,
.forge .forge-li > .forge-node[open] > summary { border-color: var(--vp-c-brand-1); }
/* 圖示永遠是正方形；很窄的螢幕上跟著畫面寬度等比縮小，不會被擠扁 */
.forge .forge-node > summary img {
  width: min(var(--forge-icon), 30vw); height: auto; aspect-ratio: 1 / 1;
  max-width: none; object-fit: contain; flex: none;
}
.forge .forge-node > summary > span { display: flex; flex-direction: column; line-height: 1.4; min-width: 0; }
/* 卡片摘要：滿級數值兩欄對齊（桌面一列兩組、手機一組），成本放最下面 */
.forge .forge-node > summary .forge-sum-label { margin-top: 6px; font-weight: 600; }
.forge .forge-node > summary .forge-kv {
  display: grid; grid-template-columns: repeat(2, auto auto); column-gap: 10px; row-gap: 1px;
  justify-content: start; font-size: 13px; line-height: 1.5;
}
.forge .forge-node > summary .forge-k { color: var(--vp-c-text-2); }
.forge .forge-node > summary .forge-v {
  color: var(--vp-c-text-1); font-weight: 600; text-align: right;
  font-variant-numeric: tabular-nums; padding-right: 8px;
}
.forge .forge-node > summary .forge-cost {
  display: flex; flex-wrap: wrap; gap: 2px 12px; margin-top: 6px; padding-top: 4px;
  border-top: 1px solid color-mix(in srgb, var(--vp-c-text-2) 30%, transparent);
  font-size: 12px; color: var(--vp-c-text-2);
}
.forge .forge-node > summary .forge-cost b { color: var(--vp-c-text-1); font-variant-numeric: tabular-nums; }
@media (max-width: 640px) {
  .forge .forge-node > summary .forge-kv { grid-template-columns: auto auto; }
}
.forge .forge-node > summary > span > b { font-size: 16px; }
.forge .forge-node > summary small { color: var(--vp-c-text-2); font-size: 13px; }
</style>
