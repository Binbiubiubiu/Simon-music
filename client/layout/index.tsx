import React, { FC } from 'react';
import './style.less';

import Head from 'next/head';
import NavBar from '@/components/NavBar';
import BottomPlayer from '@/components/BottomPlayer';
import SideBar from '@/components/Sidebar';

interface LayoutProps {
  title?: string;
}

const Layout: FC<LayoutProps> = (props) => {
  const { title = process.env.WEBSITE_TITLE, children } = props;

  return (
    <div className="layout-wrapper">
      <Head>
        <title>{title}</title>
      </Head>
      <SideBar />
      <main className="layout-content">
        <NavBar></NavBar>
        {children}
      </main>
      <BottomPlayer />
    </div>
  );
};

export default Layout;
