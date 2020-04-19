import React from 'react';

import Layout from '@/layout';

import DJBlock, { DJBlockProps } from '@/blocks/DJBlock';
import {
  queryDJBanners,
  queryDJCatList,
  queryDJPayGiftList,
  queryDJRecommendList,
  queryDJRecommendTypeList,
} from '@/api/dj';

const DJPage = (props: DJBlockProps) => {
  return (
    <Layout>
      <DJBlock {...props} />
    </Layout>
  );
};

DJPage.getInitialProps = async () => {
  const types = [2001, 10002, 3, 2, 3001];

  return {
    banners: await queryDJBanners(),
    catList: await queryDJCatList(),
    payGiftList: await queryDJPayGiftList(),
    recommendList: await queryDJRecommendList(),
    recommendTypeList: await Promise.all(types.map((type) => queryDJRecommendTypeList(type))),
  } as DJBlockProps;
};

export default DJPage;
