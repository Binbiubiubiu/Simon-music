import React, { FC } from 'react';
import cls from 'classnames';
import './style.less';
import Icon from '../';

interface PlayIconProps {
  size?: number;
  className?: string;
  mode?: 'normal' | 'dark';
}

export const PlayIcon: FC<PlayIconProps> = (props) => {
  const { className, size = 30, mode = 'normal' } = props;

  if (mode == 'dark') {
    return (
      <div
        className={cls('play-icon', `play-icon-dark`, className)}
        style={{ width: size, height: size, fontSize: size * 0.5 }}>
        <Icon type="bofangsanjiaoxing" />
      </div>
    );
  }

  return (
    <div
      className={cls('play-icon', `play-icon-normal`, className)}
      style={{ width: size, height: size, fontSize: size * 0.6 }}>
      <Icon type="bofang" />
    </div>
  );
};
