---
aside: false
title: Wiki 導覽
tags:
  - 導覽
  - 貢獻
---

# Wiki 導覽

<br>

- **人物**
  - 夢境心上人
  - 稱號列表
  - 主支線重要發生時間軸
- **武功**
  - 尚無頁面
- **互動事件**
  - 養成指令整理
  - 門派設施
- **結局**
  - 尚無頁面
- **其他**
  - 更新計畫
  - 拆包資料
  - 唐門圖書館
- **協助編輯**
  - 如何開始
  - 設定檔項目說明
  - 本地運行(進階)
  - Markdown 基本知識 & 頁面模板

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
