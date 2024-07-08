<template>
  <div :class="['floating-div',position]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'InfoList',
  props: {
    position: {
      type: String,
      default: 'right', // 'left' or 'right'
      validator: value => ['left', 'right'].includes(value)
    }
  }
}
</script>

<style scoped>
.floating-div {
  box-sizing: border-box;
  padding: 10px;
  width: 100px;
  height: 600px;
  border: solid 3px var(--vp-c-border);
  word-break: break-all;
  margin-top: 20px;
}
.floating-div.right{
  float: right;
  margin-left: 20px;
}
.floating-div.left{
  float: left;
  margin-right: 20px;
}
</style>
