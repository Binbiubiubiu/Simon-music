import React, { FC } from 'react';
import Link from 'next/link';
import './style.less';
import Search from './Search';
import Button from '../Button';

const menus = [
  {
    title: '个性推荐',
    href: '/',
  },
  {
    title: '个性推荐',
    href: '/',
  },
  {
    title: '歌单',
    href: '/about',
  },
  {
    title: '主播电台',
    href: '/2',
  },
  {
    title: '排行榜',
    href: '/3',
  },
  {
    title: '歌手',
    href: '/4',
  },
  {
    title: '最新音乐',
    href: '/5',
  },
];

interface NavBarProps {
  color?: string;
}

const NavBar: FC<NavBarProps> = () => {
  return (
    <header className="nav-bar">
      <nav>
        {menus.map(({ href, title }) => (
          <Link href={href} key={href}>
            <a className="text-white px-14">{title}</a>
          </Link>
        ))}
      </nav>
      <div className="nav-toolbar ">
        <Search />
        <Button.Icon type="shezhi" className="text-white text-18" />
        <Button.Icon type="youjian" className="text-white text-18" />
        <Button.Icon type="pifu" className="text-white text-18" />
      </div>
    </header>
  );
};

export default NavBar;
