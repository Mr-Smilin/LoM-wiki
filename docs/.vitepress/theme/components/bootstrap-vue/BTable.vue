<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header" @click="sort(header)">
          {{ header }}
          <span class="sort-icon">
            {{ sortKey === header ? (sortOrder === 'asc' ? '▲' : '▼') : '◆' }}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in sortedRows" :key="rowIndex" v-bind="row._attributes">
        <td 
          v-for="(cellData, cellIndex) in row._cells" 
          :key="cellIndex" 
          v-bind="cellData.attributes"
        >
          <MarkdownWrapper :content="cellData.content" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, computed, useSlots, onMounted } from 'vue'
import MarkdownWrapper from '../tools/MarkdownWrapper.vue';

const props = defineProps({
  table: {
    type: Array,
    default: () => []
  }
})

const slots = useSlots()

const headers = ref([])
const rows = ref([])

const sortKey = ref('')
const sortOrder = ref('asc')

onMounted(() => {
  if (props.table.length > 0) {
  headers.value = Object.keys(props.table[0]).filter(key => key !== '_attributes' && key !== '_cellAttributes')
  rows.value = props.table.map(row => ({
    ...row,
    _attributes: row._attributes || {},
    _cellAttributes: row._cellAttributes || {}
  }))
} else {
    const slotContent = slots.default && slots.default()
    if (slotContent && slotContent.length > 0) {
      const trElements = slotContent.filter(node => node.type === 'tr')
      if (trElements.length > 0) {
        headers.value = trElements[0].children
          .filter(node => node.type === 'td')
          .map(td => td.children.toString().trim())
        rows.value = trElements.slice(1).map(tr => {
          const row = {
            _attributes: tr.props || {},
            _cells: []
          }
          tr.children
            .filter(node => node.type === 'td')
            .forEach((td) => {
              row._cells.push({
                content: td.children.toString().trim(),
                attributes: td.props || {}
              })
            })
          return row
        })
      }
    }
  }
})

const sort = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

const sortedRows = computed(() => {
  return [...rows.value].sort((a, b) => {
    const aVal = a._cells[headers.value.indexOf(sortKey.value)]?.content
    const bVal = b._cells[headers.value.indexOf(sortKey.value)]?.content
    if (aVal < bVal) return sortOrder.value === 'asc' ? -1 : 1
    if (aVal > bVal) return sortOrder.value === 'asc' ? 1 : -1
    return 0
  })
})
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
</style>