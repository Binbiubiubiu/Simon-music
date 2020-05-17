import React, { FC } from 'react';
import Title from '@/components/Title';
import { TopListItem, ArtistToplist } from '@/api/toplist';
import { RankCard, SingerRankCard } from './components/RankCard';
import RankGrid from './components/RankGrid';

const topFourType = [3, 0, 2, 1];

export interface RankBlockProps {
  topList: TopListItem[];
  artistToplist: ArtistToplist;
}

const RankBlock: FC<RankBlockProps> = (props) => {
  const { topList, artistToplist } = props;
  const topListFour = topList.slice(0, 4);
  const topListRest = topList.slice(4);

  return (
    <>
      <section className="section mt-24">
        <Title level={2}>官方榜</Title>
        {topListFour.map((item, index) => (
          <RankCard type={topFourType[index]} rank={item} key={item.id}></RankCard>
        ))}
        <SingerRankCard rank={artistToplist} />
      </section>
      <section className="section mt-24">
        <Title level={2}>全球榜</Title>
        <RankGrid dataSource={topListRest}></RankGrid>
      </section>
    </>
  );
};

export default RankBlock;
