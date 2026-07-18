<template>
    <Icon :size=size :character=character :href="href"><slot></slot></Icon>
</template>

<script>
import {defineComponent, computed} from 'vue'
import {withBase} from "vitepress";
import {useLocalePath} from "../../../script/localePath";

export default defineComponent({
    methods: {withBase},
    props: {
        size: {
            type: String,
            default: 'small',
            validator: function (value) {
                // Only allow specific icon types
                return [
                    'small',
                    'medium'
                ].indexOf(value) !== -1
            }
        },
        href: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            size: '',
            character: ''
        }
    },
    setup(props) {
        const { localePath } = useLocalePath();
        const CHARACTER = 'girl0';
        // 表格搜尋/排序會原地重用元件實例，href 必須用 computed 跟著 props 變動
        return {
            size: computed(() => props.size),
            // if given href, use it directly; default link otherwise
            href: computed(() => props.href ? withBase(props.href) : localePath(`/people/characters/${CHARACTER}`)),
            character: CHARACTER
        }
    }
})

</script>

<style scoped>

</style>