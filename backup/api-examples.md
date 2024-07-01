---
outline: deep
---

# 運行時 API 範例

本頁面示範了 VitePress 提供的一些執行時間 API 的使用。

主要的 `useData()` API 可用於存取目前頁面的網站、主題和頁面資料。它適用於`.md`和`.vue`檔案：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 結果

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## 更多內容

查看[執行時間 API 的完整清單](https://vitepress.dev/reference/runtime-api#usedata) 的文件。
