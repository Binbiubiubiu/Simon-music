import React, { FC } from 'react';
import cls from 'classnames';

interface IconProps {
  type: string;
  size?: number;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Icon: FC<IconProps> = (props) => {
  const { type, onClick, size, color } = props;
  return (
    <i
      className={cls('iconfont', type)}
      onClick={onClick}
      style={{ fontSize: size, color: color }}></i>
  );
};

export default Icon;
