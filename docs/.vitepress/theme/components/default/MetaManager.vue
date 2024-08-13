<template></template>

<script setup>
import { onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { site, theme, page } = useData()

function updateMetaTags() {
  const head = document.head
  const existingOGTags = head.querySelectorAll('meta[property^="og:"], meta[property^="article:"]')
  existingOGTags.forEach(tag => tag.remove())

  const title = page.value.frontmatter.title || site.value.title
  const description = page.value.frontmatter.description || site.value.description
  const siteName = site.value.title
  const type = "article"
  const url = `${site.value.base}${page.value.relativePath}`
  const locale = site.value.lang
  const image = theme.value.logo.light
  const tags = page.value.frontmatter.tags || []


  const ogTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: locale },
    { property: 'og:image', content: image },
    { property: 'article:tag', content: tags.join(', ') }
  ]

  const descriptionMeta = head.querySelector('meta[name="description"]')
  const insertPosition = descriptionMeta ? descriptionMeta.nextSibling : head.firstChild


  ogTags.forEach(tag => {
    if (tag.content) {
      const meta = document.createElement('meta')
      meta.setAttribute('property', tag.property)
      meta.setAttribute('content', tag.content)
      head.insertBefore(meta, insertPosition)
    }
  })
}

onMounted(updateMetaTags)

watch(() => [page.value.frontmatter.tags, page.value.frontmatter.title, page.value.frontmatter.description], updateMetaTags, { deep: true })
</script>