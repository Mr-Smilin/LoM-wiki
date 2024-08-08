<template>
  <div class="info-container">
    <div class="title" @click="toggleContent" :aria-expanded="isOpen">
      {{ title }}
      <span class="arrow" :class="{ open: isOpen }"></span>
    </div>
    <div class="content-wrapper" :style="{ height: contentHeight }">
      <div ref="content" class="content">
        <div v-for="(cell, cellIndex) in processedContent" :key="cellIndex">
          <ComponentWrapper :cell="cell" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { computed, ref, watch, nextTick, useSlots } from 'vue';

const props = defineProps({
  open: Boolean,
  title: {
    type: String,
    required: true
  }
});

const slots = useSlots();

const processedContent = computed(() => {
  if (!slots.default) return '';

  return slots.default().map(node => {
    if (!node) return '';
    return node;
  });
});

const isOpen = ref(props.open);
const content = ref(null);
const contentHeight = ref('0px');

const updateHeight = async () => {
  await nextTick();
  if (isOpen.value) {
    contentHeight.value = `${content?.value?.scrollHeight}px`;
  } else {
    contentHeight.value = '0px';
  }
};

const toggleContent = () => {
  isOpen.value = !isOpen.value;
  updateHeight();
};

watch(() => props.open, (newVal) => {
  isOpen.value = newVal;
  updateHeight();
});

updateHeight();
</script>
  
<style scoped>
.info-container {
  margin-bottom: 10px;
}

.title {
  font-weight: bold;
  cursor: pointer;
  padding: 5px;
  border: 2px solid var(--vp-c-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  border: solid var(--vp-c-green-2);
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(-135deg);
}

.content-wrapper {
  overflow: hidden;
  transition: height 0.3s ease-out;
}

.content {
  padding: 10px 5px;
  border: 1px solid var(--vp-c-divider);
  border-top: none;
  background-color: var(--vp-c-gray-1);
}
</style>