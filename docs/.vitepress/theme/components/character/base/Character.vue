<template>
  <div :class="['background-image', imageAnima]" :style="{ '--background-image': `url(${imageSrc})`, '--background-position': imagePosition }"></div>
</template>

<script>
import { withBase } from 'vitepress';
import { inject, computed, onMounted } from 'vue';

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
    const preloadImage = inject('preloadImage');
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

    onMounted(() => {
      if (preloadImage && imageSrc) {
        preloadImage(imageSrc);
      }
    });

    return {
      imageSrc,
      imagePosition,
      imageAnima
    };
  }
};
</script>

<style scoped>
.background-image {
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

.background-image.anima::before {
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
</style>
