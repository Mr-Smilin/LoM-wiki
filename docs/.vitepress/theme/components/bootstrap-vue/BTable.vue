<template>
  <div class="table-container">
    <div v-if="!unsearch" class="tag-container">
      <div 
        v-for="tag in tags" 
        :key="tag.text" 
        class="tag" 
        @click="addTagToSearch(tag)"
      >
        <span v-if="tag.icon" class="tag-icon">{{ tag.icon }}</span>
        {{ tag.text }}
      </div>
    </div>
    <div v-if="!unsearch" class="search-container">
      <div class="search-input-wrapper">
        <button @click="toggleSearchMode" class="search-mode-toggle">
          {{ searchMode }}
        </button>
        <input 
          v-model="searchQuery" 
          placeholder="搜索... (多個關鍵字用空格分隔)"
          class="search-input"
        />
      </div>
      <div class="selected-tags">
        <span 
          v-for="tag in selectedTags" 
          :key="tag" 
          class="selected-tag"
        >
          {{ tag }}
          <button @click="removeTag(tag)" class="remove-tag">×</button>
        </span>
      </div>
    </div>
    <table :class="{ 'horizontal': horizontal }">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key" @click="handleSort(header)">
            <span>{{ header.label }}</span>
            <span v-if="!header.unsortable" class="sort-icon">
              {{ getSortIcon(header.key) }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredAndSortedRows" :key="row.id" v-bind="row._attributes" v-memo="[row.id, row.isSelected]">
          <td v-for="(cell, cellIndex) in row._cells" 
              :key="cellIndex" 
              v-bind="cell.attributes">
            <template v-if="cell.type === 'array'">
              <template v-for="(item, index) in cell.content" :key="index">
                <br v-if="isBreakElement(item)" />
                <template v-else-if="isTextElement(item)">{{ item.children }}</template>
                <component 
                  v-else-if="isComponentElement(item)" 
                  :is="item.type"
                  v-bind="item.props"
                >
                  <template v-for="(slotContent, slotName) in item.children" :key="slotName" v-slot:[slotName]>
                    <template v-if="typeof slotContent === 'function'">
                      <component :is="{ render: slotContent }" />
                    </template>
                    <template v-else>
                      {{ slotContent }}
                    </template>
                  </template>
                </component>
              </template>
            </template>
            <MarkdownWrapper v-else :content="cell.content" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, useSlots, onMounted, shallowRef, watchEffect  } from 'vue'

const props = defineProps({
  field: { type: Array, default: () => [] },
  table: { type: Array, default: () => [] },
  horizontal: { type: Boolean, default: false },
  unsearch: { type: Boolean, default: false },
  tags: { type: Array, default: () => []},
  searchMode: { type: String, default: 'and' }
})

// debug 工具
// let updateCount = 0
// let startTime

const slots = useSlots()
const headers = ref([])
const rows = shallowRef([])

// 排序
const sortKey = ref('')
const sortOrder = ref('asc')

// 查詢
const searchQuery = ref('')
const searchMode = ref(props.searchMode.toLowerCase())

// 標籤
const selectedTags = ref([])

onMounted(() => {
  // startTime = performance.now()
  // 如果未來有子組件需要動態改變，這些搬到 watchEffect 試試
  if (props.table.length && props.field.length) {
    initializeFromProps()
  } else if (slots.default) {
    initializeFromSlots()
  }
})

watchEffect(() => {
  updateTag()
})

// onUpdated(() => {
//   updateCount++
//   console.log(`Component updated ${updateCount} times`)
// })

// onUnmounted(() => {
//   const endTime = performance.now()
//   console.log(`Component lived for ${endTime - startTime}ms`)
// })

//#region 初始化
function initializeFromProps() {
  headers.value = props.field
  rows.value = props.table.map(trRow => ({
    _attributes: trRow._attributes || {},
    _cells: headers.value.map(header => ({
      content: trRow[header.key],
      attributes: trRow._cellAttributes?.[header.key] || {},
      type: 'text'
    })).filter(cell => cell.content !== undefined)
  }))
}

