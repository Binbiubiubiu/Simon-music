import React from 'react';

import Layout from '@/layout';

import { NextPage } from 'next';
import { queryRecommendSongsSheet, SongSheetModel } from '@/api/song-sheet';

import Title from '@/modules/Title';
import SongSheet from '@/modules/SongSheet';

type SongSheetPageProps = {
  recommendSongSheet: SongSheetModel[];
};

const SongSheetPage: NextPage<SongSheetPageProps> = (props) => {
  const { recommendSongSheet } = props;

  return (
    <Layout>
      <section className="section">
        <Title level={2} href="/">
          推荐歌单
        </Title>
        <SongSheet dataSource={recommendSongSheet} />
      </section>
    </Layout>
  );
};

SongSheetPage.getInitialProps = async () => {
  return {
    recommendSongSheet: await queryRecommendSongsSheet(),
  } as SongSheetPageProps;
};

export default SongSheetPage;
