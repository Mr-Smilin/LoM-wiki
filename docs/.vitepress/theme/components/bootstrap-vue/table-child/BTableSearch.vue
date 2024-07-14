<template>
  <div class="search-container">
    <div class="tag-container">
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
    <div class="search-input-wrapper">
      <button @click="toggleSearchMode" class="search-mode-toggle">
        {{ localSearchMode }}
      </button>
      <input 
        v-model="localSearchQuery"
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
</template>
  
  <script setup>
  import { ref, watch, watchEffect } from 'vue';
  
  const props = defineProps({
    rows: Array,
    searchQuery: String,
    searchMode: String,
    tags: Array
  })
  
  const emit = defineEmits(['update:searchQuery', 'update:searchMode', 'filtered-rows'])
  
  const localSearchQuery = ref(props.searchQuery || '');
  const localSearchMode = ref(props.searchMode || 'and');
  const selectedTags = ref([]);
  
  watch(localSearchQuery, (newValue) => {
    emit('update:searchQuery', newValue);
    updateSelectedTags();
    emitFilteredRows();
  });
  
  watch(localSearchMode, (newValue) => {
    emit('update:searchMode', newValue);
    emitFilteredRows();
  });
  
  watch(() => props.searchQuery, (newValue) => {
    localSearchQuery.value = newValue;
    updateSelectedTags();
  });
  
  watch(() => props.searchMode, (newValue) => {
    localSearchMode.value = newValue;
  });
  
  function toggleSearchMode() {
    localSearchMode.value = localSearchMode.value === 'and' ? 'or' : 'and';
  }
  
  function addTagToSearch(tag) {
    if (!selectedTags.value.includes(tag.text)) {
      selectedTags.value.push(tag.text);
      localSearchQuery.value = selectedTags.value.join(' ');
    }
  }
  
  function removeTag(tag) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag);
    localSearchQuery.value = selectedTags.value.join(' ');
  }
  
  function updateSelectedTags() {
    selectedTags.value = localSearchQuery.value.split(' ').filter(t => t.trim() !== '');
  }
  
  function emitFilteredRows() {
    const filteredRows = filterRows(props.rows);
    emit('filtered-rows', filteredRows);
  }
  
  function filterRows(rows) {
    if (!localSearchQuery.value) return rows;
  
    const keywords = localSearchQuery.value.toLowerCase().split(' ').filter(k => k);
    return rows.filter(row => 
      localSearchMode.value === 'and'
        ? keywords.every(keyword => searchInRow(row, keyword))
        : keywords.some(keyword => searchInRow(row, keyword))
    );
  }
  
  function searchInRow(row, keyword) {
    return row._cells.some(cell => searchInCell(cell, keyword));
  }
  
  function searchInCell(cell, keyword) {
    if (typeof cell.content === 'string' || (typeof cell?.type === 'symbol' && cell?.type?.description === 'v-txt')) {
      return cell.content.toLowerCase().includes(keyword);
    }
    if (Array.isArray(cell.content)) {
      return cell.content.some(item => searchInItem(item, keyword));
    }
    return false;
  }
  
  function searchInItem(item, keyword) {
    if (isTextElement(item)) {
      return String(item.children).toLowerCase().includes(keyword);
    }
    if (isComponentElement(item)) {
      return searchInComponentSlots(item.children, keyword);
    }
    return false;
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
      return content.toLowerCase().includes(keyword);
    }
    if (Array.isArray(content)) {
      return content.some(item => searchInRenderedContent(item, keyword));
    }
    if (typeof content === 'object' && content !== null) {
      if (content.children) {
        return searchInRenderedContent(content.children, keyword);
      }
      return Object.values(content).some(value => searchInRenderedContent(value, keyword));
    }
    return false;
  }
  
  function isTextElement(item) {
    return item && typeof item.type === 'symbol' && item.type.description === 'v-txt';
  }
  
  function isComponentElement(item) {
    return item && typeof item.type === 'string' || typeof item.type === 'object';
  }
  
  // 初始過濾
  watchEffect(() => {
    updateSelectedTags();
    emitFilteredRows();
  });
  
  </script>
  
  <style scoped>
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
  
  .search-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 16px;
  }
  
  .search-input-wrapper {
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 300px;
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
    min-width: 45px;
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
  
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
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
</style>