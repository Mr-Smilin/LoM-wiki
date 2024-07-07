<template>
    <a v-if="href" :href="href">
        <span :class=getIconSizeClass(size) :style="getIconSource(character)"></span><slot></slot>
    </a>
    <span v-else><span :class=getIconSizeClass(size) :style="getIconSource(character)"></span><slot></slot></span>
</template>

<script>
import {withBase} from "vitepress";

export default {
    props: {
        character: {
            type: String,
            default: 'badend'
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
        href: {
            type: String,
            default: '',
        }
    },
    methods: {
        getIconSource(character) {
            const CHAR_BADEND = 'badend';
            const CHAR_GIRL_0  = 'girl0';
            const CHAR_GIRL_1  = 'girl1';
            const CHAR_GIRL_2  = 'girl2';
            const CHAR_GIRL_3  = 'girl3';
            const CHAR_GIRL_4  = 'girl4';
            const CHAR_GIRL_5  = 'girl5';
            const CHAR_GIRL_6  = 'girl6';
            const CHAR_GIRL_7  = 'girl7';
            const CHAR_GIRL_8  = 'girl8';

            const SOURCE_MAP = {
                [CHAR_BADEND]: `url('${withBase(`/images/generic/icon_badend.jpg`)}')`,
                [CHAR_GIRL_0]: `url('${withBase(`/images/characters/girl_0/icon_girl0.png`)}')`,
                [CHAR_GIRL_1]: `url('${withBase(`/images/characters/girl_1/icon_girl1.png`)}')`,
                [CHAR_GIRL_2]: `url('${withBase(`/images/characters/girl_2/icon_girl2.png`)}')`,
                [CHAR_GIRL_3]: `url('${withBase(`/images/characters/girl_3/icon_girl3.png`)}')`,
                [CHAR_GIRL_4]: `url('${withBase(`/images/characters/girl_4/icon_girl4.png`)}')`,
                [CHAR_GIRL_5]: `url('${withBase(`/images/characters/girl_5/icon_girl5.png`)}')`,
                [CHAR_GIRL_6]: `url('${withBase(`/images/characters/girl_6/icon_girl6.png`)}')`,
                [CHAR_GIRL_7]: `url('${withBase(`/images/characters/girl_7/icon_girl7.png`)}')`,
                [CHAR_GIRL_8]: `url('${withBase(`/images/characters/girl_8/icon_girl8.png`)}')`
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
