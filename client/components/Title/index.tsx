import React, { FC } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';

import './style.less';

interface TitleProps {
  href?: string;
  level: number;
}

const Title: FC<TitleProps> = (props) => {
  const { href, level, children } = props;

  const Component = `h${level}` as any;
  if (href) {
    return (
      <Component className="section-title">
        <Link href="/">
          <span>
            {children}{' '}
            <Icon type="Group-1" className="text-xl" style={{ verticalAlign: '-0.14em' }}></Icon>
          </span>
        </Link>
      </Component>
    );
  }

  return <Component className="section-title">{children}</Component>;
};

export default Title;
