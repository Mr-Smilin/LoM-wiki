<template>
    <component
      :is="props.tag"
      :aria-label="labelText"
    >
      <span
        v-for="char, i in chars"
        :id="char.id"
        :key="i"
        :class="id"
        aria-hidden
        class="inline-block"
      >
        {{ char.value }}
      </span>
    </component>
  </template>
  
  <script setup lang="ts">
  import anime from 'animejs';
  import { customAlphabet } from 'nanoid';
  import { computed, onMounted, watch } from 'vue';
  import { AnimeFuncParam } from './Type';
  import { TransitionName, transitionProvider } from './TransitionProvider';
  
  // #region Props
  interface Props {
    visible?: boolean;
    label: string | string[] | Array<{
      value: string;
      enter: AnimeFuncParam;
      leave: AnimeFuncParam;
    }>;
  
    /** html tag
     * 
     * @default 'p'
     */
    tag?: string;
  
    /** 如何切割文字
     * 
     * 只有在 label 為 string 時有效
     * 
     * @default /.*?/u
     */
    splitter?: RegExp | ((label: string) => string[]);
  
    /** 過場名稱。使用預設內容 */
    name?: `${TransitionName}`;
  
    /** 進入動畫設定 */
    enter?: AnimeFuncParam;
  
    /** 離開動畫設定 */
    leave?: AnimeFuncParam;
  }
  // #endregion Props
  const props = withDefaults(defineProps<Props>(), {
    visible: true,
    label: '',
    tag: 'p',
    splitter: undefined,
    name: 'fade',
    enter: undefined,
    leave: undefined,
  });
  
  // #region Emits
  const emit = defineEmits<{
    'before-enter': [];
    'after-enter': [];
    'before-leave': [];
    'after-leave': [];
  }>();
  // #endregion Emits
  
  const id = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 10)();
  
  /** 沒有指定 TransitionName 的話預設都是 fade */
  function getAnimeParam(
    type: 'enter' | 'leave',
    i: number,
    length: number,
    data?: AnimeFuncParam,
  ): anime.AnimeParams {
    const defaultParam = transitionProvider[props.name][type](i, length);
    if (!data) return defaultParam;
  
    return {
      ...defaultParam,
      ...data(i, length),
    }
  }
  
  const chars = computed(() => {
  let data = props.label;
  
  if (Array.isArray(data)) {
        return data;
    } else if (typeof props.splitter === 'function') {
        data = props.splitter(data);
    } else {
        data = data.split(props.splitter ?? /.*?/u);
    }

    return data.map((item, i, array) => {
        const idName = `${id}-${i}`;

        if (typeof item === 'string') {
        return {
            value: item,
            id: idName,
            i,
            enter: () => getAnimeParam('enter', i, array.length, props.enter),
            leave: () => getAnimeParam('leave', i, array.length, props.leave),
        };
        }

        return {
        value: item.value,
        id: idName,
        i,
        enter: () => getAnimeParam('enter', i, array.length, item.enter),
        leave: () => getAnimeParam('leave', i, array.length, item.leave),
        };
    });
  });
  
  const labelText = computed(() => chars.value.map(char => char.value).join(''));
  
  async function startEnter(end = false) {
    anime.remove(`.${id}`);
  
    emit('before-enter');
  
    const tasks = chars.value.map((char) => {
      const data = char.enter();
  
      if (end) {
        data.duration = 0;
        data.delay = 0;
      }
  
      return anime({
        ...data,
        targets: `#${char.id}`,
      }).finished;
    });
  
    await Promise.allSettled(tasks);
  
    emit('after-enter');
  }
  
  async function startLeave(end = false) {
    anime.remove(`.${id}`);
  
    emit('before-leave');
  
    const tasks = chars.value.map((char) => {
      const data = char.leave();
  
      if (end) {
        data.duration = 0;
        data.delay = 0;
      }
  
      return anime({
        ...data,
        targets: `#${char.id}`,
      }).finished;
    });
  
    await Promise.allSettled(tasks);
  
    emit('after-leave');
  }
  
  watch(() => props.visible, (visible) => {
    visible ? startEnter() : startLeave()
  });
  
  onMounted(() => {
    props.visible ? startEnter(true) : startLeave(true)
  });
  
  // #region Methods
  defineExpose({});
  // #endregion Methods
  </script>
  
  <style scoped>
  </style>
  