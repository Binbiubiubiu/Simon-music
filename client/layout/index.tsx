import React, { FC, useRef } from 'react';
import './style.less';

import Head from 'next/head';
import NavBar from './components/NavBar';
import BottomPlayer from './components/BottomPlayer';
import SideBar from './components/Sidebar';
import { LayoutProvider } from './context';

interface LayoutProps {
  title?: string;
}

const Layout: FC<LayoutProps> = (props) => {
  const { title = process.env.WEBSITE_TITLE, children } = props;

  const scrollEl = useRef<HTMLDivElement>(null);

  return (
    <div className="layout-wrapper">
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar></NavBar>
      <main className="layout-content">
        <SideBar />
        <LayoutProvider
          value={{
            scrollToTop: () => {
              scrollEl.current?.scrollTo({ top: 0 });
            },
          }}>
          <div ref={scrollEl} className="overflow-y-auto flex-1">
            <div className="mx-auto" style={{ maxWidth: 1040, minWidth: 745, padding: '0 30px' }}>
              {children}
            </div>
          </div>
        </LayoutProvider>
      </main>
      <BottomPlayer />
    </div>
  );
};

export default Layout;
