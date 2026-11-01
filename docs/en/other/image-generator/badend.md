---
title: Book of Life and Death (Badend) Image Generator
description: Book of Life and Death (Badend) Image Generator
aside: false
outline: [2, 3]
sidebar: true
borderless: false
pageClass: guide-page
tags:
    - Image Generator
    - image generator
    - badend
    - Book of Life and Death
---

## {{ $frontmatter.title }}

<ClientOnly>
    <BadendImageGenerator></BadendImageGenerator>
</ClientOnly>

<script setup>
import BadendImageGenerator from '/.vitepress/theme/components/private/image-generator/BadendImageGenerator.vue'
</script>
