<template>
    <VPNolebaseInlineLinkPreview :href="linkPath">
        <MarkdownWrapper v-if="parsedLink.customText" disable-links>
            {{ parsedLink.customText }}
        </MarkdownWrapper>
        <template v-else>{{ parsedLink.pagePath }}</template>
    </VPNolebaseInlineLinkPreview>
</template>

<script setup>
import { computed } from 'vue'
import { withBase, useData } from 'vitepress';
import wikiLinkIndex from '../../script/wikiLinkIndex'

const props = defineProps(['text'])

const { localeIndex } = useData();

const parsedLink = computed(() => {
    const parts = props.text.split('|')
    let path = parts[0]
    let customText = ''
    
    if (parts.length > 1) {
        customText = parts[1]
    }
    
    const [pageName, hash] = path.split('#')
    
    return {
        pagePath: pageName,
        anchor: hash ? `#${hash}` : '',
        customText: customText
    }
})

const linkPath = computed(() => {
    // 索引值按 locale 分组 ({ root, en, ja, "zh-hans" })，优先取当前语系页面，
    // 该语系没有此页面时回退 root (繁體中文)，再退到任一已存在的语系
    const entry = wikiLinkIndex[parsedLink.value.pagePath]
    if (entry) {
        const path = entry[localeIndex.value] ?? entry.root ?? Object.values(entry)[0];
        return withBase(`/${path}${parsedLink.value.anchor}`)
    }
    return '#'
})
</script>