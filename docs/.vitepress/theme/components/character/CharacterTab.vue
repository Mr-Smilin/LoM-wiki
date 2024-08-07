<template>
  <div v-show="isActive" class="tab-content">
    <slot></slot>
  </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  name: 'ChTab',
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const registerTab = inject('registerTab');
    const selectedIndex = inject('selectedIndex');
    const isMobile = inject('isMobile');

    const index = registerTab({ title: props.title });

    const isActive = computed(() => index === selectedIndex.value);

    return {
      isActive,
      isMobile
    };
  }
};
</script>

<style scoped>

.tab-content {
  position: relative;
  height: 60vh;
  max-height: 500px;
  min-height: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}
</style>