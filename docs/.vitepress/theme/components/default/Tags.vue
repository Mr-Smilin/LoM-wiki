<template></template>

<script setup>
import { onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

function updateTags() {
  const head = document.head
  const existingMeta = head.querySelector('meta[property="article:tag"]')
  if (existingMeta) {
    existingMeta.remove()
  }

  const tags = page.value.frontmatter.tags || []
  if (tags.length > 0) {
    const meta = document.createElement('meta')
    meta.setAttribute('property', 'article:tag')
    meta.setAttribute('content', tags.join(', '))
    
    const descriptionMeta = head.querySelector('meta[name="description"]')
    if (descriptionMeta) {
      descriptionMeta.insertAdjacentElement('afterend', meta)
    } else {
      head.insertBefore(meta, head.firstChild)
    }
  }
}

onMounted(updateTags)

watch(() => page.value.frontmatter.tags, updateTags, { deep: true })
</script>