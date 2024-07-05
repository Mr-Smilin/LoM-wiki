<template>
    <Icon :size=size :character=character><slot></slot></Icon>
</template>

<script>
import {defineComponent, toRefs} from 'vue'

export default defineComponent({
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
        }
    },
    data() {
        return {
            size: '',
            character: ''
        }
    },
    setup(props) {
        const { size } = toRefs(props)

        return {
            size: size.value,
            character: 'badend'
        }
    }
})

</script>

<style scoped>

</style>