<template>
    <div v-show="isActive" class="tab-content">
      <div class="background-image" :style="{ backgroundImage: `url(${imageSrc})`, backgroundPosition: imagePosition }"></div>
      <div class="character-details" :class="namePosition">
        <p v-if="name.nameZh" class="character-name zh">{{ name.nameZh }}</p>
        <p v-if="name.nameEn" class="character-name en">{{ name.nameEn }}</p>
      </div>
      <div class="attributes-table-container" :class="attributesPosition">
        <table v-if="attributes.table && attributes.table.length" class="attributes-table">
          <tr v-for="(attr, index) in attributes.table" :key="index">
            <td>{{ attr.label }}</td>
            <td>{{ attr.value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { inject, computed } from 'vue';
  import { withBase } from 'vitepress';
  
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
          position: 'center' // 'left', 'center', 'right'
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
    setup(props) {
      const registerTab = inject('registerTab');
      const selectedIndex = inject('selectedIndex');
  
      const index = registerTab({ title: props.title });
  
      const isActive = computed(() => index === selectedIndex.value);
      const imageSrc = computed(() => withBase(props.image.src));
      const imagePosition = computed(() => props.image.position || 'center');
      const attributesPosition = computed(() => props.attributes.position || 'left');
      const namePosition = computed(() => props.name.position || 'right');
  
      return {
        isActive,
        index,
        selectedIndex,
        imageSrc,
        namePosition,
        imagePosition,
        attributesPosition,
      };
    },
  };
  </script>
  
  <style scoped>
  .tab-content {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 554px auto;
    background-repeat: no-repeat;
  }
  
  .character-details {
    position: absolute;
    bottom: 0;
    text-align: center;
    padding: 20px;
    transform: translateY(-50%);
  }
  
  .character-details.left {
    left: 0;
  }
  
  .character-details.center {
    left: 50%;
    transform: translate(-50%, 100%);
  }
  
  .character-details.right {
    right: 0;
  }

  .character-name {
    text-align: start;
    font-weight: bold;
    margin: 0;
  }

  .character-name.zh {
    font-size: 1.5rem;
  }

  .character-name.en {
    font-size: 1rem;
  }
  
  .attributes-table-container {
    position: absolute;
    bottom: 0;
    transform: translateY(-50%);
  }
  
  .attributes-table-container.left {
    left: 5px;
  }
  
  .attributes-table-container.center {
    left: 50%;
    transform: translate(-50%, 100%);
  }
  
  .attributes-table-container.right {
    right: 5px;
  }
  
  .attributes-table {
    border-collapse: collapse;
  }
  
  .attributes-table td {
    padding: 0.5rem;
    border: 1px solid #ccc;
  }
  </style>
