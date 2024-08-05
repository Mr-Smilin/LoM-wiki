<template>
    <thead :class="{ 'sticky': sticky }">
        <tr>
            <th v-for="header in headers" :key="header.key" @click="handleSort(header)">
                <MarkdownWrapper :content="header.content" />
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
@media screen and (min-width: 768px) {
    table.horizontal tr {
        display: grid;
        grid-template-rows: auto 1fr;
    }

    table.horizontal th{
        padding: 10px;
        display: flex;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        justify-content: center;
    }
}
</style>