<template>
    <Icon :size=size :character=character :href="href"><slot></slot></Icon>
</template>

<script>
import {defineComponent, computed} from 'vue'
import {withBase, useData} from "vitepress";
import {useLocalePrefix} from "../../../script/useLocalePrefix";
import json from "../../../../../../docs/public/json/badend_list.json"
import localePageManifest from "../../../../../../docs/public/json/locale_page_manifest.json";
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
        const CHARACTER = 'badend';
        const prefix = useLocalePrefix();
        const { localeIndex } = useData();
        // 表格搜尋/排序會原地重用元件實例，href 必須用 computed 跟著 props 變動
        const href = computed(() => {
            // fork 独自: 生死簿 index 頁が無い語系 (en 等) は index 系リンクを root へ fallback。
            // 詳細ページ(badend-*)は全語系揃うため語系リンクを維持。存在判定は
            // tools/buildLocalePageManifest.js が生成する manifest (SSoT) を使う (#10)。
            // 未定義 locale は index ありとみなす。
            const hasBadendsIndex = localePageManifest[localeIndex.value]?.hasBadendsIndex ?? true;
            const indexPrefix = hasBadendsIndex ? prefix.value : '';
            if (props.no !== 0) {
                if (json.includes(props.no)) {
                    return withBase(`${prefix.value}/event/badends/badend-${props.no}`);
                }
                return withBase(`${indexPrefix}/event/badends/index#生死簿-No.${props.no}`);
            }
            // default link if no href is given
            return withBase(`${indexPrefix}/event/badends`);
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