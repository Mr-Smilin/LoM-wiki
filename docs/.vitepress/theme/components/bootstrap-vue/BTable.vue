<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header.key" @click="!header?.unsortable ? sort(header.key) : null">
          {{ header.label }}
          <span v-if="!header?.unsortable" class="sort-icon">
            {{ sortKey === header.key ? (sortOrder === 'asc' ? '▲' : '▼') : '◆' }}
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

const props = defineProps({
  field:{
    type: Array,
    default: () => []
  },
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
  if (props.table.length > 0 && props.field.length > 0) {
  headers.value = props.field;
  rows.value = props.table.map(trRow => {
    console.log(trRow);
    const row = {
      _attributes: trRow?._attributes || {},
      _cells: []
    }
    headers.value.forEach(header => {
      const key = header?.key;
      if(trRow[key] === undefined) return
      row._cells.push({
        content: trRow[key],
        attributes: trRow?._cellAttributes?.[key] || {}
      })
    })
    return row
  })
} else {
    const slotContent = slots.default && slots.default()
    if (slotContent && slotContent.length > 0) {
      const trElements = slotContent.filter(node => node.type === 'tr')
      if (trElements.length > 0) {
        headers.value = trElements[0].children
          .filter(node => node.type === 'td')
          .map(td => {
            return{
              key: td.children.toString().trim(),
              label: td.children.toString().trim(),
              unsortable: !!td.props?.unsortable,
            }
          })
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
    const aVal = a._cells[headers.value.findIndex(header => header?.key === sortKey.value)]?.content
    const bVal = b._cells[headers.value.findIndex(header => header?.key === sortKey.value)]?.content
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