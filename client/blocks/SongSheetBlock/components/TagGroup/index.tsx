import React, { FC } from 'react';
import cls from 'classnames';
import './style.less';

interface TagProps {
  checked: boolean;
  value: any;
  onChange: (val: any) => void;
}

const Tag: FC<TagProps> = (props) => {
  const { checked, value, onChange, children } = props;
  return (
    <label className={cls('tag', { 'tag-active': checked })}>
      <input
        className="invisible w-0"
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      {children || value}
    </label>
  );
};

interface TagGroupProps {
  value?: any;
  options: Array<any>;
  onChange: (value: any) => void;
}

const TagGroup: FC<TagGroupProps> = (props) => {
  const { value, options, onChange } = props;
  return (
    <div className="flex items-center">
      {options.map((tag) => (
        <Tag checked={value === tag} value={tag} onChange={onChange} key={tag} />
      ))}
    </div>
  );
};

export default TagGroup;
