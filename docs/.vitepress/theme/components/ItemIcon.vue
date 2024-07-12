<template>
    <a v-if="needLink" :href="getItemPageUrl(no, type)" class="inline">
        <!--  using span to show item background -->
        <span :class=getIconBackgroundSizeClass(size) :style="getIconBackgroundSource()">
            <div :class=getIconSizeClass(size) :style="getLinkedIconSourceStyle(no, type)" ></div>
        </span><slot></slot>
    </a>
    <span v-else class="inline">
        <span :class=getIconBackgroundSizeClass(size) :style="getIconBackgroundSource()">
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
            console.log("getIconSizeClass:" + size)
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
        getIconBackgroundSizeClass(size) {
            const SIZE_SMALL = 'small';
            const SIZE_MEDIUM = 'medium';
            const BACKGROUND_SIZE_SMALL_CLASS = 'bg-small';
            const BACKGROUND_SIZE_MEDIUM_CLASS = 'bg-medium';

            let returnClass = ['background-image'];

            switch (size) {
                case SIZE_SMALL:
                    returnClass.push(BACKGROUND_SIZE_SMALL_CLASS);
                    break;
                case SIZE_MEDIUM:
                    returnClass.push(BACKGROUND_SIZE_MEDIUM_CLASS);
                    break;
                default:
                    returnClass.push(BACKGROUND_SIZE_SMALL_CLASS);
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
    z-index: 1;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: auto;
}

.background-image{
    display: inline-block;
    vertical-align: middle;
    align-content: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
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

.bg-small {
    width: 132px;
    height: 132px;
    line-height: 132px;
}

.bg-medium {
    width: 265px;
    height: 265px;
    line-height: 265px;
}

.inline{
    display: inline;
}
</style>
