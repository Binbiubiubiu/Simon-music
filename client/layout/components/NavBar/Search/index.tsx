import React, { FC } from 'react';
import './style.less';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

interface SearchProps {
  width?: number;
}

const Search: FC<SearchProps> = () => {
  return (
    <div className="search-wrapper">
      <Icon type="search" size={16} color="white" />
      <input
        className="flex-1 w-full bg-transparent focus:outline-none text-white px-4"
        placeholder="搜索"
      />
      <Button.Icon type="baseline-close-px" className="text-white text-12" />
    </div>
  );
};

export default Search;
