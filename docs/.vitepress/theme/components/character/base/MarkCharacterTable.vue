<template>
    <MobileWrapper>
        <ChTable v-bind="$props">
            <slot></slot>
        </ChTable>
    </MobileWrapper>
</template>

<script>
import MobileWrapper from '../../tools/MobileWrapper.vue';
import ChTable from './CharacterTable.vue';

export default {
  name: 'MobileAdaptiveTable',
  components: {
    MobileWrapper,
    ChTable
  },
  props: ChTable.props,
};
</script>