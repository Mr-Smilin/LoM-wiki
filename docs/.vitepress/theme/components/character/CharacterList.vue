<!--
  人物列表（people/characters/index.md）：可切換「圖案」（半身卡片）與「列表」（小頭像＋姓名＋歸屬的表格）。

  用法：照 BTable 的寫法放 <tr><td>，第一列是表頭，之後一人一列，三格依序是
    姓名：[[人物頁]]，別名寫在 <br> 後面（整格要包 <MarkdownWrapper> 才能放 <br>）
    歸屬：多個用 <br> 分行
    頭像：/images/avatars/<人物頁檔名>.webp；沒有立繪就留空，顯示灰色剪影
  groups 是陣營按鈕的分組：[{ name: '六大派', tags: ['嵩山派', …] }, …]，點按鈕等於把那個詞加進搜尋。
    按鈕上的字跟要搜的詞不同時寫成 { text: '可攻略', query: '可結緣女角(完整)' }（query 不能有空格）。

  頭像是半身小圖（240×320，眼睛在由上往下 35% 處），列表的圓頭像用 CSS 從同一張圖框出頭部，不另外存圖。
  搜尋：空格分隔多個詞，符合任一個就列出（比對姓名、別名、歸屬）。
-->
<template>
  <div class="ch-list">
    <div class="ch-list-search">
      <input
        v-model="query"
        type="search"
        class="ch-list-input"
        :placeholder="t.placeholder"
        :aria-label="t.placeholder"
        autocomplete="off"
      />
      <button
        v-if="groups.length"
        type="button"
        class="ch-list-facbtn"
        :aria-expanded="String(showGroups)"
        @click="showGroups = !showGroups"
      >{{ t.factions }} ▾</button>
    </div>

    <div v-if="groups.length" v-show="showGroups" class="ch-list-groups">
      <div v-for="group in tagGroups" :key="group.name" class="ch-list-group">
        <span class="ch-list-group-name">{{ group.name }}</span>
        <div class="ch-list-tags">
          <button
            v-for="tag in group.tags"
            :key="tag.query"
            type="button"
            class="ch-list-tag"
            :aria-pressed="String(terms.includes(tag.query))"
            @click="toggleTag(tag.query)"
          >{{ tag.text }}</button>
        </div>
      </div>
    </div>

    <div class="ch-list-bar">
      <span class="ch-list-count">{{ terms.length ? t.found(shownRows.length) : t.total(rows.length) }}</span>
      <div class="ch-list-view" role="group" :aria-label="t.view">
        <button type="button" :aria-pressed="String(view === 'card')" @click="setView('card')">{{ t.card }}</button>
        <button type="button" :aria-pressed="String(view === 'table')" @click="setView('table')">{{ t.table }}</button>
      </div>
    </div>

    <div v-if="view === 'card'" class="ch-list-cards">
      <component
        :is="row.href ? 'a' : 'span'"
        v-for="row in shownRows"
        :key="row.id"
        class="ch-list-card"
        :href="row.href || undefined"
        :title="row.name"
      >
        <span class="ch-list-pic">
          <img v-if="row.avatar" :src="row.avatar" alt="" loading="lazy" decoding="async" />
          <svg v-else class="ch-list-noav" viewBox="0 0 75 100" aria-hidden="true">
            <circle cx="37.5" cy="34" r="17" />
            <path d="M4 100c0-27 14.5-44 33.5-44S71 73 71 100z" />
          </svg>
        </span>
        <span class="ch-list-name">{{ row.name }}</span>
      </component>
    </div>

    <table v-else class="ch-list-table">
      <thead>
        <tr>
          <th class="ch-list-avcol"><span class="ch-list-sr">{{ headers[2] }}</span></th>
          <th v-for="(key, i) in ['name', 'factions']" :key="key">
            <button type="button" class="ch-list-sort" @click="toggleSort(key)">
              {{ headers[i] }}<BTableSortIcon :sort-key="sortKey" :sort-order="sortOrder" :header-key="key" />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in shownRows" :key="row.id">
          <td class="ch-list-avcol">
            <span class="ch-list-face">
              <img v-if="row.avatar" :src="row.avatar" alt="" loading="lazy" decoding="async" />
              <svg v-else class="ch-list-noav" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="44" r="22" />
                <path d="M10 100c0-20 18-31 40-31s40 11 40 31z" />
              </svg>
            </span>
          </td>
          <td>
            <WikiLink v-if="row.link" :text="row.link" />
            <template v-else>{{ row.name }}</template>
            <template v-if="row.alias"><br /><span class="ch-list-alias">{{ row.alias }}</span></template>
          </td>
          <td>
            <template v-for="(line, i) in row.factionLines" :key="i"><br v-if="i" />{{ line }}</template>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="rows.length && !shownRows.length" class="ch-list-empty">{{ t.empty }}</p>
  </div>
