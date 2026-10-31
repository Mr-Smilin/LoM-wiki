---
title: 開發項目列表
description: 開發項目列表已併入鍛冶場、煉丹房開發路線圖
sidebar: false
aside: false
---

<script setup>
// 舊網址相容：帶著 #錨點 轉到新頁（項目與分類的錨點名稱沿用）
import { onMounted } from "vue";
import { withBase } from "vitepress";
onMounted(() => location.replace(withBase("/system/forge-roadmap") + location.hash));
</script>

# {{ $frontmatter.title }}
開發項目列表已併入[鍛冶場、煉丹房開發路線圖](/system/forge-roadmap)。
