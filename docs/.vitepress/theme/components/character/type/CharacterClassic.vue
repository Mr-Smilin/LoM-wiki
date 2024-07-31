<template>
    <div :class="['background',imageAnima]">
      <div :class="['human', imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': 'left bottom' }"></div>
      <div :class="['layer-1',imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': 'left bottom' }"></div>
      <div :class="['layer-2',imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': 'left bottom' }"></div>
    </div>
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
      nameTitle: {
        type: String,
        required: false,
        default: ''
      },
      nameMain:{
        type: String,
        required: false,
        default: ''
      },
      animation: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    setup(props) {
      const imageSrc = computed(() => withBase(props.src));
      const imageAnima = computed(() => (props.animation ? 'anima' : ''));
  
      return {
        imageSrc,
        imageAnima
      };
    }
  };
  </script>
  
  <style scoped>
  .human,
  .layer-1,
  .layer-2{
    position: absolute;
    bottom: 0;
    left: 5%;
    width: 100%;
    height: 100%;
  }

  .human {
    background-size: auto 58vh;
    background-repeat: no-repeat;
    background-image: var(--background-image);
    background-position: var(--background-position);
    z-index: -2;
  }

  .layer-1,
  .layer-2 {
    mask-size: auto 58vh;
    mask-repeat: no-repeat;
  }

  .layer-1 {
    mask-image: var(--background-image);
    mask-position: var(--background-position);
    background-color: #C8ABA2;
    opacity: 0.8;
    z-index: -3;
  }

  .layer-2 {
    mask-image: var(--background-image);
    mask-position: var(--background-position);
    background-color: #d55757;
    opacity: 0.2;
    z-index: -3;
  }

  .background{
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 90% auto;
    background-repeat: no-repeat;
    background-position: center center;
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
  