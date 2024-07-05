<template>
    <span :class=getIconClass(type) :style="getIconSource(character)"></span><slot></slot>
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
        type: {
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
            const TYPE_BADEND = 'badend';
            const TYPE_GIRL0  = 'girl0';
            const SOURCE_MAP = {
                TYPE_BADEND: `url('${withBase(`/images/generic/icon_badend.jpg`)}')`,
                TYPE_GIRL0: `url('${withBase(`/images/characters/girl_0/icon_girl0.png`)}')`
            };

            // check key exists in map
            if (SOURCE_MAP.hasOwnProperty(character)){
                return {
                    backgroundImage: SOURCE_MAP.character
                };
            }

            // given default icon the same as TYPE_BADEND
            return {
                backgroundImage: SOURCE_MAP.TYPE_BADEND
            };
        },
        getIconClass(iconType) {
            const TYPE_SMALL = 'small';
            const TYPE_MEDIUM = 'medium';

            let returnClass = ['icon'];

            switch (iconType) {
                case TYPE_SMALL:
                    returnClass.push(TYPE_SMALL);
                    break;
                case TYPE_MEDIUM:
                    returnClass.push(TYPE_MEDIUM);
                    break;
                default:
                    returnClass.push(TYPE_SMALL);
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
    vertical-align: top;
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
