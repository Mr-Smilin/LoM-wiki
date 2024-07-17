<template>
    <VPNolebaseInlineLinkPreview :href="linkPath">
        <MarkdownWrapper v-if="parsedLink.customText">
            {{ parsedLink.customText }}
        </MarkdownWrapper>
        <template v-else>{{ parsedLink.pagePath }}</template>
    </VPNolebaseInlineLinkPreview>
</template>

<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress';
import wikiLinkIndex from '../../script/wikiLinkIndex'

const props = defineProps(['text'])

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
    const path = wikiLinkIndex[parsedLink.value.pagePath]
    if (path) {
        return withBase(`/${path}${parsedLink.value.anchor}`)
    }
    return '#'
})
</script>