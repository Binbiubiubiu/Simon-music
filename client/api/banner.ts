// eslint-disable-next-line @typescript-eslint/no-unused-vars
import request from '@/utils/request';
import mockBanners from './mock/queryRecommendBanners';

export interface BannerModel {
  imageUrl: string;
  targetId: number;
  typeTitle: string;
  url: string;
}

export const queryRecommendBanners = async () => {
  type ReturnBodyType = {
    code: number;
    banners: BannerModel[];
  };
  // const returnBody = (await request.get<{}, ReturnBodyType>('/banner')).banners;
  // console.log(returnBody);
  // return returnBody;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (mockBanners as any).banners;
};
