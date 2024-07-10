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
    validator: value => ['left', 'right'].includes(value)
  }
});
</script>

<style scoped>
.floating-div {
  box-sizing: border-box;
  width: 25%; 
  min-width: 150px;  
  max-width: 300px;  
  height: auto; 
  word-break: break-all;
  margin-top: 20px;
}

.floating-div.right {
  float: right;
  margin-left: 20px;
}

.floating-div.left {
  float: left;
  margin-right: 20px;
}

@media screen and (max-width: 768px) {
  .floating-div {
    width: 100%;
    float: none;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>