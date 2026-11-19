<!--
  書頁上的修練條件（system/books/book_*.md 的「## 效果」底下）：
  資料只寫在那一頁開頭的 book: requires，這裡直接印出來，不要在正文再寫一遍。

  用法：<BookRequires />　　標籤要換字：<BookRequires label="前提" />
  沒寫 requires 的書頁不會印出任何東西。顯示的規則與秘笈列表同一份（script/bookRequires.js）。
  每一級都一樣時寫成一行，且用「、」接、或用「 或 」接（「需求：性情≧60、刀劍≧20」）；分等級時列成清單，一級一項。
-->
<template>
    <p v-if="inline">{{ resolvedLabel }}：{{ lines[0] }}</p>
    <template v-else-if="lines.length">
        <p>{{ resolvedLabel }}：</p>
        <ul>
            <li v-for="(line, i) in lines" :key="i">{{ line }}</li>
        </ul>
    </template>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { parseRequires, reqText } from '../../script/bookRequires'

const props = defineProps({
    label: { type: String, default: '' }
})

// 只讀自己這一頁的 book: requires（簡中與日文頁讀到各自語系的那份）
const { page, localeIndex } = useData()
const resolvedLabel = computed(() => props.label || (localeIndex.value === 'ja' ? '必要条件' : '需求'))
const orText = computed(() => (localeIndex.value === 'ja' ? 'または' : '或'))
const groups = computed(() => {
    const requires = page.value.frontmatter.book?.requires
    return requires ? parseRequires(requires) : []
})
const lines = computed(() => reqText(groups.value, orText.value))
// 分等級的寫成清單，才不會變成「需求：LV6～10：學問≧10」兩個冒號
const inline = computed(() => lines.value.length === 1 && !groups.value.some((g) => g.level))
</script>
