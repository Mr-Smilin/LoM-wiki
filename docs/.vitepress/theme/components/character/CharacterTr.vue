<template>
    <tr>
        <slot></slot>
    </tr>
</template>

<style scoped>
tr {
  margin-top: 5px;
  display: flex;
  background-color: unset;
  border: unset;
  width: 100%;
  justify-content: flex-start;
}

/* tr > div {
  width: 100%;
}

tr > div:nth-of-type(2) {
  margin-left: 10px;
} */

</style>