import React from 'react';

import Layout from '@/layout';

import RankBlock, { RankBlockProps } from '@/blocks/RankBlock';
import { queryTopList } from '@/api/toplist';

const RankPage = (props: RankBlockProps) => {
  return (
    <Layout>
      <RankBlock {...props} />
    </Layout>
  );
};

RankPage.getInitialProps = async () => {
  const { artistToplist, list } = await queryTopList();

  return {
    topList: list,
    artistToplist,
  } as RankBlockProps;
};

export default RankPage;
