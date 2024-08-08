<template>
    <component :is="componentToRender" v-bind="componentProps">
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData"></slot>
        </template>
    </component>
</template>

<script setup>
    import { h, computed } from 'vue';
    import MarkdownWrapper from './MarkdownWrapper.vue';
    import { getContentType } from '../../script/componentUtils';

    const props = defineProps({
        cell: Object
    });

    const isComponent = computed(() => getContentType(props.cell) === 'component');

    const componentToRender = computed(() => {
        if (isComponent.value) {
            return createDynamicComponent();
        }
        return MarkdownWrapper;
    });

    const componentProps = computed(() => {
        if (isComponent.value) {
            return { cell: props.cell };
        }
        return { content: props.cell };
    });

    function createDynamicComponent() {
        return {
            props: ['cell'],
            render() {
                return renderItem(this.cell);
            }
        };
    }

    function renderItem(item) {
        if (!item) return null;
        const { type, props, children } = item;
        return h(getComponent(type), getProps(props), getChildren(children));
    }

    function getComponent(type) {
        if (type === 'br') return 'br';
        if (typeof type === 'string' || typeof type === 'object') return type;
        return 'span';
    }

    function getProps(props = {}) {
        return props;
    }

    function getChildren(children) {
        if (!children) return null;
        if (typeof children === 'string') return children;
        if (Array.isArray(children)) {
            return children.map((child, index) => 
                typeof child === 'string' ? child : renderItem({ ...child, key: index })
            );
        }
        if (typeof children === 'object') {
            return Object.entries(children).reduce((acc, [slotName, slotContent]) => {
                acc[slotName] = typeof slotContent === 'function' 
                    ? slotContent 
                    : () => slotContent;
                return acc;
            }, {});
        }
        return null;
    }
</script>