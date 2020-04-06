/**
 * 数量转换为`万`为基数
 * @param count 数量
 */
export const numberBaseWan = (count: number) =>
  count > 100000 ? `${Math.floor(count / 10000)}万` : count;

/**
 * 计算百分比
 * @param current
 * @param total
 * @param digst
 */
export const percent = (current: number, total: number, digst = 2) =>
  +((current / total) * 100).toFixed(digst);

/**
 * 补零
 * @param num
 * @param n
 */
export const prefixZero = (num: number, n: number) => (Array(n).join('0') + num).slice(-n);
