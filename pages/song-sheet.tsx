import React from 'react';

import Layout from '@/layout';

import { NextPage } from 'next';
import {
  queryTopPlaylistHighquality,
  queryHotSongSheetTag,
  queryTopPlaylist,
  queryCatlist,
} from '@/api/2';

import SongSheetBlock, { SongSheetBlockProps } from '@/blocks/SongSheetBlock';

const SongSheetPage: NextPage<SongSheetBlockProps> = (props) => {
  return (
    <Layout>
      <SongSheetBlock {...props} />
    </Layout>
  );
};

SongSheetPage.getInitialProps = async () => {
  const { playlists, total } = await queryTopPlaylist('全部');
  const topBarList = await queryTopPlaylistHighquality('全部');

  return {
    initedTopBarInfo: topBarList[0],
    initedCatList: await queryCatlist(),
    initedHotTags: await queryHotSongSheetTag(),
    initedSongSheetData: {
      list: playlists,
      total,
      limit: 100,
      offset: 0,
    },
  } as SongSheetBlockProps;
};

export default SongSheetPage;
