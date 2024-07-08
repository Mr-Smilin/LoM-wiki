<template>
    <table>
      <thead>
        <tr>
          <th v-for="field in fields" :key="field.key" @click="sort(field.key)" :class="{ sortable: field.sortable }">
            {{ field.label || field.key }}
            <span v-if="field.sortable" class="sort-icon">
              {{ sortKey === field.key ? (sortOrder === 'asc' ? '▲' : '▼') : '◆' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in sortedItems" :key="index">
          <td v-for="field in fields" :key="field.key">
            {{ item[field.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  })
  
  const sortKey = ref('')
  const sortOrder = ref('asc')
  
  const sort = (key) => {
    if (sortKey.value === key) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortKey.value = key
      sortOrder.value = 'asc'
    }
  }
  
  const sortedItems = computed(() => {
    const s = [...props.items]
    if (sortKey.value) {
      s.sort((a, b) => {
        const aVal = a[sortKey.value]
        const bVal = b[sortKey.value]
        if (aVal < bVal) return sortOrder.value === 'asc' ? -1 : 1
        if (aVal > bVal) return sortOrder.value === 'asc' ? 1 : -1
        return 0
      })
    }
    return s
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
    border-bottom: 1px solid #e2e8f0;
  }
  
  th {
    font-weight: bold;
    background-color: #f8fafc;
  }
  
  th.sortable {
    cursor: pointer;
  }
  
  th.sortable:hover {
    background-color: #edf2f7;
  }
  
  .sort-icon {
    margin-left: 0.5rem;
  }
  </style>