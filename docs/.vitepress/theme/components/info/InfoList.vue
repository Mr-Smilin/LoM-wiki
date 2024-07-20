<template>
  <div :class="['floating-div', position]">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  position: {
    type: String,
    default: 'right',
    validator: value => ['left', 'right', 'none'].includes(value)
  }
});
</script>

<style scoped>
.floating-div {
  box-sizing: border-box;
  height: auto; 
  word-break: break-all;
  margin-top: 20px;
  max-height: 500px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 1;
}


@media screen and (min-width: 768px) {
  .floating-div {
    width: 33.33%; 
    min-width: 150px;  
    max-width: 300px;  
  }
  
  .floating-div.right {
    float: right;
    margin-left: 20px;
  }

  .floating-div.left {
    float: left;
    margin-right: 20px;
  }

  .floating-div.none {
    width: 100%;
    max-width: none;
  }
}
</style>