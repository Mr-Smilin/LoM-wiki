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
          <template v-if="cellData.type === 'array'">
            <template v-for="(item, index) in cellData.content" :key="index">
              <template v-if="getContentType(item) === 'br'">
                <br />
              </template>
              <template v-else-if="getContentType(item) === 'text'">
                {{ item.children }}
              </template>
              <template v-else-if="getContentType(item) === 'component'">
                <component :is="renderComponent(item)" />
              </template>
            </template>
          </template>
          <template v-else>
            <MarkdownWrapper :content="cellData.content" />
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { h,ref, computed, useSlots, onMounted } from 'vue'

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
        attributes: trRow?._cellAttributes?.[key] || {},
        type: 'text'
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
              key: td.children,
              label: td.children,
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
                content: td.children,
                attributes: td.props || {},
                type: getContentType(td.children)
              })
            })
          return row
        })
        console.log('Headers:', headers.value);
        rows.value.forEach((row, rowIndex) => {
          console.log(`Row ${rowIndex}:`);
          row._cells.forEach((cell, cellIndex) => {
            console.log(`  Cell ${cellIndex}:`);
            console.log('    Type:', cell.type);
            console.log('    Content:', cell.content);
            if (Array.isArray(cell.content)) {
              cell.content.forEach((item, itemIndex) => {
                console.log(`      Item ${itemIndex}:`, item);
              });
            }
          });
        });
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

// const sortedRows = computed(() => {
//   return [...rows.value].sort((a, b) => {
//     const aVal = a._cells[headers.value.findIndex(header => header?.key === sortKey.value)]?.content
//     const bVal = b._cells[headers.value.findIndex(header => header?.key === sortKey.value)]?.content
//     if (aVal < bVal) return sortOrder.value === 'asc' ? -1 : 1
//     if (aVal > bVal) return sortOrder.value === 'asc' ? 1 : -1
//     return 0
//   })
// })

const sortedRows = computed(() => {
  return [...rows.value].sort((a, b) => {
    const aCell = a._cells[headers.value.findIndex(header => header?.key === sortKey.value)];
    const bCell = b._cells[headers.value.findIndex(header => header?.key === sortKey.value)];
    
    const aVal = aCell?.type === 'array' 
      ? aCell.content.filter(item => getContentType(item) === 'text').map(item => item.children).join('')
      : aCell?.content;
    
    const bVal = bCell?.type === 'array' 
      ? bCell.content.filter(item => getContentType(item) === 'text').map(item => item.children).join('')
      : bCell?.content;

    if (aVal < bVal) return sortOrder.value === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortOrder.value === 'asc' ? 1 : -1;
    return 0;
  });
});

function getContentType(content) {
  if (Array.isArray(content)) {
    return 'array';
  } else if (typeof content === 'object' && content !== null) {
    if (content.type === 'br') return 'br';
    if (content.type === Symbol.for('v-txt')) return 'text';
    return 'component';
  } else if (typeof content === 'string') {
    return 'text';
  } else {
    console.log('Unknown content type:', content);
    return 'unknown';
  }
}

function renderComponent(content) {
  if (content.type === 'br') {
    return h('br');
  }
  if (content.type === Symbol.for('v-txt')) {
    return content.children;
  }

  const slots = {};
  if (content.children) {
    if (typeof content.children === 'string') {
      slots.default = () => content.children;
    } else if (Array.isArray(content.children)) {
      slots.default = () => content.children.map(child => {
        if (typeof child === 'string') {
          return child;
        } else if (typeof child === 'object' && child !== null) {
          return renderComponent(child);
        }
        return null;
      });
    } else if (typeof content.children === 'object' && content.children.default) {
      slots.default = content.children.default;
    }
  }

  return h(content.type, content.props, slots);
}
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