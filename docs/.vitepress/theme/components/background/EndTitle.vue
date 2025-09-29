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
    padding-bottom: 5%;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
    color: #a83232;
    font-weight: bold;
}
@media screen and (max-width: 440px){
    .title {
        position: relative;
        padding-bottom: 5%;
        margin: 0 auto;
        text-align: center;
        font-size: 22px;
        color: #a83232;
        font-weight: bold;
    }
}
</style>