</template>

<script setup>
import { ref, computed, useSlots, onMounted, shallowRef } from 'vue'
import { useData, withBase } from 'vitepress'
import wikiLinkIndex from '../../script/wikiLinkIndex'
import { stripMarkdown } from '../../script/markdownText.js'
import BTableSortIcon from '../bootstrap-vue/table-child/BTableSortIcon.vue'

const props = defineProps({
  groups: { type: Array, default: () => [] }
})

const slots = useSlots()
const { localeIndex } = useData()
const hans = computed(() => localeIndex.value === 'zh-hans')

// 元件自己的字跟著語系（簡中頁是建置時從繁中轉的，元件裡的字不會被轉到）
const t = computed(() => hans.value
  ? { placeholder: '搜索名字或阵营', factions: '阵营', view: '显示方式', card: '图案', table: '列表',
      total: n => `共 ${n} 人`, found: n => `找到 ${n} 人`, empty: '找不到符合的人物。' }
  : { placeholder: '搜尋名字或陣營', factions: '陣營', view: '顯示方式', card: '圖案', table: '列表',
      total: n => `共 ${n} 人`, found: n => `找到 ${n} 人`, empty: '找不到符合的人物。' })

const headers = ref([])
const rows = shallowRef([])
const query = ref('')
const showGroups = ref(false)

//#region 讀 slot 裡的表格
// 跟 BTable 一樣在掛載後才讀：MarkdownWrapper 包住的格子要呼叫 slot 才拿得到字
onMounted(() => {
  const trs = (slots.default?.() || []).filter(node => node.type === 'tr')
  if (!trs.length) return
  headers.value = cellsOf(trs[0]).map(td => toText(td.children).trim())
  rows.value = trs.slice(1).map((tr, id) => parseRow(cellsOf(tr), id))
  restoreView()
})

function cellsOf(tr) {
  return (Array.isArray(tr.children) ? tr.children : []).filter(node => node.type === 'td')
}

// 把格子的內容（字串、文字節點、<br>、MarkdownWrapper 之類的元件）攤平成純文字，<br> 換成換行
function toText(content) {
  if (content === null || content === undefined) return ''
  if (typeof content === 'string') return content
  if (Array.isArray(content)) return content.map(toText).join('')
  if (typeof content !== 'object') return ''
  if (content.type === 'br') return '\n'
  if (typeof content.children === 'string') return content.children
  if (Array.isArray(content.children)) return toText(content.children)
  if (content.children && typeof content.children === 'object') {
    const slot = content.children.default
    return typeof slot === 'function' ? toText(slot()) : toText(slot)
  }
  return ''
}

const lines = text => text.split('\n').map(s => s.trim()).filter(Boolean)

