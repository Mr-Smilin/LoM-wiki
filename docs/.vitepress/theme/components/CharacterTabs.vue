<template>
    <div class="tabs-container">
      <div :class="['tabs', tabsPosition]">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: selectedIndex === index }"
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
  import { ref, provide, computed } from 'vue';
  
  export default {
    props: {
      position: {
        type: String,
        default: 'top', // 'top' or 'bottom'
        validator: value => ['top', 'bottom'].includes(value)
      }
    },
    setup(props) {
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
        tabsPosition: computed(() => props.position === 'bottom' ? 'tabs-bottom' : 'tabs-top')
      };
    }
  };
  </script>
  
  <style scoped>
  .tabs-container {
    max-width: 100%;
    height: 700px;
    overflow: hidden;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .tabs-top {
    flex-direction: column-reverse;
  }
  
  .tabs-bottom {
    flex-direction: column;
  }
  
  .tab-title {
    flex: 1;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s, border-bottom 0.3s;
  }
  
  .tab-title.active {
    border-bottom: 2px solid #42b983;
    background-color: var(--vp-c-gray-1);
  }
  
  .tab-title:hover {
    background-color: var(--vp-c-gray-2);
  }
  
  .tab-content {
    position: relative;
    height: 100%;
  }
  </style>
  