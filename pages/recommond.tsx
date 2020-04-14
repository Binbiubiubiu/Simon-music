import React from 'react';

import Layout from '@/layout';

import {
  queryRecommendBanners,
  queryRecommendSongsSheet,
  queryPrivateContent,
  queryNewSongs,
  queryReconmmendMv,
  queryDjProgram,
} from '@/api/recommond';
import RecommondBlock, { RecommondBlockProps } from '@/blocks/RecommondBlock';

const RecommondPage = (props: RecommondBlockProps) => {
  return (
    <Layout>
      <RecommondBlock {...props} />
    </Layout>
  );
};

RecommondPage.getInitialProps = async () => {
  return {
    banners: await queryRecommendBanners(),
    recommendSongSheet: await queryRecommendSongsSheet(),
    privateContent: await queryPrivateContent(),
    newSongs: await queryNewSongs(),
    recommendMv: await queryReconmmendMv(),
    djProgram: await queryDjProgram(),
  } as RecommondBlockProps;
};

export default RecommondPage;
