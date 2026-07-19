<template>
    <VPNolebaseInlineLinkPreview v-if="href" :href="href">
        <span :class=getIconSizeClass(size) :style="getIconSource(character)"></span><slot></slot>
    </VPNolebaseInlineLinkPreview>
    <span v-else><span :class=getIconSizeClass(size) :style="getIconSource(character)"></span><slot></slot></span>
</template>

<script>
import {defineComponent, computed} from 'vue'
import {withBase, useData} from "vitepress";
import {useLocalePrefix} from "../../../script/useLocalePrefix";
import localePageManifest from "../../../../../../docs/public/json/locale_page_manifest.json";

export default defineComponent({
    props: {
        character: {
            type: String,
            default: 'end'
        },
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
                if (value > 0 && value <= 54){
                    return true;
                }
                return false;
            }
        },
        href:{
            type: String,
            default: '',
        }
    },
    setup(props) {
        const CHARACTER = 'end';
        const prefix = useLocalePrefix();
        const { localeIndex } = useData();
        // 表格搜尋/排序會原地重用元件實例，href 必須用 computed 跟著 props 變動
        const href = computed(() => {
            // if given href, use it directly
            if (props.href !== '') {
                return withBase(props.href);
            }
            if (props.no !== 0) {
                // markdown から no="38" と文字列で渡るため数値化して比較
                const no = Number(props.no);
                // fork 独自: 現 locale に end-<no> ページが無ければ root へ fallback (未翻訳ページの 404 回避)。
                // 存在判定は tools/buildLocalePageManifest.js が生成する manifest (SSoT) を使う (#10)。
                const localeEnds = localePageManifest[localeIndex.value]?.ends;
                if (localeEnds && !localeEnds.includes(no)) {
                    return withBase(`/event/ends/end-${no}`);
                }
                return withBase(`${prefix.value}/event/ends/end-${no}`);
            }
            // default link if no href is given
            return withBase(`${prefix.value}/event/ends`);
        });
        return {
            size: computed(() => props.size),
            href,
            character: CHARACTER
        }
    },
    methods: {
        getIconSource() {
            return {
                backgroundImage: `url('${withBase(`/images/generic/pic_book_cover_01.webp`)}')`
            };
        },
        getIconSizeClass(iconType) {
            const SIZE_SMALL = 'small';
            const SIZE_MEDIUM = 'medium';

            let returnClass = ['icon'];

            switch (iconType) {
                case SIZE_SMALL:
                    returnClass.push(SIZE_SMALL);
                    break;
                case SIZE_MEDIUM:
                    returnClass.push(SIZE_MEDIUM);
                    break;
                default:
                    returnClass.push(SIZE_SMALL);
                    break;
            }
            return returnClass;
        }
    }
})

</script>

<style scoped>
.icon {
    /* Add dimensions to span */
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    vertical-align: middle;
}

.small {
    width: 38px;
    height: 44px;
}

.medium {
    width: 76px;
    height: 88px;
}
</style>