<template>
    <div :class="['human', imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': imagePosition }"></div>
    <div :class="['layer-1',imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': imagePosition }"></div>
    <div :class="['layer-2',imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': imagePosition }"></div>
    <div :class="['background',imageAnima,imagePosition]"></div>
  </template>
  
  <script>
  import { withBase } from 'vitepress';
  import { computed } from 'vue';
  
  export default {
    name: 'CharacterBackground',
    props: {
      src:{
        type: String,
        required: true
      },
      position: {
        type: String,
        required: false,
        default: 'left', // 'left' or 'center' or 'right'
        validator: value => ['left', 'center', 'right'].includes(value)
      },
      animation: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    setup(props) {
      const imageSrc = computed(() => withBase(props.src));
      const imagePosition = computed(() => {
        switch (props.position) {
          case 'left':
            return 'left bottom';
          case 'right':
            return 'right bottom';
          default:
            return 'center bottom';
        }
      });
      const imageAnima = computed(() => (props.animation ? 'anima' : ''));
  
      return {
        imageSrc,
        imagePosition,
        imageAnima
      };
    }
  };
  </script>
  
  <style scoped>
  .human {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: auto 58vh;
    background-repeat: no-repeat;
    background-image: var(--background-image);
    background-position: var(--background-position);
    z-index: -2;
  }

  .layer-1 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mask-size: auto 58vh;
    mask-repeat: no-repeat;
    mask-image: var(--background-image);
    mask-position: var(--background-position);
    background-color: azure;
    opacity: 0.6;
    z-index: -3;
  }

  .layer-2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mask-size: auto 58vh;
    mask-repeat: no-repeat;
    mask-image: var(--background-image);
    mask-position: var(--background-position);
    background-color: gray;
    opacity: 0.3;
    z-index: -3;
  }

  .background.anima.left{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-30%) translateX(-50%);
    width: 100%;
    height: 100%;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-image: url(/images/generic/background/back_intro.png);
    z-index: -9;
  }
  
  .human.anima::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;
    mask-size: auto 58vh;
    mask-repeat: no-repeat;
    mask-image: var(--background-image);
    mask-position: var(--background-position);
    animation: reveal 1s forwards;
    z-index: -1;
  }

  .layer-1.anima {
    animation: moveLeft 1s ease-out 0.8s forwards;
  }

  .layer-2.anima {
    animation: moveLeft2 3s ease-out 0.7s forwards;
  }
  
  @keyframes reveal {
    0% {
      background-color: black;
    }
    40% {
      background-color: rgb(227, 227, 227);
    }
    100% {
      background-color: rgba(227, 227, 227, 0);
    }
  }

  @keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10px); 
  }
}
@keyframes moveLeft2 {
  0% {
    transform: translateX(0);
  }
  20%{
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(-30px); 
  }
}
  </style>
  