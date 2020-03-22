import React, { FC } from 'react';
import cls from 'classnames';

export interface IconProps {
  /**
   * 类型
   */
  type: string;
  /**
   * 大小
   *  @default 16px
   */
  size?: number | string;
  /**
   * 颜色
   *  @default inherit  继承父标签的color熟悉
   */
  color?: string;
  /**
   * 点击事件
   */
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * 自定义style
   */
  style?: React.CSSProperties;
  /**
   * 自定义class
   */
  classname?: string;
}

const Icon: FC<IconProps> = (props) => {
  const { type, onClick, size, color, style, classname } = props;

  return (
    <i
      className={cls(classname, 'iconfont', type)}
      onClick={onClick}
      style={{ fontSize: size, color, ...style }}></i>
  );
};

Icon.defaultProps = {
  size: 16,
  color: 'inherit',
};

export default Icon;
