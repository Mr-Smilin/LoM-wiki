<template>
    <div :class="['background',imageAnima]">
      <div :class="['human', imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': 'left bottom' }"></div>
      <div :class="['layer-1',imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': 'left bottom' }"></div>
      <div :class="['layer-2',imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': 'left bottom' }"></div>
      <div v-if="nameMain" :class="['name',imageAnima]">
        <p>{{ nameTitle }}</p>
        <span>{{ nameMain }}</span>
      </div>
      <div v-if="desc" :class="['desc',imageAnima]" >
        <MarkdownWrapper :content="desc" />
      </div>
    </div>
  </template>
  
  <script>
  import { withBase } from 'vitepress';
  import { computed } from 'vue';
import MarkdownWrapper from '../../tools/MarkdownWrapper.vue';
  
  export default {
    name: 'CharacterMeet',
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
      desc:{
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
    left: 9%;
    width: 100%;
    height: 100%;
  }

  .human {
    /* background-size: auto 58vh; */
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-image: var(--background-image);
    background-position: var(--background-position);
    z-index: -2;
  }

  .layer-1,
  .layer-2 {
    /* mask-size: auto 58vh; */
    mask-size: auto 100%;
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

  .name{
    position: absolute;
    top:34%;
    right: 5%;
    line-height: 1.5em;
    /* font-size: calc(1vw + 0.4em); */
    font-size: 24px;
    width: 40%;
    font-family: 'DFT_S5', 'cursive', sans-serif;
  }

  .name p{
    /* background-image: linear-gradient(to bottom right, #937445, #fcd59f); */
    background-image: linear-gradient(to bottom right, #b4915e, 10%, #fcd59f);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-stroke: 0.5px #161616;
    height: calc(1vh + 1.2em);
    /* font-size: calc(1vw + 0.3em); */
    margin-bottom: 0.1vh;
    transform: translate(-10px,0.3em);
  }

  .name span{
    color: white;
    display: block;
    position: relative;
    letter-spacing: 0.1em;
    text-shadow: 
    1px 1px 0 #D37370,
    -1px 1px 0 #D37370,
    1px -1px 0 #D37370,
    -1px -1px 0 #D37370,
    2px 2px 0 #D37370,
    -2px 2px 0 #D37370,
    2px -2px 0 #D37370,
    -2px -2px 0 #D37370;
  }

  .name span::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 14%;
    width: 150px;
    height: 60px;
    transform: translate(-50%, -50%);
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(/images/generic/background/icon_brush_1.png);
    background-size: 100% 65%;
    opacity: 0.8;
    z-index: -1;
  }

  .desc{
    position: absolute;
    top: 52%;
    right: 2.5%;
    width: 43%;
    max-height: 30vh;
    overflow: hidden;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    word-break: break-all;
    line-height: 1.5em;
    /* letter-spacing: 0.9px; */
    color: rgb(225, 225, 225);
    font-family: 'SourceHanSerifTW-Regular', 'cursive', sans-serif;
    /* font-size: calc(0.8vw + 0.1em); */
    font-size: 13px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    z-index: -4;
    /* background-color: rgba(144, 114, 92,0.1); */
  }

  .background{
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 100% auto;
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
    /* mask-size: auto 58vh; */
    mask-size: auto 100%;
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

  .name.anima {
    clip-path: inset(0 100% 0 0);
    animation: revealName 0.5s ease-out 0.6s forwards;
  }

  .desc.anima {
    clip-path: inset(0 100% 0 0);
    animation: revealText 0.5s ease-out 0.7s forwards;
  }

  @media screen and (max-width: 768px){
    .name{
      display: none;
    }
    .desc{
      display: none;
      /* width: 38%; */
    }
    .human{
      background-position: center bottom;
    }
    .human.anima::before,
    .layer-1,
    .layer-2{
      mask-size: 0%;
    }
    .background{
      background-size: 0%;
    }
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
@keyframes revealName {
  0% {
    clip-path: inset(-50% 100% -50% -50%);
  }
  100% {
    clip-path: inset(-50% -50% -50% -50%);
  }
}
@keyframes revealText {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}
  </style>
  