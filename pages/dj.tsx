import React from 'react';

import Layout from '@/layout';

import DJBlock, { DJBlockProps } from '@/blocks/DJBlock';
import { queryDJBanners, queryDJCatList } from '@/api/dj';

const DJPage = (props: DJBlockProps) => {
  return (
    <Layout>
      <DJBlock {...props} />
    </Layout>
  );
};

DJPage.getInitialProps = async () => {
  return {
    banners: await queryDJBanners(),
    catList: await queryDJCatList(),
  } as DJBlockProps;
};

export default DJPage;
