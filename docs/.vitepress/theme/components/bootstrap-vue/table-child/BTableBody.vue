<template>
    <tbody>
        <tr v-for="row in rows" :key="row.id" v-bind="row._attributes" v-memo="[row.id, row.isSelected]">
            <td v-for="(cell, cellIndex) in row._cells" 
                :key="cellIndex" 
                v-bind="cell.attributes">
                <template v-if="cell.type === 'array'">
                    <template v-for="(item, index) in cell.content" :key="index">
                        <br v-if="isBreakElement(item)" />
                        <template v-else-if="isTextElement(item)">{{ item.children }}</template>
                        <component 
                        v-else-if="isComponentElement(item)" 
                        :is="item.type"
                        v-bind="item.props"
                        >
                            <template v-for="(slotContent, slotName) in item.children" :key="slotName" v-slot:[slotName]>
                                <template v-if="typeof slotContent === 'function'">
                                    <component :is="{ render: slotContent }" />
                                </template>
                                <template v-else>
                                {{ slotContent }}
                                </template>
                            </template>
                        </component>
                    </template>
                </template>
                <MarkdownWrapper v-else :content="cell.content" />
            </td>
        </tr>
    </tbody>
</template>

<script setup>
    const props = defineProps({
        rows: Array,
        headers: Array
    })

    function isBreakElement(item) {
        return item && item.type === 'br';
    }

    function isTextElement(item) {
        return item && typeof item.type === 'symbol' && item.type.description === 'v-txt';
    }

    function isComponentElement(item) {
        return item && typeof item.type === 'string' || typeof item.type === 'object';
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