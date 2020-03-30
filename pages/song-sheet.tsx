import React from 'react';

import Layout from '@/layout';

import { NextPage } from 'next';
import {
  queryRecommendSongsSheet,
  SongSheetModel,
  queryTopPlaylistHighquality,
  HighqualityModel,
} from '@/api/song-sheet';

import SongSheet from '@/modules/SongSheet';
import SongSheetBar from '@/modules/SongSheetBar';

type SongSheetPageProps = {
  recommendSongSheet: SongSheetModel[];
  songSheetBarInfo: HighqualityModel;
};

const SongSheetPage: NextPage<SongSheetPageProps> = (props) => {
  const { recommendSongSheet, songSheetBarInfo } = props;

  return (
    <Layout>
      <SongSheetBar info={songSheetBarInfo} />
      <section className="section">
        <SongSheet dataSource={recommendSongSheet} />
      </section>
    </Layout>
  );
};

SongSheetPage.getInitialProps = async () => {
  return {
    recommendSongSheet: await queryRecommendSongsSheet(),
    songSheetBarInfo: (await queryTopPlaylistHighquality(1))[0],
  } as SongSheetPageProps;
};

export default SongSheetPage;
