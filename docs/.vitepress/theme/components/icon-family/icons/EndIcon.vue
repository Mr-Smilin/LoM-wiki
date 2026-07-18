<template>
    <VPNolebaseInlineLinkPreview v-if="href" :href="href">
        <span :class=getIconSizeClass(size) :style="getIconSource(character)"></span><slot></slot>
    </VPNolebaseInlineLinkPreview>
    <span v-else><span :class=getIconSizeClass(size) :style="getIconSource(character)"></span><slot></slot></span>
</template>

<script>
import {defineComponent, computed} from 'vue'
import {withBase} from "vitepress";
import {useLocalePath} from "../../../script/localePath";

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
        const { localeIndex, localePath } = useLocalePath();
        const CHARACTER = 'end';
        // 尚未翻譯的結局詳細頁 (連到語系路徑會 404, 改連 root 頁)。
        // TODO: 翻譯補齊後從清單移除。長期應改為建置時產生的清單 (見 #10)
        const MISSING_END_PAGES = {
            en: new Set([4, 15, 20, 38, 51, 52, 53, 54]),
        };
        // 表格搜尋/排序會原地重用元件實例，href 必須用 computed 跟著 props 變動
        const href = computed(() => {
            // if given href, use it directly
            if (props.href !== '') {
                return withBase(props.href);
            }
            if (props.no !== 0) {
                // markdown 內以 no="38" 傳入時是字串, 統一轉成數字再比對
                const no = Number(props.no);
                // TODO: if modify path of ends, modify here
                if (MISSING_END_PAGES[localeIndex.value]?.has(no)) {
                    return withBase(`/event/ends/end-${no}`);
                }
                return localePath(`/event/ends/end-${no}`);
            }
            // default link if no href is given
            return localePath(`/event/ends`);
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