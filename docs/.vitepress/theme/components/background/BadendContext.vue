<template>
    <div class="context"><slot></slot>{{ context }}</div>
</template>

<script>
// 生死簿死法描述 (直書小字, 換行 = 換列), 尺寸變數由 BadendBackground 提供
export default {
    props: {
        context: { type: String, default: "" },
    },
};
</script>

<style scoped>
.context {
    margin-block-start: calc(var(--title, 35px) * 0.19); /* 與標題列的間距 */
    font-size: var(--text, 18px);
    line-height: var(--text-lh, 24px);
    letter-spacing: 0.115em;
    white-space: pre-line;
    max-inline-size: var(--text-max, none);
}
</style>
