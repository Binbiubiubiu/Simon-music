import Pagination from '.';

/**
 * 计算页号 pageNo
 * @param pagination 分页信息
 * @param btnLimit 默认值为9
 */
export function computedPageNo(
  pagination: Pagination,
  btnLimit = 9,
): [number, Array<string | number>] {
  const { current, size, total } = pagination;
  // 总页数
  const totalPage = Math.ceil(total / size);

  // 少于最小按钮个数 直接全部显示
  if (totalPage <= btnLimit) {
    return [
      totalPage,
      Array(totalPage)
        .fill('')
        .map((_, i) => i + 1),
    ];
  }

  // 临界值
  const mid = Math.floor(btnLimit / 2);
  const result: Array<number | string> = [1];

  if (current - 1 < mid) {
    // 尾部不足省略
    result.push(
      ...Array(mid + 1)
        .fill('')
        .map((_, i) => i + 2),
      '...',
    );
  } else if (totalPage - current < mid) {
    // 顶部不足省略
    result.push(
      '...',
      ...Array(mid + 1)
        .fill('')
        .map((_, i) => totalPage - 1 - i)
        .reverse(),
    );
  } else {
    // 两边不足省略
    result.push('...', current - 2, current - 1, current, current + 1, current + 2, '...');
  }

  return [totalPage, result];
}
