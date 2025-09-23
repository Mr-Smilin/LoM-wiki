<template>
    <div :class="getContextContainerClass()">
        <div :class=getContextClass()><slot></slot>{{context}}</div>
    </div>
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
        },
        getContextContainerClass() {
            return ['context-container'];
        }
    }
};
</script>

<style scoped>
.context {
    padding-bottom:60px;
    font-size: 10px;
    color: #000000;
    font-weight: 800;
    white-space: pre-line;
    line-height: 1.4em;
}
.context-container{
    display: flex;
    justify-content: center;
}
@media screen and (max-width: 768px) and (min-width: 400px){
    .context {
        margin: 0 auto;
        max-width: 400px;
        padding-bottom: 60px;
        font-size: 11px;
        color: #000000;
        font-weight: 800;
        white-space: pre-line;
        line-height: 1.4em;
    }
}
@media screen and (min-width: 768px){
    .context {
        padding-bottom:60px;
        font-size: 12px;
        color: #000000;
        font-weight: 800;
        white-space: pre-line;
        line-height: 1.4em;
    }
}
</style>
