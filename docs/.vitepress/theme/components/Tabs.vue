<template>
    <div class="tabs">
      <div class="tab-titles">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: selectedIndex.value === index }"
          @click="selectTab(index)"
          class="tab-title"
        >
          {{ tab.title }}
        </div>
      </div>
      <div class="tab-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, provide } from 'vue';
  
  export default {
    setup() {
      const selectedIndex = ref(0);
      const tabs = ref([]);
  
      function registerTab(tab) {
        tabs.value.push(tab);
        return tabs.value.length - 1;
      }
  
      function selectTab(index) {
        selectedIndex.value = index;
      }
  
      provide('registerTab', registerTab);
      provide('selectedIndex', selectedIndex);
  
      return {
        tabs,
        selectedIndex,
        selectTab,
      };
    },
  };
  </script>
  
  <style scoped>
  .tabs {
    /* border: 1px solid #ddd; */
    /* border-radius: 5px; */
    overflow: hidden;
  }
  
  .tab-titles {
    display: flex;
    /* background-color: #f5f5f5; */
  }
  
  .tab-title {
    flex: 1;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s, border-bottom 0.3s;
  }
  
  .tab-title:hover {
    background-color: var(--vp-code-block-bg);
  }
  
  .tab-title.active {
    border-bottom: 2px solid #42b983;
    /* background-color: #fff; */
  }
  
  .tab-content {
    padding: 15px;
    /* background-color: #fff; */
  }
  </style>
  