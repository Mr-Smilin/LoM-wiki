---
title: 生死簿(驟死結局)圖片產生器
description: 生死簿(驟死結局)圖片產生器
aside: false
outline: [2, 3]
sidebar: true
borderless: false
pageClass: guide-page
tags:
    - 圖片產生器
    - image generator
    - badend
    - 生死簿
---

## {{ $frontmatter.title }}

<ClientOnly>
    <BadendImageGenerator></BadendImageGenerator>
</ClientOnly>

<script setup>
import BadendImageGenerator from '/.vitepress/theme/components/private/image-generator/BadendImageGenerator.vue'
</script>
