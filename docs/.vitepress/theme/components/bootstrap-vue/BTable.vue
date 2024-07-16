<template>
  <div class="table-container" :class="{'sticky-header': stickyHeader}">
    <BTableSearch 
      v-if="!unsearch" 
      v-model:searchQuery="searchQuery"
      v-model:searchMode="searchMode"
      :tags="tags"
      :rows="sortedRows"
      @filtered-rows="handleFilteredRows"
    />
    <table :class="{ 'horizontal': horizontal }">
      <BTableHeader 
        :headers="headers" 
        :sort-key="sortKey"
        :sort-order="sortOrder"
        :sticky="stickyHeader"
        @sort="handleSort"
      />
      <BTableBody 
        :rows="displayedRows"
        :headers="headers"
      />
    </table>
  </div>
</template>

<script setup>
import { ref, computed, useSlots, onMounted, shallowRef, watchEffect } from 'vue'
import BTableHeader from './table-child/BTableHeader.vue'
import BTableBody from './table-child/BTableBody.vue'
import BTableSearch from './table-child/BTableSearch.vue'

const props = defineProps({
  horizontal: { type: Boolean, default: false },
  unsearch: { type: Boolean, default: false },
  tags: { type: Array, default: () => []},
  searchMode: { type: String, default: 'and' },
  stickyHeader: { type: Boolean, default: false }
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
const filteredRows = ref([])

onMounted(() => {
  // startTime = performance.now()
  initializeFromSlots()
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
function handleFilteredRows(rows) {
  filteredRows.value = rows
}

const displayedRows = computed(() => {
  return props.unsearch ? sortedRows.value : filteredRows.value
})
//#endregion

</script>

<style scoped>
.table-container {
  /* width: 100%; */
  overflow-x: auto;
}

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

@media screen and (min-width: 768px) {
  .sticky-header{
      display:flex;
      flex-direction: column;
      max-height: calc(100vh - var(--vp-nav-height));
  }

  .sticky-header table {
      overflow-y: auto;
      padding-bottom: 100px;
  }

  .sticky-header table.horizontal{
    overflow-y: unset;
    padding-bottom: 0px;
  }

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
}
</style>