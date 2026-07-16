---
aside: false
title: ウィキガイド
tags:
    - ナビゲーション
    - 貢献
---

# ウィキガイド

<br>

<NavList />

<br>

## LoM-Wiki の構築には、仲間たちの共同メンテナンスが欠かせません

<div v-html="$frontmatter.contributors"></div>

<script setup>
import NavList from './../.vitepress/theme/components/private/NavList.vue'

import { VPTeamMembers } from 'vitepress/theme'
import { ref, onMounted } from 'vue'

const members = ref([])

onMounted(async () => {
  const baseUrl = import.meta.env.BASE_URL || '/'
  const response = await fetch(`${baseUrl}/json/contributors.json`)
  const data = await response.json()
  members.value = data
})
</script>

<VPTeamMembers size="small" :members="members" />
