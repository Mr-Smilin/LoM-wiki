<template></template>

<script setup>
import { onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

function updateTags() {
    const existingMeta = document.querySelector('meta[property="article:tag"]')
  if (existingMeta) {
    existingMeta.remove()
  }

  const tags = page.value.frontmatter.tags || []
  if (tags.length > 0) {
    const meta = document.createElement('meta')
    meta.setAttribute('property', 'article:tag')
    meta.setAttribute('content', tags.join(', '))
    document.head.appendChild(meta)
  }
}

onMounted(updateTags)

watch(() => page.value.frontmatter.tags, updateTags, { deep: true })
</script>