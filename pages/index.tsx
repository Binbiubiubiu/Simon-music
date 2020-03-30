import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector, useDispatch, connect, ConnectedProps } from 'react-redux';

import Layout from '@/layout';
import Swiper from '@/components/Swiper';

import { NextPage, GetServerSideProps, GetStaticProps } from 'next';
import { RootState } from '@/store';
import { queryRecommendBanners, BannerModel } from '@/api/banner';
import { queryRecommendSongsSheet, SongSheetModel } from '@/api/song-sheet';
import { queryPrivateContent, PrivateContentModel } from '@/api/private-content';
import { queryNewSongs, NewSongModel } from '@/api/new-songs';
import { queryReconmmendMv, MvModel } from '@/api/mv';
import { queryDjProgram, DjProgramModel } from '@/api/djprogram';

import Title from '@/modules/Title';
import SongSheet from '@/modules/SongSheet';
import PrivateContent from '@/modules/PrivateContent';
import NewSongs from '@/modules/NewSongs';
import Mv from '@/modules/Mv';
import DjProgram from '@/modules/DjProgram';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type IndexPageProps = ConnectedProps<typeof connector> & {
  banners: BannerModel[];
  recommendSongSheet: SongSheetModel[];
  privateContent: PrivateContentModel[];
  newSongs: NewSongModel[];
  recommendMv: MvModel[];
  djProgram: DjProgramModel[];
};

const IndexPage = (props: IndexPageProps) => {
  const { banners, recommendSongSheet, privateContent, newSongs, recommendMv, djProgram } = props;

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
      <section className="section">
        <Title level={2} href="/">
          推荐MV
        </Title>
        <Mv dataSource={recommendMv} />
      </section>
      <section className="section">
        <Title level={2} href="/">
          主播电台
        </Title>
        <DjProgram dataSource={djProgram} />
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
    recommendMv: await queryReconmmendMv(),
    djProgram: await queryDjProgram(),
  } as IndexPageProps;
};

export default IndexPage;
