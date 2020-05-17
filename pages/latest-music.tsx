import React from 'react';

import Layout from '@/layout';

import LatestMusicBlock, { LatestMusicBlockProps } from '@/blocks/LatestMusicBlock';

const LatestMusicPage = (props: LatestMusicBlockProps) => {
  return (
    <Layout>
      <LatestMusicBlock {...props} />
    </Layout>
  );
};

LatestMusicPage.getInitialProps = async () => {
  return {} as LatestMusicBlockProps;
};

export default LatestMusicPage;
