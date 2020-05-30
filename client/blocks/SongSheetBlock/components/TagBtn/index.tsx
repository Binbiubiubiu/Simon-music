import React, { FC, useState } from 'react';
import './style.less';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { CatListType } from '@/api/song-sheet';
import { Tag } from '../TagGroup';

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
      <header className="py-3 px-6 border-b border-gray-600">
        <Tag
          textColorClassName="text-gray-400"
          hoverClassName="hover:text-primary"
          checked={value === '全部歌单'}
          label="全部歌单"
          value="全部歌单"
          onChange={handleTagChange}></Tag>
      </header>
      <main className="p-6">
        {cats.sub.map((group, i) => {
          return (
            <dl className="flex mb-6" key={cats.categories[i]}>
              <dt className="type-tag-group-label">
                <div className="flex items-center">
                  <Icon type={TagGroupIcon[i]} className="text-gray-500 text-xl pr-2" />
                  <span className="text-white opacity-25 text-sm">{cats.categories[i]}</span>
                </div>
              </dt>
              <dd className="flex-1 ">
                <ul className="grid grid-cols-6 gap-3">
                  {group.map((tag) => (
                    <li key={tag.name}>
                      <Tag
                        textColorClassName="text-gray-400"
                        hoverClassName="hover:text-primary"
                        value={tag.name}
                        label={tag.name}
                        checked={tag.name === value}
                        onChange={handleTagChange}
                        hot={tag.hot}></Tag>
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
        <Icon type="Group-1" className="ml-1" />
      </Button>
      {open && Popuper}
    </div>
  );
};

export default TagBtn;
