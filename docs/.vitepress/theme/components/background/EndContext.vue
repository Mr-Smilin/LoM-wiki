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
    padding: 0px 0px 60px 13%;
    font-size: 16px;
    color: #000000;
    font-weight: 900;
    font-family: SourceHanSerifTC-BOLD;
}
@media screen and (max-width: 768px) and (min-width: 500px){
    .context {
        margin: 0 auto;
        max-width: 400px;
        padding-bottom: 60px;
        font-size: 16px;
        color: #000000;
        font-weight: 900;
        font-family: SourceHanSerifTC-BOLD;
    }
}
@media screen and (min-width: 768px){
    .context {
        padding: 0px 0px 60px 40px;
        font-size: 16px;
        color: #000000;
        font-weight: 900;
        font-family: SourceHanSerifTC-BOLD;
    }
}
</style>
