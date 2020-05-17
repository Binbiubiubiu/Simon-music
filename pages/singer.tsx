import React from 'react';

import Layout from '@/layout';

import SingerBlock, { SingerBlockProps } from '@/blocks/SingerBlock';

const SingerPage = (props: SingerBlockProps) => {
  return (
    <Layout>
      <SingerBlock {...props} />
    </Layout>
  );
};

SingerPage.getInitialProps = async () => {
  return {} as SingerBlockProps;
};

export default SingerPage;