function initializeFromSlots() {
  const slotContent = slots.default?.()
  if (!slotContent?.length) return

  const trElements = slotContent.filter(node => node.type === 'tr')
  if (trElements.length === 0) return

  headers.value = trElements[0].children
    .filter(node => node.type === 'td')
    .map(td => ({
      key: td.children,
      label: td.children,
      unsortable: !!td.props?.unsortable,
    }))

  rows.value = trElements.slice(1).map(tr => ({
    _attributes: tr.props || {},
    _cells: tr.children
      .filter(node => node.type === 'td')
      .map(td => ({
        content: td.children,
        attributes: td.props || {},
        type: getContentType(td.children)
      }))
  }))
}
//#endregion

//#region 解析資料
function getContentType(content) {
  if (Array.isArray(content)) return 'array';
  if (!content || typeof content !== 'object') return 'text';
  if (content.type === 'br') return 'br';
  if (typeof content.type === 'symbol' && content.type.description === 'v-txt') return 'text';
  if (typeof content.type === 'string' || typeof content.type === 'object') return 'component';
  return 'unknown';
}

function isBreakElement(item) {
  return item && item.type === 'br';
}

function isTextElement(item) {
  return item && typeof item.type === 'symbol' && item.type.description === 'v-txt';
}

function isComponentElement(item) {
  return item && typeof item.type === 'string' || typeof item.type === 'object';
}
//#endregion

//#region 排序
function handleSort(header) {
  if (header.unsortable) return
  if (sortKey.value === header.key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = header.key
    sortOrder.value = 'asc'
  }
}

function getSortIcon(key) {
  return sortKey.value === key 
    ? (sortOrder.value === 'asc' ? '▲' : '▼') 
    : '◆'
}

const sortedRows = computed(() => {
  if (!sortKey.value) return rows.value;
  
  const headerIndex = headers.value.findIndex(header => header.key === sortKey.value);
  const compareFunction = (a, b) => {
    const aVal = getCellSortValue(a._cells[headerIndex]);
    const bVal = getCellSortValue(b._cells[headerIndex]);
    return sortOrder.value === 'asc' 
      ? aVal.localeCompare(bVal, undefined, {numeric: true, sensitivity: 'base'})
      : bVal.localeCompare(aVal, undefined, {numeric: true, sensitivity: 'base'});
  };
  
  return [...rows.value].sort(compareFunction);
});

function getCellSortValue(cell) {
  if (cell?.type === 'array') {
    return cell?.content
      .filter(item => item.type === Symbol.for('v-txt'))
      .map(item => item.children)
      .join('')
  }
  return String(cell?.content)
}
//#endregion

//#region 搜尋框
const filteredAndSortedRows = computed(() => {
  let result = sortedRows.value

  if (searchQuery.value) {
    const keywords = searchQuery.value.toLowerCase().split(' ').filter(k => k)
    result = result.filter(row => 
    searchMode.value === 'and'
        ? keywords.every(keyword => searchInRow(row, keyword))
        : keywords.some(keyword => searchInRow(row, keyword))
    )
  }

  return result
})

function searchInRow(row, keyword) {
  return row._cells.some(cell => searchInCell(cell, keyword))
}

function searchInCell(cell, keyword) {
  if (typeof cell.content === 'string' || (typeof cell?.type === 'symbol' && cell?.type?.description === 'v-txt')) {
    return cell.content.toLowerCase().includes(keyword)
  }
  if (Array.isArray(cell.content)) {
    return cell.content.some(item => searchInItem(item, keyword))
  }
  return false
}

function searchInItem(item, keyword) {
  if (isTextElement(item)) {
    return String(item.children).toLowerCase().includes(keyword)
  }
  if (isComponentElement(item)) {
    return searchInComponentSlots(item.children, keyword)
  }
  return false
}

