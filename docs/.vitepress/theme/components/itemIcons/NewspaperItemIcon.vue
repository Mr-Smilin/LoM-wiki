<template>
    <ItemIcon :size="size" :no="no" :needLink="needLink" :type="`newspaper`"><slot></slot></ItemIcon>
</template>

<script>
import ItemIcon from "../ItemIcon.vue";

export default {
    components: {ItemIcon},
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
                //string match 01, 02, ...10, 11, 12 return true
                return string.match("/^0[1-9]|1[0-2]$/");
            }
        },
        needLink: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
        }
    }
};
</script>

<style scoped>
</style>
