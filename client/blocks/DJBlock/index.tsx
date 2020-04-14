import React, { FC } from 'react';

import { DJBannerModel, DJCatModel } from '@/api/dj';

import Swiper from '@/components/Swiper';
import WheelBar from './components/WheelBar';

export interface DJBlockProps {
  banners: DJBannerModel[];
  catList: DJCatModel[];
}

const DJBlock: FC<DJBlockProps> = (props) => {
  const { banners, catList } = props;
  return (
    <>
      <Swiper dataSource={banners}></Swiper>
      <WheelBar dataSource={catList} />
    </>
  );
};

export default DJBlock;
