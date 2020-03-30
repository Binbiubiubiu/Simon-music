import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = LinkProps & {
  activeClass?: string;
  children: React.ReactElement;
};

const NavLink: FC<NavLinkProps> = (props) => {
  const { href, activeClass, children, ...rest } = props;
  const router = useRouter();

  let className = React.Children.only(children).props.className || '';
  if (router.pathname === href) {
    className = `${className} ${activeClass}`;
  }

  return (
    <Link href={href} {...rest}>
      {React.cloneElement(children, { className })}
    </Link>
  );
};

export default NavLink;
