<template>
    <Icon :size=size :character=character :href="href"><slot></slot></Icon>
</template>

<script>
import {defineComponent, toRefs} from 'vue'
import {withBase} from "vitepress";

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
        const { size, href } = toRefs(props)
        const CHARACTER = 'girl4';
        // if given href, use it directly
        if (href.value){
            return {
                size: size.value,
                href: href.value,
                character: CHARACTER
            }
        }

        // default link if no href is given
        return {
            size: size.value,
            href: withBase(`/characters/${CHARACTER}`),
            character: CHARACTER
        }
    }
})

</script>

<style scoped>

</style>