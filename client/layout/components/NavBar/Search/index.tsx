import React, { FC, useState } from 'react';
import cls from 'classnames';
import './style.less';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

interface SearchProps {
  width?: number;
}

const Search: FC<SearchProps> = () => {
  const [val, setVal] = useState('');
  return (
    <div className="search-wrapper ">
      <Icon type="search" className="text-base " />
      <input
        defaultValue={val}
        onInput={(e: any) => setVal(e.target.value)}
        className="flex-1 w-full bg-transparent focus:outline-none text-white px-1"
        placeholder="搜索"
      />
      <Button
        className={cls({ invisible: !val })}
        onClick={() => setVal('')}
        type="baseline-close-px"
      />
    </div>
  );
};

export default Search;
