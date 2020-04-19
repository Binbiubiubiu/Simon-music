import React, { FC } from 'react';
import Link from 'next/link';

import './style.less';

import Icon from '@/components/Icon';

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
            <Icon type="Group-1" className="text-24" style={{ verticalAlign: '-0.14em' }}></Icon>
          </span>
        </Link>
      </Component>
    );
  }

  return <Component className="section-title">{children}</Component>;
};

export default Title;
