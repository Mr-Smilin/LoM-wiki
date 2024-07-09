<template>
    <ItemIcon :size="size" :no="no" :needLink="needLink" :type="`book`"><slot></slot></ItemIcon>
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
                return string.match("/^{1-9}\d{3}$/");
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
