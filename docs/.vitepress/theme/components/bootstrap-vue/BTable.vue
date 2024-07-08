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
      <tr v-for="(row, rowIndex) in sortedRows" :key="rowIndex">
        <td v-for="header in headers" :key="header">{{ row[header] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, computed, useSlots, onMounted } from 'vue'

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
    headers.value = Object.keys(props.table[0])
    rows.value = props.table
  } else {
    const slotContent = slots.default && slots.default()
    if (slotContent && slotContent.length > 0) {
      const trElements = slotContent.filter(node => node.type === 'tr')
      if (trElements.length > 0) {
        headers.value = trElements[0].children
          .filter(node => node.type === 'td')
          .map(td => td.children.toString().trim())
        rows.value = trElements.slice(1).map(tr => {
          const row = {}
          tr.children
            .filter(node => node.type === 'td')
            .forEach((td, index) => {
              row[headers.value[index]] = td.children.toString().trim()
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
    const aVal = a[sortKey.value]
    const bVal = b[sortKey.value]
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