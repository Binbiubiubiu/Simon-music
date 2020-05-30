import React, { FC, useState, useEffect } from 'react';
import cls from 'classnames';

import './style.less';
import { Tag } from '@/blocks/SongSheetBlock/components/TagGroup';

type RadioType = {
  label: string;
  value: number | string;
};

interface SingerFormItemProps {
  current: string | number;
  dataSource: RadioType[];
  label: string;
  suffix?: string;
  onChange: (val: string | number) => void;
}

export const SingerFormItem: FC<SingerFormItemProps> = (props) => {
  const { current, label, dataSource, onChange, suffix = ':' } = props;
  return (
    <dl className="flex mb-2">
      <dt className="text-gray-300  py-1 px-3 text-xs">
        {label}
        {suffix}
      </dt>
      <dd className="flex-1">
        <ul>
          {dataSource.map((item) => (
            <li key={item.value} className={cls('inline-block px-3 singer-tag')}>
              <Tag
                textColorClassName="text-gray-600 "
                checked={current == item.value}
                size="small"
                label={item.label}
                value={item.value}
                onChange={(val) => onChange(val)}></Tag>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  );
};

export default SingerFormItem;
