import React, { FC } from 'react';
import cls from 'classnames';
import Link from 'next/link';
import './style.less';
import Icon from '@/components/Icon';

interface SideBarProps {
  width?: number;
}

const SideBar: FC<SideBarProps> = () => {
  return (
    <aside className="side-bar">
      <div className="user-info">
        <img
          className="user-avator"
          src="https://p4.music.126.net/lRE0QHTUkA_DxlB14uzSqg==/109951164207703933.jpg?param=200y200"
          alt="avator"
        />
        <div className="user-name text-overflow">今天又懒得加班</div>
      </div>
      <MenuItem href="/" icon="wangyiyunyinlezizhi-copy" active>
        发现音乐
      </MenuItem>
      <MenuItem href="/" icon="xinhao">
        私人FM
      </MenuItem>
      <MenuItem href="/" icon="shipin">
        视频
      </MenuItem>
      <MenuItem href="/" icon="pengyou">
        朋友
      </MenuItem>

      <div className="menu-subtitle">我的音乐</div>
      <MenuItem href="/" icon="xiazai">
        下载管理
      </MenuItem>
      <MenuItem href="/" icon="shoucang">
        我的收藏
      </MenuItem>
      <div className="menu-subtitle">创建歌单</div>
      <MenuItem href="/" icon="xihuan">
        我喜欢的音乐
      </MenuItem>
    </aside>
  );
};

interface MenuItemProps {
  href: string;
  icon: string;
  active?: boolean;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { href, icon, active, children } = props;
  return (
    <Link href={href}>
      <span className={cls('menu-item', { 'menu-item-active': active })}>
        <Icon classname="mr-8" type={icon} size={18} />
        {children}
      </span>
    </Link>
  );
};

export default SideBar;
