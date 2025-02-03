<template>
    <VPNolebaseInlineLinkPreview v-if="href" :href="href">
        <span :class=getIconSizeClass(size) :style="getIconSource(character)"></span><slot></slot>
    </VPNolebaseInlineLinkPreview>
    <span v-else><span :class=getIconSizeClass(size) :style="getIconSource(character)"></span><slot></slot></span>
</template>

<script>
import {defineComponent, toRefs} from 'vue'
import {withBase} from "vitepress";

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
                if (value < 0 && value <= 50){
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
    data() {
        return {
            size: '',
            character: '',
            href: ''
        }
    },
    setup(props) {
        const { size, no, href } = toRefs(props)
        const CHARACTER = 'end';
        if (href.value !== ''){
            return {
                size: size.value,
                href: withBase(href.value),
                character: CHARACTER
            }
        }
        // if given href, use it directly
        if (no.value !== 0){
            // TODO: if modify path of ends, modify here
            return {
                size: size.value,
                href: withBase(`/event/ends/end-${no.value}`),
                character: CHARACTER
            }
        }

        // default link if no href is given
        return {
            size: size.value,
            href: withBase(`/event/ends`),
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