function searchInComponentSlots(slots, keyword) {
  if (typeof slots === 'string' || (typeof slots?.type === 'symbol' && slots?.type?.description === 'v-txt')) {
    return slots.toLowerCase().includes(keyword);
  }
  if (typeof slots === 'object' && slots !== null) {
    return Object.values(slots).some(slotContent => 
      (typeof slotContent === 'string' && slotContent.toLowerCase().includes(keyword)) ||
      (typeof slotContent === 'function' && searchInRenderedContent(slotContent(), keyword))
    );
  }
  return false;
}

function searchInRenderedContent(content, keyword) {
  if (typeof content === 'string') {
    return content.toLowerCase().includes(keyword)
  }
  if (Array.isArray(content)) {
    return content.some(item => searchInRenderedContent(item, keyword))
  }
  if (typeof content === 'object' && content !== null) {
    if (content.children) {
      return searchInRenderedContent(content.children, keyword)
    }
    return Object.values(content).some(value => searchInRenderedContent(value, keyword))
  }
  return false
}

function toggleSearchMode() {
  searchMode.value = searchMode.value === 'and' ? 'or' : 'and'
}
//#endregion

//#region 標籤
function addTagToSearch(tag) {
  if (!selectedTags.value.includes(tag.text)) {
    selectedTags.value.push(tag.text)
    searchQuery.value = selectedTags.value.join(' ')
  }
}

function removeTag(tag) {
  selectedTags.value = selectedTags.value.filter(t => t !== tag)
  searchQuery.value = selectedTags.value.join(' ')
}

function updateTag(){
  selectedTags.value = searchQuery.value.split(' ').filter(t => t.trim() !== '')
}
//#endregion

</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.5rem;
  text-align: left;
}

th {
  font-weight: bold;
  cursor: pointer;
}

.sort-icon {
  margin-left: 0.5rem;
}

.search-input {
  flex-grow: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid var(--vp-input-border-color);
  border-left: none;
  border-radius: 0 4px 4px 0;
  box-sizing: border-box;
  transition: border-color 0.25s;
}

.search-input:hover, .search-input:focus {
  border-color: var(--vp-c-brand-1);
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tag {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
}

.tag:hover {
  background-color: var(--vp-c-brand-soft);
}

.tag-icon {
  margin-right: 4px;
}

.search-container {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  margin-top: 16px;
}

.search-input-wrapper {
  display: flex;
  align-items: stretch;
  width: 100%;
}

.search-input {
  flex-grow: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid var(--vp-input-border-color);
  border-left: none;
  border-radius: 0 4px 4px 0;
  box-sizing: border-box;
  transition: border-color 0.25s;
}

.search-input:hover, .search-input:focus {
  border-color: var(--vp-c-brand-1);
}

.search-mode-toggle {
  padding: 0 8px;
  background-color: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.search-mode-toggle:hover {
  background-color: var(--vp-c-brand-2);
}

.selected-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
  width: 100%;
}

.selected-tag {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-text-1);
  padding: 2px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.remove-tag {
  background: none;
  border: none;
  color: var(--vp-c-text-1);
  margin-left: 4px;
  cursor: pointer;
  font-size: 14px;
  padding: 0 2px;
}

.remove-tag:hover {
  color: var(--vp-c-danger);
}

@media screen and (min-width: 768px) {
  table.horizontal {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    width: 100%;
    max-width: 80vw;
    overflow-x: auto;
  }

  table.horizontal thead,
  table.horizontal tbody {
    display: contents;
  }

  table.horizontal tr {
    display: grid;
    grid-template-rows: auto 1fr;
  }

  table.horizontal th,
  table.horizontal td {
    padding: 10px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  table.horizontal th {
    font-weight: bold;
    justify-content: center;
  }
}
</style>