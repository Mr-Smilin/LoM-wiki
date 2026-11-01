<template>
    <div class="title">{{ title }}</div>
</template>

<script>
// 生死簿死法名稱 (直書大字), 尺寸變數由 BadendBackground 提供
export default {
    props: {
        title: { type: String, default: "" },
    },
};
</script>

<style scoped>
.title {
    font-size: var(--title, 35px);
    line-height: 1.1;
    letter-spacing: 0.16em;
    white-space: pre-line;
    max-inline-size: var(--title-max, none);
}
</style>
