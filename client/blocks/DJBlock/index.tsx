import React, { FC } from 'react';

import {
  DJBannerModel,
  DJCatModel,
  DJPayGiftModel,
  DJRecommendModel,
  DJRecommendTypeModel,
} from '@/api/dj';

import Swiper from '@/components/Swiper';
import Title from '@/components/Title';
import WheelBar from './components/WheelBar';
import PayGift from './components/PayGift';
import Recommend from './components/Recommend';
import PageContainer from '@/components/PageContainer';

export interface DJBlockProps {
  banners: DJBannerModel[];
  catList: DJCatModel[];
  payGiftList: DJPayGiftModel[];
  recommendList: DJRecommendModel[];
  recommendTypeList: Array<DJRecommendTypeModel[]>;
}

const DJBlock: FC<DJBlockProps> = (props) => {
  const { banners, catList, payGiftList, recommendList, recommendTypeList } = props;
  return (
    <PageContainer>
      <Swiper dataSource={banners}></Swiper>
      <WheelBar dataSource={catList} />
      <section className="section">
        <Title level={2} href="/">
          付费精品
        </Title>
        <PayGift dataSource={payGiftList} />
      </section>
      <section className="section">
        <Title level={2}>电台个性推荐</Title>
        <Recommend dataSource={recommendList} />
      </section>
      <section className="section">
        <Title level={2} href="/">
          创作|翻唱
        </Title>
        <Recommend dataSource={recommendTypeList[0]} />
      </section>
      <section className="section">
        <Title level={2} href="/">
          3D|电子
        </Title>
        <Recommend dataSource={recommendTypeList[1]} />
      </section>
      <section className="section">
        <Title level={2} href="/">
          音乐故事
        </Title>
        <Recommend dataSource={recommendTypeList[2]} />
      </section>
      <section className="section">
        <Title level={2} href="/">
          情感调频
        </Title>
        <Recommend dataSource={recommendTypeList[3]} />
      </section>
      <section className="section">
        <Title level={2} href="/">
          二次元
        </Title>
        <Recommend dataSource={recommendTypeList[4]} />
      </section>
    </PageContainer>
  );
};

export default DJBlock;
