import { prefixZero } from './number';
/**
 *
 * @param duration 时长 单位（秒）
 */
export const getMusicDuration = (duration: number) => {
  const mm = Math.floor(duration / 60);
  const ss = Math.ceil(duration % 60);
  return `${prefixZero(mm, 2)}:${prefixZero(ss, 2)}`;
};
