import React, { FC } from 'react';
import './style.less';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

interface SearchProps {
  width?: number;
}

const Search: FC<SearchProps> = () => {
  return (
    <div className="search-wrapper text-white">
      <Icon type="search" className="text-16 " />
      <input
        className="flex-1 w-full bg-transparent focus:outline-none text-white px-4"
        placeholder="搜索"
      />
      <Button type="baseline-close-px" className="text-12" />
    </div>
  );
};

export default Search;
