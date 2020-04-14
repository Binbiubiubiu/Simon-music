import React, { FC, useState } from 'react';
import cls from 'classnames';
import './style.less';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { CatListType } from '@/api/song-sheet';

interface TagProps {
  checked: boolean;
  value: any;
  onChange: (val: any) => void;
  hot?: boolean;
}

const Tag: FC<TagProps> = (props) => {
  const { checked, value, hot, onChange, children } = props;
  return (
    <label className={cls('type-tag', { 'type-tag-active': checked })}>
      <input
        className="invisible w-0"
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className={cls({ 'type-tag-hot': hot })}>{children || value}</span>
    </label>
  );
};

const TagGroupIcon = ['diqiuquanqiu', 'gangqin', 'kafei', 'xiaolian', 'li_paibanleixing_c'];

interface TagBtnProps {
  value: any;
  cats: CatListType;
  onChange: (val: any) => void;
}

const TagBtn: FC<TagBtnProps> = (props) => {
  const { value, cats, onChange } = props;
  const [open, setOpen] = useState<boolean>(false);

  const handleTagChange = (val: string) => {
    setOpen(false);
    onChange(val);
  };

  const Popuper = (
    <section className="tag-popup">
      <header className="py-10 px-20 border-b border-gray-600">
        <Tag checked={value === '全部歌单'} value="全部歌单" onChange={handleTagChange} />
      </header>
      <main className="p-20">
        {cats.sub.map((group, i) => {
          return (
            <dl className="flex mb-24" key={cats.categories[i]}>
              <dt className="type-tag-group-label">
                <div className="flex items-center">
                  <Icon type={TagGroupIcon[i]} className="text-gray-500 text-24 pr-6" />
                  <span className="text-white opacity-25">{cats.categories[i]}</span>
                </div>
              </dt>
              <dd className="flex-1 ">
                <ul className="grid grid-cols-6 gap-6">
                  {group.map((tag) => (
                    <li key={tag.name}>
                      <Tag
                        value={tag.name}
                        checked={tag.name === value}
                        onChange={handleTagChange}
                        hot={tag.hot}
                      />
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
          );
        })}
      </main>
    </section>
  );

  return (
    <div className="relative">
      <Button className="tag-btn" onClick={() => setOpen(!open)}>
        {value}
        <Icon type="Group-1" className="ml-4" />
      </Button>
      {open && Popuper}
    </div>
  );
};

export default TagBtn;
