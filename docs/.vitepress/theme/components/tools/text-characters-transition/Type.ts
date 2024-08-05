import anime from 'animejs';

export type AnimeFuncParam = (
  index: number,
  /** 動畫總數 */
  length: number,
) => anime.AnimeParams;
