<!--
  一個項目的數值表 + 獲得方式 / 備註。
  stats：分等級的表（素質 x 等級 0..N）；info：一欄一值的表（例如靈丹）。
-->
<script setup>
import { computed } from "vue";
import { withBase } from "vitepress";
import MarkdownIt from "markdown-it";

// html: false → 資料裡的原始 HTML 一律當文字顯示；markdown-it 也會擋掉 javascript: 之類的連結
const md = new MarkdownIt({ html: false, breaks: true });
const renderLinkOpen = md.renderer.rules.link_open || ((tokens, idx, opts, env, self) => self.renderToken(tokens, idx, opts));
md.renderer.rules.link_open = (tokens, idx, opts, env, self) => {
  const href = tokens[idx].attrGet("href");
  if (href?.startsWith("/")) tokens[idx].attrSet("href", withBase(href)); // 站內連結補上 /LoM-wiki
  return renderLinkOpen(tokens, idx, opts, env, self);
};
const render = (text) => (text ? md.render(String(text)) : "");

const props = defineProps({
  item: { type: Object, required: true },
});

const stats = computed(() => Object.entries(props.item.stats || {}));
const info = computed(() => Object.entries(props.item.info || {}));
const levels = computed(() => Math.max(1, ...stats.value.map(([, v]) => (Array.isArray(v) ? v.length : 1))));
// 全部都是單一值（例如完竟劍）時沒有等級可言，表頭改顯示「數值」
const hasLevels = computed(() => stats.value.some(([, v]) => Array.isArray(v)));

if (import.meta.env.DEV) {
  for (const [name, v] of stats.value)
    if (Array.isArray(v) && v.length !== levels.value)
      console.warn(`[forge] 「${props.item.name}」的「${name}」有 ${v.length} 個值，其他行是 ${levels.value} 個`);
}
</script>

<template>
  <div class="forge-body">
    <div v-if="stats.length" class="forge-scroll">
      <table>
        <thead>
          <tr>
            <th class="forge-sticky">{{ hasLevels ? "素質＼等級" : "素質" }}</th>
            <template v-if="hasLevels">
              <th v-for="n in levels" :key="n">{{ n - 1 }}</th>
            </template>
            <th v-else>數值</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="[name, values] in stats" :key="name">
            <th scope="row" class="forge-sticky">{{ name }}</th>
            <template v-if="Array.isArray(values)">
              <td v-for="(v, i) in values" :key="i">{{ v }}</td>
            </template>
            <td v-else :colspan="levels">{{ values }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="info.length" class="forge-scroll">
      <table>
        <tbody>
          <tr v-for="[name, value] in info" :key="name">
            <th scope="row">{{ name }}</th>
            <td class="forge-pre">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <dl class="forge-meta">
      <template v-if="item.obtain">
        <dt>獲得方式</dt>
        <dd v-html="render(item.obtain)"></dd>
      </template>
      <template v-if="item.note">
        <dt>備註</dt>
        <dd v-html="render(item.note)"></dd>
      </template>
    </dl>
  </div>
</template>

<style>
.forge .forge-body {
  margin: 6px 0 var(--forge-gap); padding: 4px 0;
  position: relative; z-index: 1; background: var(--vp-c-bg); /* 蓋住後方的連接線 */
}
/* contain: 表格寬度不往外撐（VitePress 的 .content-container 是 min-width:auto 的 flex 子項，iPad 直式會被撐破） */
.forge .forge-scroll { overflow-x: auto; contain: inline-size; }
/* sticky 欄位在 border-collapse: collapse 下會錯位，改用 separate，框線只畫右、下避免變兩倍粗 */
.forge .forge-scroll table {
  display: table; margin: 0; border-collapse: separate; border-spacing: 0;
  border-top: 1px solid var(--vp-c-divider); border-left: 1px solid var(--vp-c-divider);
}
.forge .forge-scroll th,
.forge .forge-scroll td {
  white-space: nowrap; text-align: center;
  border: 0; border-right: 1px solid var(--vp-c-divider); border-bottom: 1px solid var(--vp-c-divider);
}
/* 手機上左右滑時，素質名稱固定在左邊 */
.forge .forge-sticky { position: sticky; left: 0; z-index: 1; background: var(--vp-c-bg-soft); }
/* 表格跟卡片同階同色（--forge-card 由 ForgeRoot 依階層設定；特殊取得沒有階層，維持灰色） */
.forge .forge-li[class*="forge-lvl-"] > .forge-node > .forge-body {
  padding: 8px; border: 1px solid color-mix(in srgb, var(--forge-card) 55%, transparent); border-radius: 8px;
}
.forge .forge-li[class*="forge-lvl-"] > .forge-node > .forge-body thead th,
.forge .forge-li[class*="forge-lvl-"] > .forge-node > .forge-body .forge-sticky,
.forge .forge-li[class*="forge-lvl-"] > .forge-node > .forge-body tbody th {
  background: color-mix(in srgb, var(--forge-card) 22%, var(--vp-c-bg-soft));
}
.forge .forge-pre { white-space: pre-line !important; text-align: left !important; }
.forge .forge-meta { margin: 10px 0 0; font-size: 14px; }
.forge .forge-meta dt { font-weight: 600; color: var(--vp-c-text-2); margin-top: 6px; }
.forge .forge-meta dd { margin: 2px 0 0; }
.forge .forge-meta dd p,
.forge .forge-meta dd ul { margin: 0; }
</style>
