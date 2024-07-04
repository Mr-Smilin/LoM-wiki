<template>
    <span class="icon" :style="iconStyle(type)"></span>{{ contents }}
</template>

<script>
import {withBase} from "vitepress";

export default {
    props: {
        source: {
            type: String,
            default: 'badend',
            validator: function (value) {
                // Only allow specific icon types
                return [
                    'badend',
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
        },
        contents: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            basePath: ''
        };
    },
    methods: {
        iconStyle(iconType) {
            const TYPE_BADEND = 'badend';

            const ICON_BADEND = 'icon_badend.jpg'

            switch (iconType) {
                case TYPE_BADEND:
                case 'be':
                    return {
                        backgroundImage: `url('${withBase(`/images/generic/${ICON_BADEND}`)}')`
                    };
                default:
                    return {
                        backgroundImage: `url('${withBase(`/images/generic/${ICON_BADEND}`)}')`
                    };
            }
        }
    }
};
</script>

<style scoped>
.icon {
    /* Add dimensions to span */
    display: inline-block;
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    vertical-align: top;
}
</style>
