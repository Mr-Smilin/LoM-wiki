<template>
    <div v-show="isActive">
      <slot></slot>
    </div>
  </template>
  
  <script>
  import { inject, computed, watch } from 'vue';
  
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const registerTab = inject('registerTab');
      const selectedIndex = inject('selectedIndex');
  
      const index = registerTab({ title: props.title });
  
      const isActive = computed(() => index === selectedIndex.value);
  
      return {
        isActive,
        index,
        selectedIndex,
      };
    },
  };
  </script>
  