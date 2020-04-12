import React, { FC, useMemo } from 'react';
import cls from 'classnames';
import './style.less';
import Icon from '../Icon';
import { computedPageNo } from './utils';

interface Pagination {
  current: number;
  size: number;
  total: number;
}

interface PaginationProps extends Pagination {
  onPageChange: (val: number) => void;
  className?: string;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { current, size, total, onPageChange, className } = props;

  const [totalPage, pageNoList] = useMemo(() => computedPageNo({ current, size, total }), [
    current,
    size,
    total,
  ]);

  const prePage = () => {
    onPageChange(current - 1 < 1 ? 1 : current - 1);
  };

  const nextPage = () => {
    onPageChange(current + 1 > totalPage ? current : current + 1);
  };

  const renderBtns = (pageNo) => {
    if (typeof pageNo == 'string') {
      return <div className="pagination-btn">...</div>;
    }

    return (
      <button
        key={pageNo}
        className={cls('pagination-btn', { 'pagination-btn-active': pageNo == current })}
        onClick={() => {
          onPageChange(pageNo);
        }}>
        {pageNo}
      </button>
    );
  };

  return (
    <div className={cls('pagination', className)}>
      <button className="pagination-btn" onClick={prePage} disabled={current === 1}>
        <Icon type="Group-" />
      </button>
      {pageNoList.map(renderBtns)}
      <button className="pagination-btn" onClick={nextPage} disabled={current === totalPage}>
        <Icon type="Group-1" />
      </button>
    </div>
  );
};

export default Pagination;
