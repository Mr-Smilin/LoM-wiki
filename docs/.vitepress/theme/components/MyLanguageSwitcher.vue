<script setup>
import { computed } from "vue";
import { useData, useRoute, withBase } from "vitepress";

const { site, localeIndex } = useData();
const route = useRoute();

// 非 root 的语言键（zh-hans / en / ja），用于剥离当前 URL 的语言前缀
const localeKeys = computed(() =>
    Object.keys(site.value.locales).filter((k) => k !== "root"),
);

// 根据当前 URL 和目标语言，拼接目标 URL
// 缺翻译时不查文件，直接拼 → 落到 404 页
// 在 404 页面上再点其他语言 → 仍能从 URL 拼出正确路径
function resolveLink(targetKey) {
    const base = site.value.base || "/";
    let p = route.path;
    if (p.startsWith(base)) p = p.slice(base.length);
    if (!p.startsWith("/")) p = "/" + p;

    // 剥离当前语言前缀，得到 subPath（如 "/develop/2-vitepress" 或 "/"）
    let subPath = p;
    for (const key of localeKeys.value) {
        if (p === `/${key}` || p.startsWith(`/${key}/`)) {
            subPath = p.slice(key.length + 1) || "/";
            break;
        }
    }

    const target =
        targetKey === "root"
            ? subPath
            : subPath === "/"
              ? `/${targetKey}/`
              : `/${targetKey}${subPath}`;
    return withBase(target);
}

const locales = computed(() =>
    Object.entries(site.value.locales).map(([key, cfg]) => ({
        key,
        label: cfg.label || key,
        isCurrent: localeIndex.value === key,
        link: resolveLink(key),
    })),
);
</script>

<template>
    <div class="my-lang-switcher">
        <a
            v-for="loc in locales"
            :key="loc.key"
            :href="loc.link"
            :class="{ 'is-current': loc.isCurrent }"
        >
            {{ loc.label }}
        </a>
    </div>
</template>

<style scoped>
.my-lang-switcher {
    display: flex;
    gap: 4px;
    align-items: center;
    margin-left: 8px;
}
.my-lang-switcher a {
    font-size: 13px;
    line-height: 1;
    padding: 6px 8px;
    border-radius: 4px;
    color: var(--vp-c-text-2);
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.2s, background-color 0.2s;
}
.my-lang-switcher a:hover {
    color: var(--vp-c-brand-1);
    background: var(--vp-c-default-soft);
}
.my-lang-switcher a.is-current {
    color: var(--vp-c-brand-1);
    font-weight: 600;
}
</style>