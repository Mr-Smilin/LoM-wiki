---
title: 生死簿 (バッドエンド) 画像ジェネレーター
description: 生死簿 (バッドエンド) 画像ジェネレーター
aside: false
outline: [2, 3]
sidebar: true
borderless: false
pageClass: guide-page
tags:
    - 画像ジェネレーター
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
