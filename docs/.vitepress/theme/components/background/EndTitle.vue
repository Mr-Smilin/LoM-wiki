<template>
    <div :class=getTitleClass()>{{title}}</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
    },
    methods: {
        getTitleClass() {
            return ['title'];
        },
    }
};
</script>

<style scoped>
.title {
    position: relative;
    padding: 10px 0px 15px 0px;
    margin: 0 auto;
    text-align: center;
    font-size: 26px;
    color: #a83232;
    font-weight: bold;
    font-family: SourceHanSerifTC-BOLD;
}
</style>
