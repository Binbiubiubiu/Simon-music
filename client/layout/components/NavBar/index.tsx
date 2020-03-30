import React, { FC } from 'react';
import './style.less';
import Search from './Search';
import Button from '@/components/Button';
import NavLink from '@/components/NavLink';

const menus = [
  {
    title: '个性推荐',
    href: '/',
  },
  {
    title: '歌单',
    href: '/song-sheet',
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
      <div className="side-bar-header">
        <Button.Icon type="Group-" className="text-white text-18 mx-4" hover></Button.Icon>
        <Button.Icon
          type="Group-1"
          className="text-white text-18 mx-4 "
          hover
          disabled></Button.Icon>
      </div>
      <nav className="flex-1 ml-10">
        {menus.map(({ href, title }) => (
          <NavLink href={href} key={href} activeClass="nav-link-active">
            <a href={href} className="text-gray-500 hover:text-gray-400 px-14">
              {title}
            </a>
          </NavLink>
        ))}
      </nav>
      <div className="nav-toolbar mr-10">
        <Search />
        <Button.Icon type="shezhi" className="text-white text-18" hover />
        <Button.Icon type="youjian" className="text-white text-18" hover />
        <Button.Icon type="pifu" className="text-white text-18" hover />
      </div>
    </header>
  );
};

export default NavBar;
