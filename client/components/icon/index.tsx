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
   * 自定义style
   */
  style?: React.CSSProperties;
  /**
   * 自定义class
   */
  classname?: string;
}

const Icon: FC<IconProps> = (props) => {
  const { type, size, color, style, classname } = props;

  return (
    <i className={cls(classname, 'iconfont', type)} style={{ fontSize: size, color, ...style }}></i>
  );
};

Icon.defaultProps = {
  size: 'inherit',
  color: 'inherit',
};

export default Icon;

export { PlayIcon } from './PlayIcon';
