<template>
    <span class="sort-icon">
        {{ getSortIcon() }}
    </span>
</template>

<script setup>
const props = defineProps({
    sortKey: String,
    sortOrder: String,
    headerKey: String
})

function getSortIcon() {
    return props.sortKey === props.headerKey 
        ? (props.sortOrder === 'asc' ? '▲' : '▼') 
        : '◆'
}
</script>

<style scoped>
.sort-icon {
    margin-left: 0.5rem;
}
</style>