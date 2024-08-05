<template>
  <div class="attributes-table-container" :class="[attributesPosition,{'mobile':isMobile}]" :style="{ transform: tableTransform }">
    <button @click="toggleTable" class="toggle-button">摺疊</button>
    <table v-if="haveData" class="attributes-table">
      <CharacterTr v-for="(trData,trIndex) in table" :key="trIndex">
        <CharacterTd v-for="(tdData,tdIndex) in trData" :key="tdIndex" :isTitle="tdIndex === 0" :position="tdIndex === 0 ? 'center' : 'left'">
            {{ tdData }}
        </CharacterTd>
      </CharacterTr>
    </table>
    <table v-else class="attributes-table">
      <slot></slot>
    </table>
  </div>
</template>

<script>
import { inject, ref , computed} from 'vue';
import CharacterTr from './CharacterTr.vue';
import CharacterTd from './CharacterTd.vue';
import MobileWrapper from '../../tools/MobileWrapper.vue';

export default {
  name: 'CharacterTable',
  props: {
    position: {
        type: String,
        default: 'left', // 'left' or 'center' or 'right'
        validator: value => ['left', 'center', 'right'].includes(value)
    },
    table: {
      type: Object,
      default: []
    }
  },
  components: {
    CharacterTr,
    CharacterTd,
    MobileWrapper
  },
  setup(props) {
    const isMobile = inject('isMobile');

    const tableVisible = ref(true);

    const attributesPosition = computed(() => props.position || 'left');
    const tableTransform = computed(() => tableVisible.value ? `translateY(0%)` : `translateY(100%)`);

    const toggleTable = () => {
      tableVisible.value = !tableVisible.value;
    };

    const haveData = computed(() => props.table.length > 0);

    return {
      attributesPosition,
      tableTransform,
      toggleTable,
      haveData,
      isMobile,
    };
  }
};
</script>

<style scoped>

.attributes-table-container {
  position: absolute;
  bottom: 0;
  transform: translateY(0%);
  transition: transform 0.3s;
}

.attributes-table-container.left {
  left: 5px;
}

.attributes-table-container.center {
  left: 50%;
  transform: translateX(-50%);
}

.attributes-table-container.right {
  right: 5px;
}

.attributes-table-container.mobile {
  display: contents;
  width: 100%;
}

.attributes-table {
  border-collapse: separate;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 40vh;
  font-weight: bold;
  padding: 0;
  margin: 0;
  min-width: 300px;
}

.mobile .attributes-table{
  overflow-x: unset;
  overflow-y: unset;
  height: 100%;
  min-width: none;
}

.toggle-button {
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: var(--vp-c-gray-2);
  border: none;
  cursor: pointer;
  text-align: center;
  padding: 0;
  border-radius: 25px 25px 0 0;
}

.mobile .toggle-button {
  display: none;
}
</style>
