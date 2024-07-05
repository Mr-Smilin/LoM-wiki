<template>
  <div v-show="isActive" class="tab-content">
    <div :class="['background-image', imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': imagePosition }"></div>
    <div class="character-details" :class="namePosition">
      <p v-if="name.nameZh" class="character-name zh">{{ name.nameZh }}</p>
      <p v-if="name.nameEn" class="character-name en">{{ name.nameEn }}</p>
    </div>
    <div class="attributes-table-container" :class="attributesPosition":style="{ transform: tableTransform }">
      <button v-if="attributes.table && attributes.table.length" @click="toggleTable" class="toggle-button">摺疊</button>
      <table v-if="attributes.table && attributes.table.length" class="attributes-table" >
        <tr v-for="(attr, index) in attributes.table" :key="index">
          <CnTd v-if="attr.label" :color="attr.isTitle ? '#dc7f7f' : undefined">{{ attr.label }}</CnTd>
          <CnTd v-if="attr.label" :color="attr.isTitle ? '#dc7f7f' : undefined">{{ attr.value }}</CnTd>
          <CnTd v-else :colspan="2" :color="attr.isTitle ? '#dc7f7f' : undefined">{{ attr.value }}</CnTd>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { inject, computed, ref } from 'vue';
import { withBase } from 'vitepress';
import CnTd from "./ChineseStyleTd.vue";

export default {
  name: 'ChTab',
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: Object,
      default: () => ({
        nameZh: '',
        nameEn: '',
        position: 'right' // 'left', 'center', 'right'
      })
    },
    image: {
      type: Object,
      default: () => ({
        src: '',
        position: 'center', // 'left', 'center', 'right'
        anima: false // true, false
      })
    },
    attributes: {
      type: Object,
      default: () => ({
        table: [],
        position: 'left' // 'left', 'center', 'right'
      })
    }
  },
  components: {
    CnTd
  },
  setup(props) {
    const registerTab = inject('registerTab');
    const selectedIndex = inject('selectedIndex');
    const tableVisible = ref(true);

    const index = registerTab({ title: props.title });

    const isActive = computed(() => index === selectedIndex.value);
    const namePosition = computed(() => props.name.position || 'right');
    const imageSrc = computed(() => withBase(props.image.src));
    const imagePosition = computed(() => {
      switch(props.image?.position) {
        case 'left':
          return 'left bottom';
        case 'right':
          return 'right bottom';
        default:
          return 'center bottom';
      }}
    );
    const imageAnima = computed(() => !!props.image?.anima ? 'anima' : '');
    const attributesPosition = computed(() => props.attributes.position || 'left');
    const tableTransform = computed(() => tableVisible.value ? 'translateY(0%)' : 'translateY(40vh)');

    const toggleTable = () => {
      tableVisible.value = !tableVisible.value;
    };

    return {
      withBase,
      isActive,
      index,
      selectedIndex,
      namePosition,
      imageSrc,
      imagePosition,
      imageAnima,
      attributesPosition,
      tableTransform,
      toggleTable
    };
  },
};
</script>

<style scoped>
:root {
  --td-border-color: #7f9bdc;
}

.tab-content {
  position: relative;
  height: 60vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}

.background-image {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: auto 60vh;
  background-repeat: no-repeat;
  background-image: var(--background-image);
  background-position: var(--background-position);
  z-index: -2;
}

.background-image.anima::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  mask-size: auto 60vh;
  mask-repeat: no-repeat;
  mask-image: var(--background-image);
  mask-position: var(--background-position);
  animation: reveal 1s forwards;
  z-index: -1;
}

@keyframes reveal {
  0% {
    background-color: black;
  }
  40%{
    background-color: rgb(227, 227, 227);
  }
  100% {
    background-color: rgba(227, 227, 227,0);
  }
}

.character-details {
  position: absolute;
  bottom: 5px;
  text-align: center;
  padding: 20px;
}

.character-details.left {
  left: 5px;
}

.character-details.center {
  left: 50%;
  transform: translateX(-50%);
}

.character-details.right {
  right: 5px;
}

.character-name {
  text-align: start;
  font-weight: bold;
  margin: 0;
}

.character-name::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--vp-c-gray-1);
  opacity: 0.5;
  z-index: -1;
  border-radius: 5%;
}

.character-name.zh {
  font-size: 1.5rem;
}

.character-name.en {
  font-size: 1rem;
}

.attributes-table-container {
  position: absolute;
  bottom: 5px;
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

.attributes-table {
  border-collapse: separate;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 40vh;
  padding-right: 10px;
  font-weight: bold;
  margin-top: 0;
}

.attributes-table::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--vp-c-gray-1);
  opacity: 0.5;
  z-index: -1;
  border-radius: 0 0 5% 5% ;
}

.attributes-table tr {
  margin-top: 10px;
  display: flex;
  background-color: unset;
  border: unset;
  width: 100%;
  justify-content: flex-start;
}

.attributes-table tr > div {
  width: 100%;
}

.attributes-table tr > div:nth-of-type(2) {
  margin-left: 10px;
}

.toggle-button {
  width: 100%;
  height: 30px;
  background-color: var(--vp-c-gray-2);
  border: none;
  cursor: pointer;
  text-align: center;
  padding: 0;
  /* font-size: 12px; */
  border-radius: 5% 5% 0 0  ;
}
</style>
