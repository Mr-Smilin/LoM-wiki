<template>
    <span :class=getIconBackgroundClass(size)>
        <span :class=getIconSizeClass(size) :style="getIconSource(mood)"></span>
    </span><slot></slot>
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
        mood: {
            type: String,
            default: 'normal',
            validator: value => ['high', 'normal', 'low', 'good', 'bad'].includes(value)
        },
    },
    methods: {
        getIconSource(mood) {
            const MOOD_HIGH = 'high';
            const MOOD_NORMAL = 'normal';
            const MOOD_LOW = 'low';
            const MOOD_GOOD = 'good';
            const MOOD_BAD = 'bad';
            const FACE_BAD = 'bad';
            const FACE_GOOD = 'good';
            const FACE_NORMAL = 'normal';


            const moodMap = {
                [MOOD_HIGH]: FACE_GOOD,
                [MOOD_NORMAL]: FACE_NORMAL,
                [MOOD_LOW]: FACE_BAD,
                [MOOD_GOOD]: FACE_GOOD,
                [MOOD_BAD]: FACE_BAD,
            }
            let face = moodMap[mood];
            return {
                backgroundImage: `url('${withBase(`/images/generic/mood_icon/icon_face_${face}.png`)}')`,
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
        getIconBackgroundClass(size){
            const SIZE_SMALL = 'small';
            const SIZE_MEDIUM = 'medium';
            const SIZE_SMALL_CLASS = 'small';
            const SIZE_MEDIUM_CLASS = 'medium';

            let returnClass = ['background'];

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

.background{
    display: inline-block;
    vertical-align: middle;
    align-content: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: var(--vp-backdrop-bg-color);
    z-index: -1;
}

.small {
    width: 38px;
    height: 38px;
}

.medium {
    width: 76px;
    height: 76px;
}
</style>
