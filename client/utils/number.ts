/**
 * 数量转换为`万`为基数
 * @param count 数量
 */
export const numberBaseWan = (count: number) =>
  count > 10000 ? `${Math.floor(count / 10000)}万` : count;
