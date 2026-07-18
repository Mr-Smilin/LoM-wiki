<template>
    <Icon :size=size :character=character :href="href"><slot></slot></Icon>
</template>

<script>
import {defineComponent, computed} from 'vue'
import {withBase} from "vitepress";
import {useLocalePath} from "../../../script/localePath";
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
        const { localeIndex, localePath } = useLocalePath();
        const CHARACTER = 'badend';
        // 生死簿 index 頁尚未翻譯的語系 (連到語系路徑會 404, 改連 root 頁)。
        // TODO: 翻譯補齊後從清單移除。長期應改為建置時產生的清單 (見 #10)
        const LOCALES_WITHOUT_BADENDS_INDEX = new Set(['en']);
        // 表格搜尋/排序會原地重用元件實例，href 必須用 computed 跟著 props 變動
        const href = computed(() => {
            const hasIndex = !LOCALES_WITHOUT_BADENDS_INDEX.has(localeIndex.value);
            if (props.no !== 0) {
                if (json.includes(props.no)) {
                    return localePath(`/event/badends/badend-${props.no}`);
                }
                if (!hasIndex) {
                    return withBase(`/event/badends/index#生死簿-No.${props.no}`);
                }
                return localePath(`/event/badends/index#生死簿-No.${props.no}`);
            }
            // default link if no href is given
            if (!hasIndex) {
                return withBase(`/event/badends`);
            }
            return localePath(`/event/badends`);
        });
        return {
            size: computed(() => props.size),
            href,
            character: CHARACTER
        }
    }
})

</script>

<style scoped>

</style>