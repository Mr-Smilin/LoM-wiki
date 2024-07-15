<template>
    <thead :class="{ 'sticky': sticky }">
        <tr>
            <th v-for="header in headers" :key="header.key" @click="handleSort(header)">
                <span>{{ header.label }}</span>
                <BTableSortIcon 
                v-if="!header.unsortable"
                :sort-key="sortKey"
                :sort-order="sortOrder"
                :header-key="header.key"
                />
            </th>
        </tr>
    </thead>
</template>

<script setup>
import BTableSortIcon from './BTableSortIcon.vue'

const props = defineProps({
    headers: Array,
    sortKey: String,
    sortOrder: String,
    sticky: Boolean
})

const emit = defineEmits(['sort'])

function handleSort(header) {
    if (!header.unsortable) {
        emit('sort', header)
    }
}
</script>

<style scoped>
.sticky {
  position: sticky;
  top: -1px;
  z-index: 1;
}
</style>