import React, { FC, useMemo } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps extends LinkProps {
  activeClass?: string;
  activeLinkPath?: string[];
  children: React.ReactElement;
}

const NavLink: FC<NavLinkProps> = (props) => {
  const { href, activeClass, activeLinkPath = [], children, ...rest } = props;
  const { pathname } = useRouter();

  const className = useMemo(() => {
    const childClassName = React.Children.only(children).props.className || '';
    const isActive = [href].concat(activeLinkPath).includes(pathname);
    return [childClassName, isActive ? activeClass : ''].join(' ');
  }, [pathname]);

  return (
    <Link href={href} {...rest}>
      {React.cloneElement(children, { className })}
    </Link>
  );
};

export default NavLink;
