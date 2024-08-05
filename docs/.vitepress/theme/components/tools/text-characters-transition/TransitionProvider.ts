import anime from "animejs";
import { AnimeFuncParam } from "./Type";

export enum TransitionName {
  FADE = 'fade',
  BLUR = 'blur',
  CLIP_RIGHT = 'clip-right',
  RANDOM_SPIN = 'random-spin',
  LANDING = 'landing',
  FLICKER = 'flicker',
  CONVERGE = 'converge',
  WHIRLING = 'whirling',
  GATHER = 'gather',
  EMERGE = 'emerge',
  TEST = 'test',
}

export const transitionProvider: Record<
  TransitionName, {
    enter: AnimeFuncParam;
    leave: AnimeFuncParam;
  }
> = {
  [TransitionName.FADE]: {
    enter: (i) => ({
      opacity: 1,
      delay: i * 50,
    }),
    leave: (i) => ({
      opacity: 0,
      delay: i * 50,
    }),
  },
  [TransitionName.BLUR]: {
    enter: (i) => ({
      opacity: 1,
      filter: ['blur(10px)', 'blur(0px)'],
      delay: i * 100,
      easing: 'easeOutCirc',
    }),
    leave: (i) => ({
      opacity: 0,
      filter: ['blur(0px)', 'blur(10px)'],
      delay: i * 100,
      easing: 'easeInCirc',
    }),
  },
  [TransitionName.CLIP_RIGHT]: {
    enter: (i) => ({
      clipPath: [
        'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      ],
      delay: i * 10,
      easing: 'easeInOutCirc',
    }),
    leave: (i) => ({
      clipPath: [
        'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      ],
      delay: i * 10,
      easing: 'easeInOutCirc',
    }),
  },
  [TransitionName.RANDOM_SPIN]: {
    enter: (i) => ({
      rotate: () => 0,
      duration: 1200,
      delay: i * 50,
    }),
    leave: (i) => ({
      rotate: () => anime.random(270, 60) * (Math.random() < 0.5 ? -1 : 1),
      duration: 1200,
      delay: i * 50,
    }),
  },
  [TransitionName.LANDING]: {
    enter: (i) => ({
      transformOrigin: ['50% 100%', '50% 100%'],
      scaleX: [
        { value: 0, },
        { value: 1.4, easing: 'easeOutCirc' },
        { value: 1, easing: 'easeInOutCubic', duration: 500 },
      ],
      scaleY: [
        { value: 1.5, },
        { value: 0.5, easing: 'easeOutCirc' },
        { value: 1, easing: 'easeInOutCubic', duration: 500 },
      ],
      opacity: 1,
      duration: 1000,
      delay: i * 50,
    }),
    leave: (i) => ({
      transformOrigin: ['50% 100%', '50% 100%'],
      scaleX: [
        { value: 1 },
        { value: 1.2, easing: 'easeInOutCirc' },
        { value: 0 },
      ],
      scaleY: [
        { value: 1 },
        { value: 0.5, easing: 'easeInOutCirc' },
        { value: 1.5 },
      ],
      opacity: [
        { value: 1, },
        { value: 1, },
        { value: 0, },
      ],
      duration: 1600,
      delay: i * 50,
    }),
  },
  [TransitionName.FLICKER]: {
    enter: (i) => ({
      opacity: [
        ...Array(4).fill(0).map(() => ({ value: anime.random(0, 0.5) + 0.1 })),
        { value: 1 },
      ],
      duration: 200,
      delay: i * 50,
    }),
    leave: (i) => ({
      opacity: [
        ...Array(4).fill(0).map(() => ({ value: anime.random(0, 0.5) + 0.1 })),
        { value: 0 },
      ],
      duration: 200,
      delay: i * 50,
    }),
  },
  [TransitionName.CONVERGE]: {
    enter: (i, length) => ({
        ...convergeAnimateList[Math.floor(Math.random() * convergeAnimateList.length)][0],
        delay: i * 100,
        easing: 'easeOutExpo',
    }),
    leave: (i, length) => ({
        ...convergeAnimateList[Math.floor(Math.random() * convergeAnimateList.length)][1],
        delay: i * 100,
        easing: 'easeInExpo',
    }),
  },
  [TransitionName.WHIRLING]: {
    enter: (i, length) => ({
      opacity: [0, 1],
      transformOrigin: () => [
        `${anime.random(-500, 500)}% ${anime.random(-500, 500)}%`, '0% 0%',
      ],
      rotate: () => [anime.random(-360, 360), 0],
      delay: i * 100,
      duration: 1400,
      easing: 'easeOutQuart',
    }),
    leave: (i, length) => ({
      opacity: 0,
      transformOrigin: () => `${anime.random(-500, 500)}% ${anime.random(-500, 500)}%`,
      rotate: () => anime.random(-360, 360),
      delay: i * 100,
      duration: 1400,
      easing: 'easeInQuart',
    }),
  },
  [TransitionName.GATHER]: {
    enter: (i) => ({
      opacity: [0, 1],
      translateX: [
        anime.random(-20, 20),
        0,
      ],
      translateY: [
        anime.random(-20, 20),
        0,
      ],
      delay: i * 100,
    }),
    leave: (i) => ({
      opacity: 0,
      translateX: anime.random(-50, 50),
      translateY: anime.random(-50, 50),
      delay: i * 100,
      duration: 400,
      easing: 'easeInCubic',
    }),
  },
  [TransitionName.EMERGE]: {
    enter: (i) => ({
      opacity: [0, 1],
      filter: ['blur(6px)', 'blur(0px)'],
      scale: [0.6, 1],
      rotate: 0,
      delay: i * 100,
      duration: 1800,
      easing: 'cubicBezier(0, 1.47, 0.83, 1)',
    }),
    leave: (i) => ({
      opacity: 0,
      filter: 'blur(2px)',
      scale: 0.6,
      rotate: anime.random(-30, 30),
      delay: i * 100,
      duration: 1800,
      easing: 'easeInCirc',
    }),
  },
  [TransitionName.TEST]: {
    enter: (i) => ({
      opacity: [0, 1],
      transformOrigin: () => [
        `${anime.random(-500, 500)}% ${anime.random(-500, 500)}%`, '0% 0%',
      ],
      rotate: () => [anime.random(-360, 360), 0],
      delay: i * 100,
      duration: 1400,
      easing: 'easeOutQuart',
    }),
    leave: (i) => ({
      opacity: 0,
      transformOrigin: () => [
        '0% 0%', `${anime.random(-500, 500)}% ${anime.random(-500, 500)}%`
      ],
      rotate: () => anime.random(-360, 360),
      delay: i * 100,
      duration: 1400,
      easing: 'easeInQuart',
    }),
  },
}

const convergeAnimateList = [
  [
    // 上
    {
      clipPath: [
        'polygon(0 0, 100% 0%, 100% 0%, 0% 0%)',
        'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
      ],
      translateX: ['0%', '0%'],
      translateY: [
        '100%',
        '0%',
      ],
    },
    {
      clipPath: [
        'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
        'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
      ],
      translateX: ['0%', '0%'],
      translateY: [
        '0%',
        '-100%',
      ],
    },
  ],
  [
    // 下
    {
      clipPath: [
        'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
      ],
      translateX: ['0%', '0%'],
      translateY: [
        '-100%',
        '0%',
      ],
    },
    {
      clipPath: [
        'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
        'polygon(0 0%, 100% 0%, 100% 0%, 0% 0%)',
      ],
      translateX: ['0%', '0%'],
      translateY: [
        '0%',
        '100%',
      ],
    },
  ],
  [
    // 左
    {
      clipPath: [
        'polygon(0 0%, 0% 0%, 0% 100%, 0% 100%)',
        'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
      ],
      translateY: ['0%', '0%'],
      translateX: [
        '100%',
        '0%',
      ],
    },
    {
      clipPath: [
        'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
      ],
      translateY: ['0%', '0%'],
      translateX: [
        '0%',
        '-100%',
      ],
    },
  ],
  [
    // 右
    {
      clipPath: [
        'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ],
      translateY: ['0%', '0%'],
      translateX: [
        '-100%',
        '0%',
      ],
    },
    {
      clipPath: [
        'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      ],
      translateY: ['0%', '0%'],
      translateX: [
        '0%',
        '100%',
      ],
    },
  ],
] as const;

// anime({
//   targets: target,
//   opacity: [0, 1],
//   translateX: () => [
//     anime.random(-30, -10),
//     0,
//   ],
//   translateY: () => [
//     anime.random(-20, 20),
//     0,
//   ],
//   rotate: () => [
//     anime.random(-30, 30),
//     0,
//   ],
//   filter: ['blur(10px)', 'blur(0px)'],
//   delay: (el, i) => i * 100,
//   easing: 'easeOutCirc',
// });
