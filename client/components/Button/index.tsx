import React, { FC } from 'react';
import cls from 'classnames';
import Icon from '../Icon';
import { noop } from '@/constants';

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: string;
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  className?: string;
  style?: React.CSSProperties;
}

const IconButton: FC<IconButtonProps> = (props) => {
  const { type, className, onClick = noop, children, ...rest } = props;
  return (
    <button className={cls('outline-none', className)} onClick={onClick} {...rest}>
      <Icon type={type} size="inherit" />
      {children}
    </button>
  );
};

export default {
  Icon: IconButton,
};
