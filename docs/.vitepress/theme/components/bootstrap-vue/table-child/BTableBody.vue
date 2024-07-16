<template>
    <tbody>
    <tr v-for="row in rows" :key="row.id" v-bind="row._attributes">
      <td v-for="(cell, cellIndex) in row._cells" 
          :key="cellIndex" 
          v-bind="cell.attributes">
        <component :is="cellRenderer" :cell="cell" />
      </td>
    </tr>
  </tbody>
</template>

<script setup>
    import { h } from 'vue';
    import MarkdownWrapper from '../../tools/MarkdownWrapper.vue';

    const props = defineProps({
        rows: Array
    });

    const cellRenderer = {
        props: ['cell'],
        render(props) {
            const { cell } = props;
            if (cell.type === 'array') {
            return cell.content.map((item, index) => renderItem(item, index));
            }
            return h(MarkdownWrapper, { content: cell.content });
        }
    };

    function renderItem(item, key) {
        if (!item) return null;

        const component = getComponent(item);
        const props = getProps(item);
        const children = getChildren(item);

        return h(component, { key, ...props }, children);
    }
    
    function getComponent(item) {
        console.log(item);
        if (item.type === 'br') return 'br';
        if (typeof item.type === 'string') return item.type;
        if (typeof item.type === 'object') return item.type;
        return 'span';
    }

    function getProps(item) {
        return item.props || {};
    }

    function getChildren(item) {
        if (!item || !item.children) return null;
        
        if (typeof item.children === 'string') return item.children;
        
        if (Array.isArray(item.children)) {
            return item.children.map((child, index) => {
                if (typeof child === 'string') return child;
                return renderItem(child, index);
            });
        }
        
        if (typeof item.children === 'object') {
            return Object.entries(item.children).reduce((acc, [slotName, slotContent]) => {
                acc[slotName] = typeof slotContent === 'function' 
                    ? slotContent 
                    : () => slotContent;
                return acc;
            }, {});
        }
        
        return null;
    }
</script>

<style scoped>
    @media screen and (min-width: 768px) {
        table.horizontal tr {
            display: grid;
            grid-template-rows: auto 1fr;
        }

        table.horizontal td {
            padding: 10px;
            display: flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>