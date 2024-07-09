<template>
    <td :class=[styleName,position] >
        <MarkdownWrapper :content="slotContent" />
    </td>
</template>

<script>
import { ref,computed, useSlots } from 'vue';
export default {
	name: 'CharacterTd',
	props:{
		isTitle: {
			type: Boolean,
			default: false
		},
        position: {
            type: String,
            default: 'left', // 'left' or 'center' or 'right'
            validator: value => ['left', 'center', 'right'].includes(value)
        }
	},
	setup(props){
        const slots = useSlots()
        const slotContent = ref('');
        if (slots.default) {
            slotContent.value = slots.default().map(node => { 
            if(node?.type === 'br')
                return '<br>'
            else
                return node.children
            }).join('').trim();
        }
		const styleName = computed(() => props.isTitle ? 'label' : 'value')
		return {
			styleName,
            slotContent
		}
	}
}
</script>

<style scoped>
td{
    flex: 1;
    padding: 0 0 0 5px;
}
.label{
    flex: 1;
    background-color: var(--vp-c-bg-alt);
}
.value{
    flex: 2;
    background-color: var(--vp-c-bg);
}

.center{
    text-align: center;
}

.right{
    text-align: right;
}
</style>