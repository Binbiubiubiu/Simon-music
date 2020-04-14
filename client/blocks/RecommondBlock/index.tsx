import React, { FC } from 'react';
import {
  BannerModel,
  SongSheetModel,
  PrivateContentModel,
  NewSongModel,
  MvModel,
  DjProgramModel,
} from '@/api/recommond';

import Swiper from '@/components/Swiper';
import Title from '@/components/Title';
import { RecommondSongSheet, PrivateContent, NewSongs, Mv, DjProgram } from './components';

export type RecommondBlockProps = {
  banners: BannerModel[];
  recommendSongSheet: SongSheetModel[];
  privateContent: PrivateContentModel[];
  newSongs: NewSongModel[];
  recommendMv: MvModel[];
  djProgram: DjProgramModel[];
};

const RecommondBlock: FC<RecommondBlockProps> = (props) => {
  const { banners, recommendSongSheet, privateContent, newSongs, recommendMv, djProgram } = props;

  return (
    <>
      <Swiper dataSource={banners}></Swiper>
      <section className="section">
        <Title level={2} href="/">
          推荐歌单
        </Title>
        <RecommondSongSheet dataSource={recommendSongSheet} />
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
    </>
  );
};

export default RecommondBlock;