function parseRow(cells, id) {
  const [nameLine = '', ...aliasLines] = lines(toText(cells[0]?.children))
  const factionLines = lines(toText(cells[1]?.children))
  const avatar = toText(cells[2]?.children).trim()
  // [[頁面]] 或 [[頁面|顯示文字]]
  const m = nameLine.match(/\[\[([^\]]+)\]\]/)
  const link = m ? m[1] : ''
  const [page, shown] = link.split('|')
  const name = stripMarkdown(shown || page || nameLine)
  const alias = aliasLines.join(' ')
  return {
    id,
    name,
    alias,
    link,
    href: link ? pageHref(page.split('#')[0]) : '',
    factionLines,
    factions: factionLines.join(' '),
    avatar: avatar ? withBase(avatar) : '',
    haystack: stripMarkdown([name, alias, ...factionLines].join(' ')).toLowerCase()
  }
}

// 跟 WikiLink 同一套：先找目前語系的頁，沒有就退回繁中
function pageHref(page) {
  const entry = wikiLinkIndex[page]
  if (!entry) return ''
  const path = entry[localeIndex.value] ?? entry.root ?? Object.values(entry)[0]
  return withBase(`/${path}`)
}
//#endregion

//#region 搜尋：空格分隔，符合任一個詞就列出
const terms = computed(() => query.value.split(/\s+/).filter(Boolean))

// 按鈕可以只寫一個詞，也可以寫 { text, query }（顯示的字與搜的詞不同）
const tagGroups = computed(() => props.groups.map(group => ({
  name: group.name,
  tags: (group.tags || []).map(tag => typeof tag === 'string'
    ? { text: tag, query: tag }
    : { text: tag.text, query: tag.query || tag.text })
})))

function toggleTag(tag) {
  const list = [...terms.value]
  const at = list.indexOf(tag)
  if (at < 0) list.push(tag)
  else list.splice(at, 1)
  query.value = list.join(' ')
}

const filteredRows = computed(() => {
  const words = terms.value.map(w => w.toLowerCase())
  if (!words.length) return rows.value
  return rows.value.filter(row => words.some(w => row.haystack.includes(w)))
})
//#endregion

//#region 列表的排序：點一下由少到多，再點反過來，第三下回到原本的順序
const sortKey = ref('')
const sortOrder = ref('asc')
// 繁中照筆畫、簡中照拼音
const collator = computed(() => new Intl.Collator(hans.value ? 'zh-Hans-CN-u-co-pinyin' : 'zh-Hant-TW-u-co-stroke', { numeric: true }))

function toggleSort(key) {
  if (sortKey.value !== key) {
    sortKey.value = key
    sortOrder.value = 'asc'
  } else if (sortOrder.value === 'asc') {
    sortOrder.value = 'desc'
  } else {
    sortKey.value = ''
    sortOrder.value = 'asc'
  }
}

const shownRows = computed(() => {
  const list = filteredRows.value
  if (view.value !== 'table' || !sortKey.value) return list
  const dir = sortOrder.value === 'asc' ? 1 : -1
  return [...list].sort((a, b) => dir * collator.value.compare(a[sortKey.value], b[sortKey.value]) || a.id - b.id)
})
//#endregion

//#region 圖案／列表：記在瀏覽器裡，下次來還是同一種
const VIEW_KEY = 'lom-wiki-character-list-view'
const view = ref('card')

function setView(v) {
  view.value = v
  try { localStorage.setItem(VIEW_KEY, v) } catch (e) { /* 無痕模式之類存不了就算了 */ }
}

function restoreView() {
  try { if (localStorage.getItem(VIEW_KEY) === 'table') view.value = 'table' } catch (e) { /* 讀不到就用預設 */ }
}
//#endregion
</script>

<style scoped>
.ch-list-search {
  display: flex;
  gap: 8px;
  max-width: 360px;
  margin-top: 16px;
}

.ch-list-input {
  flex: 1;
  min-width: 0;
  padding: 8px;
  font-size: 16px;
  border: 1px solid var(--vp-input-border-color);
  border-radius: 4px;
  transition: border-color 0.25s;
}

