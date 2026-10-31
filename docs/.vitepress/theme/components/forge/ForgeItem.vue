<!--
  開發樹上的一個項目：卡片（圖示、名稱、解鎖條件、滿級數值與成本），點開顯示 ForgeTable，底下接子項目。
  node = { item: 資料檔裡的一個項目, children: [node, ...] }，由 ForgeRoot 組好傳進來。
-->
<script setup>
import { computed, inject } from "vue";
import { withBase } from "vitepress";
import ForgeTable from "./ForgeTable.vue";

const props = defineProps({
  node: { type: Object, required: true },
  depth: { type: Number, default: 0 }, // 起點為 0
});
// 分階：起點為一階。卡片底色與往子項目的連線同色：1 綠、2 橘、3 以上紅（顏色在 ForgeRoot 的 --forge-c1..3）
const lvl = `forge-lvl-${Math.min(props.depth + 1, 3)}`;

// 卡片上的摘要，全部從資料算出來，資料檔不用另外填：
//   stats：「單級…」不顯示；「累積…」的最後一個值 = 滿級成本；其餘取最後一級 = 滿級數值
//   info（靈丹）：多行文字（物品效果）當數值，其餘（總煉丹、總銀兩）當成本
const item = props.node.item;
const last = (v) => (Array.isArray(v) ? v.at(-1) : v);
const stats = Object.entries(item.stats || {});
const info = Object.entries(item.info || {});
const hasLevels = stats.some(([, v]) => Array.isArray(v));
const fmt = (v) => (typeof v === "number" ? v.toLocaleString("en-US") : v);
const isText = (v) => typeof v === "string" && v.includes("\n");
// [名稱, 值]；「陰陽+10」這種效果文字拆成 ["陰陽", "+10"]
const splitEffect = (line) => {
  const m = line.match(/^(.+?)\s*([+\-−]\d.*)$/);
  return m ? [m[1], m[2]] : [line, ""];
};
// 介面文字與列名翻譯由 ForgeRoot 依語系提供；判斷「單級／累積」一律看資料檔的繁中列名
const terms = inject("forgeTerms");
const L = computed(() => terms.value.labels);
const row = (k) => terms.value.rows[k] ?? k;
const val = (v) => (typeof v === "string" ? terms.value.values[v] ?? v : v);
const summary = computed(() =>
  stats.length
    ? stats.filter(([k]) => !/^(單級|累積)/.test(k)).map(([k, v]) => [row(k), val(fmt(last(v)))])
    : info.filter(([, v]) => isText(v)).flatMap(([, v]) => v.split("\n").filter(Boolean).map(splitEffect))
);
const cost = computed(() =>
  stats.length
    ? stats.filter(([k]) => k.startsWith("累積")).map(([k, v]) => [terms.value.cost[k] ?? row(k), fmt(last(v))])
    : info.filter(([, v]) => !isText(v)).map(([k, v]) => [row(k), fmt(v)])
);
const summaryLabel = computed(() => (stats.length ? (hasLevels ? L.value.maxStats : L.value.stats) : L.value.effects));
</script>

<template>
  <li :class="['forge-li', node.item.special ? '' : lvl]">
    <details :id="node.item.anchor" class="forge-node">
      <summary>
        <img :src="withBase(node.item.icon)" alt="" loading="lazy" />
        <span>
          <b>{{ node.item.name }}</b>
          <small>{{ L.unlock }}{{ L.colon }}{{ node.item.requires?.length ? node.item.requires.join(L.sep) : L.none }}</small>
          <template v-if="summary.length">
            <small class="forge-sum-label">{{ summaryLabel }}</small>
            <span class="forge-kv">
              <template v-for="[k, v] in summary" :key="k">
                <span class="forge-k">{{ k }}</span><span class="forge-v">{{ v }}</span>
              </template>
            </span>
          </template>
          <span v-if="cost.length" class="forge-cost">
            <span v-for="[k, v] in cost" :key="k">{{ k }} <b>{{ v }}</b></span>
          </span>
        </span>
      </summary>
      <ForgeTable :item="node.item" />
    </details>
    <ul v-if="node.children.length" :class="['forge-ul', lvl]">
      <ForgeItem v-for="child in node.children" :key="child.item.key" :node="child" :depth="depth + 1" />
    </ul>
  </li>
</template>
