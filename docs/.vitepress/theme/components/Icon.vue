<template>
    <span :class=getIconSizeClass(size) :style="getIconSource(character)"></span><slot></slot>
</template>

<script>
import {withBase} from "vitepress";

export default {
    props: {
        character: {
            type: String,
            default: 'badend',
            validator: function (value) {
                // Only allow specific icon types
                return [
                    'badend',
                    'girl0',
                    'default'
                ].indexOf(value) !== -1
            }
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
        }
    },
    methods: {
        getIconSource(character) {
            const CHAR_BADEND = 'badend';
            const CHAR_GIRL_0  = 'girl0';
            const SOURCE_MAP = {
                [CHAR_BADEND]: `url('${withBase(`/images/generic/icon_badend.jpg`)}')`,
                [CHAR_GIRL_0]: `url('${withBase(`/images/characters/girl_0/icon_girl0.png`)}')`
            };

            // check key exists in map
            if (SOURCE_MAP.hasOwnProperty(character)){
                return {
                    backgroundImage: SOURCE_MAP[character]
                };
            }

            // given default icon the same as TYPE_BADEND
            return {
                backgroundImage: SOURCE_MAP[CHAR_BADEND]
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
    width: 32px;
    height: 32px;
}

.medium {
    width: 100px;
    height: 100px;
}
</style>
