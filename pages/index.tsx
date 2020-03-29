import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector, useDispatch, connect, ConnectedProps } from 'react-redux';

import Layout from '@/layout';
import Swiper from '@/components/Swiper';

import { NextPage } from 'next';
import { RootState } from '@/store';
import { queryRecommendBanners, BannerModel } from '@/api/banner';
import { queryRecommendSongsSheet, SongSheetModel } from '@/api/song-sheet';
import { queryPrivateContent, PrivateContentModel } from '@/api/private-content';

import Title from '@/modules/Title';
import SongSheet from '@/modules/SongSheet';
import PrivateContent from '@/modules/PrivateContent';
import NewSongs from '@/modules/NewSongs';
import { queryNewSongs, NewSongModel } from '@/api/new-songs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type IndexPageProps = ConnectedProps<typeof connector> & {
  banners: BannerModel[];
  recommendSongSheet: SongSheetModel[];
  privateContent: PrivateContentModel[];
  newSongs: NewSongModel[];
};

const IndexPage: NextPage<IndexPageProps> = (props) => {
  const { banners, recommendSongSheet, privateContent, newSongs } = props;

  return (
    <Layout>
      <Swiper dataSource={banners}></Swiper>
      <section className="section">
        <Title level={2} href="/">
          推荐歌单
        </Title>
        <SongSheet dataSource={recommendSongSheet} />
      </section>
      <section className="section">
        <Title level={2} href="/">
          独家放送
        </Title>
        <PrivateContent dataSource={privateContent} />
      </section>
      <section className="section">
        <Title level={2} href="/">
          最新音乐
        </Title>
        <NewSongs dataSource={newSongs} />
      </section>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  return {
    banners: await queryRecommendBanners(),
    recommendSongSheet: await queryRecommendSongsSheet(),
    privateContent: await queryPrivateContent(),
    newSongs: await queryNewSongs(),
  } as IndexPageProps;
};

export default connector(IndexPage);
