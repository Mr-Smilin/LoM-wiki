<template>
    <ItemIcon :size="size" :no="no" :needLink="needLink" :type="`tea`"><slot></slot></ItemIcon>
</template>

<script>

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
            type: String,
            validator: function (string) {
                return string.match("/^\d{3}$/");
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
