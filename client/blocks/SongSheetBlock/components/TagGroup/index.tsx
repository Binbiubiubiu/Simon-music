import React, { FC } from 'react';
import cls from 'classnames';
import './style.less';

const tagSize = {
  normal: 'py-1 px-3 text-sm',
  small: 'py-1 px-3 text-xs',
};

interface TagProps {
  checked: boolean;
  value: any;
  onChange: (val: any) => void;
  className?: string;
  hoverClassName?: string;
  textColorClassName?: string;
  label?: string;
  hot?: boolean;
  size?: keyof typeof tagSize;
}

export const Tag: FC<TagProps> = (props) => {
  const {
    checked,
    label,
    value,
    onChange,
    hot,
    className,
    children,
    size = 'normal',
    textColorClassName = 'text-gray-600',
    hoverClassName = 'hover:text-gray-400',
  } = props;
  return (
    <label
      className={cls(`tag `, className, tagSize[size], textColorClassName, hoverClassName, {
        'tag-active': checked,
      })}>
      <input
        className="invisible w-0"
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className={cls({ 'tag-hot': hot })}>{label || children}</span>
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
        <Tag
          className="mx-1"
          checked={value === tag}
          value={tag}
          label={tag}
          size="small"
          onChange={onChange}
          key={tag}
        />
      ))}
    </div>
  );
};

export default TagGroup;
