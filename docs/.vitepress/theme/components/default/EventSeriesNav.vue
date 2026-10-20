<!-- 連續事件導覽列：事件頁上方顯示「← 前一個事件 ｜ 系列名 ｜ 下一個事件 →」，分支時逐行列出「條件 事件 →」。
     資料在 theme/data/eventSeries.js，連結文字取各語系頁面的 frontmatter title。 -->
<template>
    <nav v-if="rows.length" class="event-series-nav">
        <div v-for="row in rows" :key="row.name" class="event-series-nav__row">
            <div class="event-series-nav__prev">
                <div v-for="link in row.prev" :key="link.href" class="event-series-nav__line">
                    <span class="event-series-nav__arrow">←</span>
                    <a :href="link.href">{{ link.text }}</a>
                    <span v-if="link.when" class="event-series-nav__when">{{ link.when }}</span>
                </div>
            </div>
            <span class="event-series-nav__name">{{ row.name }}</span>
            <div class="event-series-nav__next">
                <div v-for="link in row.next" :key="link.href" class="event-series-nav__line">
                    <span v-if="link.when" class="event-series-nav__when">{{ link.when }}</span>
                    <a :href="link.href">{{ link.text }}</a>
                    <span class="event-series-nav__arrow">→</span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { computed } from "vue";
import { useData, withBase } from "vitepress";
import wikiLinkIndex from "../../script/wikiLinkIndex";
import eventSeries from "../../data/eventSeries.js";

// 語系 → 該語系頁面的路徑前綴 (root 為繁體中文，沒有前綴)
const LOCALE_PREFIX = { root: "", "zh-hans": "zh-hans/", en: "en/", ja: "ja/" };

// wikiLinkIndex 是「標題 → 各語系路徑」，反過來建「路徑 (不含 .html) → 標題」供連結文字使用
const titleByPath = {};
for (const [title, entry] of Object.entries(wikiLinkIndex)) {
    for (const p of Object.values(entry)) titleByPath[p.replace(/\.html$/, "")] = title;
}

const pagePath = (name) => (name.includes("/") ? name : `event/simple/${name}`);

// 資料裡的頁面可寫成檔名字串或 { page, when }，統一成 { path, when }
const toItem = (item) =>
    typeof item === "string" ? { path: pagePath(item), when: null } : { path: pagePath(item.page), when: item.when ?? null };

// 每個系列展開成「頁面 → 前一格 / 下一格的 { path, when }」，同一頁出現在多條 flow 時取聯集。
// requires 只加在該頁的前一格，前提事件那一頁不因此多出導覽列或下一格
const graphs = eventSeries.map((series) => {
    const prev = new Map();
    const next = new Map();
    const node = (p) => {
        if (!prev.has(p)) prev.set(p, []);
        if (!next.has(p)) next.set(p, []);
    };
    const add = (map, key, path, when) => {
        if (!map.get(key).some((e) => e.path === path)) map.get(key).push({ path, when });
    };
    for (const flow of series.flows) {
        const steps = flow.map((step) => (Array.isArray(step) ? step : [step]).map(toItem));
        steps.forEach((step, i) => {
            for (const item of step) {
                node(item.path);
                // 連結條件 when 記在後一頁的項目上，前後兩頁都顯示同一個條件
                for (const p of steps[i - 1] ?? []) add(prev, item.path, p.path, item.when);
                for (const n of steps[i + 1] ?? []) add(next, item.path, n.path, n.when);
            }
        });
    }
    for (const [page, required] of Object.entries(series.requires ?? {})) {
        const key = pagePath(page);
        node(key);
        for (const item of required.map(toItem)) add(prev, key, item.path, item.when);
    }
    return { name: series.name, prev, next };
});

// 日文頁標題末尾的原文併記「(中文)」不放進連結文字 (與 tools/checkJaTranslation.js 的 LABEL 規則相同)
const labelOf = (title, locale) => {
    if (locale !== "ja") return title;
    const m = title.match(/^(.+?)\s*[(（]([^)）]+)[)）]$/);
    return m ? m[1].trim() : title;
};

const { page, localeIndex } = useData();

const rows = computed(() => {
    const locale = localeIndex.value;
    const prefix = LOCALE_PREFIX[locale];
    const rel = page.value.relativePath.replace(/\.md$/, "");
    if (prefix === undefined || !rel.startsWith(prefix)) return [];
    const key = rel.slice(prefix.length);

    const link = ({ path: p, when }) => {
        // 該語系沒有這一頁時退回繁體中文頁 (與 WikiLink 相同)
        const path = titleByPath[prefix + p] !== undefined ? prefix + p : p;
        const title = titleByPath[path] ?? p.split("/").pop();
        return {
            href: withBase(`/${path}.html`),
            text: labelOf(title, locale),
            when: when ? when[locale] ?? when.root : null,
        };
    };

    return graphs
        .filter((g) => g.name[locale] && g.prev.has(key))
        .map((g) => ({
            name: g.name[locale],
            prev: g.prev.get(key).map(link),
            next: g.next.get(key).map(link),
        }));
});
</script>

<style scoped>
.event-series-nav {
    margin: 4px 0 16px;
    border-top: 1px solid var(--vp-c-divider);
    border-bottom: 1px solid var(--vp-c-divider);
    font-size: 14px;
    line-height: 1.6;
}

.event-series-nav__row {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
}

.event-series-nav__row + .event-series-nav__row {
    border-top: 1px dashed var(--vp-c-divider);
}

.event-series-nav__prev {
    text-align: left;
}

.event-series-nav__next {
    text-align: right;
}

.event-series-nav__name {
    padding: 0 10px;
    border-radius: 4px;
    background-color: var(--vp-c-default-soft);
    color: var(--vp-c-text-2);
    font-weight: 600;
    white-space: nowrap;
}

.event-series-nav a {
    color: var(--vp-c-brand-1);
    text-decoration: none;
}

.event-series-nav a:hover {
    text-decoration: underline;
}

.event-series-nav__arrow {
    color: var(--vp-c-text-3);
    margin: 0 4px;
}

.event-series-nav__when {
    color: var(--vp-c-text-2);
    font-size: 12px;
    margin: 0 6px;
}

@media (max-width: 640px) {
    .event-series-nav__row {
        grid-template-columns: 1fr;
        gap: 2px;
    }

    .event-series-nav__name {
        justify-self: center;
    }

    .event-series-nav__prev {
        order: 1;
    }

    .event-series-nav__next {
        order: 2;
    }
}
</style>