.ch-list-input:hover,
.ch-list-input:focus {
  border-color: var(--vp-c-brand-1);
}

.ch-list-facbtn {
  padding: 0 12px;
  font-size: 14px;
  white-space: nowrap;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.ch-list-facbtn[aria-expanded="true"] {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* 陣營按鈕：桌機組名在左，手機組名在上 */
.ch-list-groups {
  display: grid;
  gap: 8px;
  margin-top: 10px;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.ch-list-group {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 4px;
}

.ch-list-group-name {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.ch-list-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.ch-list-tag {
  padding: 2px 8px;
  font-size: 14px;
  border-radius: 4px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background-color 0.2s;
}

.ch-list-tag:hover,
.ch-list-tag[aria-pressed="true"] {
  background-color: var(--vp-c-brand-soft);
}

.ch-list-tag[aria-pressed="true"] {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

@media (min-width: 640px) {
  .ch-list-group {
    grid-template-columns: 5.5em minmax(0, 1fr);
    gap: 6px;
  }

  .ch-list-group-name {
    padding-top: 3px;
  }
}

.ch-list-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 12px 0 14px;
}

.ch-list-count {
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}

.ch-list-view {
  display: inline-flex;
  flex: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  overflow: hidden;
}

.ch-list-view button {
  padding: 3px 12px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  cursor: pointer;
}

.ch-list-view button + button {
  border-left: 1px solid var(--vp-c-divider);
}

.ch-list-view button[aria-pressed="true"] {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

/* 圖案：半身卡片 */
.ch-list-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px 10px;
}

.ch-list-card {
  min-width: 0;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.ch-list-pic {
  display: block;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.15s, box-shadow 0.15s;
}

.ch-list-pic img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ch-list-name {
  display: block;
  margin-top: 6px;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}

a.ch-list-card:hover .ch-list-pic {
  transform: translateY(-2px);
  box-shadow: 0 0 0 2px var(--vp-c-brand-1);
}

a.ch-list-card:hover .ch-list-name {
  color: var(--vp-c-brand-1);
}

.ch-list-noav {
  display: block;
  width: 100%;
  height: 100%;
  fill: var(--vp-c-text-3);
}

/* 列表：表頭黏在導覽列下面（手機導覽列會捲走，黏在最上面） */
.ch-list-table {
  display: table;
  width: 100%;
  margin: 0;
  border-collapse: collapse;
}

.ch-list-table th {
  position: sticky;
  top: var(--vp-layout-top-height, 0px);
  z-index: 1;
  background-color: var(--vp-c-bg-soft);
  text-align: left;
}

@media (min-width: 960px) {
  .ch-list-table th {
    top: calc(var(--vp-layout-top-height, 0px) + var(--vp-nav-height));
  }
}

/* 框線、斑馬紋照 wiki 預設的表格 */
.ch-list-table th,
.ch-list-table td {
  padding: 8px 10px;
  vertical-align: middle;
}

.ch-list-sort {
  font-weight: bold;
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.ch-list-avcol {
  width: 56px;
  padding-right: 0 !important;
}

/* 圓頭像：從半身圖框出頭部（寬取 2/3、從 12% 高處起，眼睛落在圓的 46%） */
.ch-list-face {
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  background-color: var(--vp-c-bg-soft);
}

.ch-list-face img {
  position: absolute;
  top: -24%;
  left: -25%;
  width: 150%;
  max-width: none;
  height: auto;
}

.ch-list-alias {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.ch-list-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.ch-list-empty {
  color: var(--vp-c-text-2);
}

@media (max-width: 639px) {
  .ch-list-table th,
  .ch-list-table td {
    padding: 7px 6px;
  }

  .ch-list-avcol {
    width: 46px;
  }

  .ch-list-face {
    width: 34px;
    height: 34px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ch-list-pic {
    transition: none;
  }
}
</style>
