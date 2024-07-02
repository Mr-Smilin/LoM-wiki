---
title: Wiki 導覽
tags:
  - 導覽
  - 貢獻
---

# Wiki 導覽

待整理

<br>

## LoM-wiki 的建立，離不開小夥伴們的共同維護

<div v-html="$frontmatter.contributors"></div>

<script setup>
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
