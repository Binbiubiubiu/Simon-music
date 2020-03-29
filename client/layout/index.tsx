import React, { FC } from 'react';
import './style.less';

import Head from 'next/head';
import NavBar from './components/NavBar';
import BottomPlayer from './components/BottomPlayer';
import SideBar from './components/Sidebar';

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
      <NavBar></NavBar>
      <main className="layout-content">
        <SideBar />
        <div className="overflow-y-auto flex-1">
          <div className="mx-auto" style={{ maxWidth: 1040, minWidth: 745, padding: '0 30px' }}>
            {children}
          </div>
        </div>
      </main>
      <BottomPlayer />
    </div>
  );
};

export default Layout;
