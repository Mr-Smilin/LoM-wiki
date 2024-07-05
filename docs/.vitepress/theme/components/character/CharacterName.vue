<template>
    <div class="character-details" :class="namePosition">
      <p v-if="name.nameZh" class="character-name zh">{{ name.nameZh }}</p>
      <p v-if="name.nameEn" class="character-name en">{{ name.nameEn }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CharacterName',
    props: {
      name: {
        type: Object,
        required: true,
        default: () => ({
          nameZh: '',
          nameEn: '',
          position: 'right' // 'left', 'center', 'right'
        })
      }
    },
    computed: {
      namePosition() {
        return this.name.position || 'right';
      }
    }
  };
  </script>
  
  <style scoped>
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
  </style>
  