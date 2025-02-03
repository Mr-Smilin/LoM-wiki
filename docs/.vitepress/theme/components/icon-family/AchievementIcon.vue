<template>
    <a v-if="needLink" :href="getItemPageUrl(no)">
        <span :class=getIconSizeClass(size) :style="getIconSource(no)"></span><slot></slot>
    </a>
    <span v-else><span :class=getIconSizeClass(size) :style="getIconSource(no)"></span><slot></slot></span>
</template>

<script>
import {withBase} from "vitepress";

export default {
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
        no: {
            type: String,
            validator: function (string) {
                return string.match("/^[0]\d{1}|[1][1-7]$/");
            }
        },
        needLink: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        getItemPageUrl(no){
            // this requires the same format for ItemPages
            return withBase(`/event/achievements#風雲史-No.${no}`);
        },
        getIconSource(no) {
            // this requires the same image path format
            return {
                backgroundImage: `url('${withBase(`/images/generic/achievement_icon/icon_ach_300${no}.webp`)}')`,
            }
        },
        getIconSizeClass(size) {
            const SIZE_SMALL = 'small';
            const SIZE_MEDIUM = 'medium';
            const SIZE_SMALL_CLASS = 'small';
            const SIZE_MEDIUM_CLASS = 'medium';

            let returnClass = ['icon'];

            switch (size) {
                case SIZE_SMALL:
                    returnClass.push(SIZE_SMALL_CLASS);
                    break;
                case SIZE_MEDIUM:
                    returnClass.push(SIZE_MEDIUM_CLASS);
                    break;
                default:
                    returnClass.push(SIZE_SMALL_CLASS);
                    break;
            }
            return returnClass;
        },
        getLinkedIconSourceStyle(no) {
            return {
                backgroundImage: `url('${this.getIconSource(no)}')`
            };
        }
    }
};
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
    width: 75px;
    height: 75px;
}

.medium {
    width: 150px;
    height: 150px;
}
</style>
