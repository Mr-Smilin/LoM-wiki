<template>
    <div :class=getContextClass()><slot></slot>{{context}}</div>
</template>

<script>
export default {
    props: {
        context: {
            type: String,
            default: '',
        },
    },
    methods: {
        getContextClass() {
            return ['context'];
        }
    }
};
</script>

<style scoped>
.context {
    padding: 0px 0px 60px 40px;
    font-size: 16px;
    color: #000000;
    font-family: inherit;
}
</style>
