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
        default: 'left', // 'left' or 'center' or 'right' or 'classic'
        validator: value => ['left', 'center', 'right', 'classic'].includes(value)
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

  .character-details.classic{
    top: 40%;
    left: 55%;
    right: unset;
    bottom: unset;
  }

  .classic .character-name::before{
    background-color: unset;
  }

  .classic .character-name.zh {
  font-family: 'Ma Shan Zheng', serif;
  font-size: 20px;
  font-weight: unset;
  transform: translateX(-5px);
  color: #D5BB92;
  text-shadow: 
    -1px -1px 0 #715A39,
    1px -1px 0 #715A39,
    -1px 1px 0 #715A39,
    1px 1px 0 #715A39;
}

.classic .character-name.en {
    font-family: 'Ma Shan Zheng', serif;
    position: relative;
    font-size: 24px;
    font-weight: bold;
    color: #FFFAF0;
    text-shadow: 
    -1px -1px 0 #B4594D,
    1px -1px 0 #B4594D,
    -1px 1px 0 #B4594D,
    1px 1px 0 #B4594D;
}
.classic .character-name.en::before{
    content: '';
    position: absolute;
    top:0px;
    left:0px;
    height: 120%;
    width: 180%;
    transform: translateX(-20%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(/images/generic/background/icon_brush_1.png);
    opacity:0.8;
    z-index: -5;
}
    </style>
  