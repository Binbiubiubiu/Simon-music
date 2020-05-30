import React, { FC, useMemo } from 'react';
import cls from 'classnames';

export interface IconProps {
  /**
   * 大小
   */
  size?: number | string;
  /**
   * 类型
   */
  type: string;
  /**
   * 自定义style
   */
  style?: React.CSSProperties;
  /**
   * 自定义class
   */
  className?: string;
}

const Icon: FC<IconProps> = (props) => {
  const { type, size, style, className } = props;

  const computedStyle = useMemo(() => {
    return {
      ...style,
      fontSize: size,
    };
  }, [size, style]);

  return <i className={cls('iconfont', type, className)} style={computedStyle}></i>;
};

export default Icon;

export { PlayIcon } from './PlayIcon';
