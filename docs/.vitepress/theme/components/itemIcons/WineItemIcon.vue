<template>
    <ItemIcon :size="size" :no="no" :needLink="needLink" :type="`wine`"><slot></slot></ItemIcon>
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
                return string.match("/^00[1-4]$/");
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
