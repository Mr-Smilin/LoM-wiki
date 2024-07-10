<template>
    <a v-if="needLink" :href="getItemPageUrl(no, type)">
        <!--  using span to show item background -->
        <span :class=getIconSizeClass(size) :style="getIconBackgroundSource()">
            <span :class=getIconSizeClass(size) :style="getLinkedIconSourceStyle(no, type)" ></span>
        </span><slot></slot>
    </a>
    <span v-else>
        <span :class=getIconSizeClass(size) :style="getIconBackgroundSource()">
            <img :class=getIconSizeClass(size)  :src="getIconSource(no, type)">
        </span>
        <slot></slot>
    </span>
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
            type: String
        },
        needLink: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            validator: function (value) {
                // Only allow specific icon types
                return [
                    'bag',
                    'book',
                    'box',
                    'crane',
                    'draw',
                    'food',
                    'jade',
                    'letter',
                    'medicineBottle',
                    'moneyBag',
                    'newspaper',
                    'paper',
                    'special',
                    'sword',
                    'tea',
                    'toilet',
                    'toy',
                    'wine',
                    'woodSword'
                ].indexOf(value) !== -1
            },
            default: 'book',
        }
    },
    methods: {
        getItemPageUrl(no, type){
            // this requires the same format for ItemPages
            return withBase(`/${type}s/${type}_${no}`);
        },
        getIconBackgroundSource() {
            return {
                backgroundImage: `url('${withBase(`/images/generic/background/icon_item_back_3.png`)}')`
            };
        },
        getIconSource(no, type) {
            // this requires the same image path format
            return withBase(`/images/items/${type}s/item_${type}_${no}.png`);
        },
        getIconSizeClass(size) {
            const SIZE_SMALL = 'small';
            const SIZE_MEDIUM = 'medium';

            let returnClass = ['icon', 'background-image'];

            switch (size) {
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
        },
        getLinkedIconSourceStyle(no, type) {
            return {
                backgroundImage: `url('${this.getIconSource(no, type)}')`
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
    z-index: 1;
}

.background-image{
    z-index: -1;
}

.small {
    width: 100px;
    height: 100px;
}

.medium {
    width: 200px;
    height: 200px;
}
</style>
