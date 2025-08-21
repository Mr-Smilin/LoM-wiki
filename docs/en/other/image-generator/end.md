---
title: Historical Book (Ending) Image Generator
description: Historical Book (Ending) Image Generator
aside: false
outline: [2, 3]
sidebar: true
borderless: false
pageClass: guide-page
tags:
    - Image Generator
    - image generator
    - end
    - Historical Book
---

## {{ $frontmatter.title }}

<ClientOnly>
    <EndImageGenerator></EndImageGenerator>
</ClientOnly>

<script setup>
import EndImageGenerator from '/.vitepress/theme/components/private/image-generator/EndImageGenerator.vue'
</script>
