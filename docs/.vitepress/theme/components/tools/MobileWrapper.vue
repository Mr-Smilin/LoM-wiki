<template>
    <slot v-if="!isMobile"></slot>
</template>

<script>
    import { inject, onMounted, useSlots, h } from 'vue';

    export default {
        name: 'MobileWrapper',
        setup() {
            const isMobile = inject('isMobile');
            const addMobileItem = inject('addMobileItem');
            const slots = useSlots();

            onMounted(() => {
                if (slots.default) {
                    const defaultSlot = slots.default();
                    defaultSlot.forEach(vnode => {
                        if (vnode.type && typeof vnode.type !== 'string') {  // 確保不是原生 HTML 元素
                            addMobileItem(() => h(vnode.type, vnode.props, vnode.children));
                        }
                    });
                }
            });

            return {
                isMobile
            };
        }
    };
</script>
