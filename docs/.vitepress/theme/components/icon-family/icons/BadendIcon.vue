<template>
    <Icon :size=size :character=character :href="href"><slot></slot></Icon>
</template>

<script>
import {defineComponent, toRefs} from 'vue'
import {withBase} from "vitepress";
import json from "../../../../../../docs/public/json/badend_list.json"
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
        },
        no:{
            type: Number,
            default: 0,
            validator: function (value) {
                // 生死簿的死亡數字為 1-105, 0為引導到該頁面最上面。
                if (value <= 0 && value <= 105){
                    return true;
                }
                return false;
            }
        }
    },
    data() {
        return {
            size: '',
            character: '',
            href: ''
        }
    },
    setup(props) {
        const { size, no,  } = toRefs(props)
        const CHARACTER = 'badend';
        // if given href, use it directly
        if (no.value !== 0){

            if (json.includes(no.value)){
                console.log("json.includes(no.value):" + json.includes(no.value));
                return {
                    size: size.value,
                    href: withBase(`/event/badends/badend-${no.value}`),
                    character: CHARACTER
                }
            }

            return {
                size: size.value,
                href: withBase(`/event/badends/index#生死簿-No.${no.value}`),
                character: CHARACTER
            }
        }

        // default link if no href is given
        return {
            size: size.value,
            href: withBase(`/event/badends`),
            character: CHARACTER
        }
    }
})

</script>

<style scoped>

</style>