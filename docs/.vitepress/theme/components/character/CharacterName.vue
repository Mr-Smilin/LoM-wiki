<template>
    <div class="character-details" :class="namePosition">
      <p v-if="nameZh" class="character-name zh">{{ nameZh }}</p>
      <p v-if="nameEn" class="character-name en">{{ nameEn }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CharacterName',
    props: {
      nameZh: {
        type: String,
        required: false,
        default: ''
      },
      nameEn:{
        type: String,
        required: false,
        default: ''
      },
      position: {
        type: String,
        required: false,
        default: 'left', // 'left' or 'center' or 'right'
        validator: value => ['left', 'center', 'right'].includes(value)
      }
    },
    computed: {
      namePosition() {
        return this.position || 'right';
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
  