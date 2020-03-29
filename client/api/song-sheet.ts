import request from '@/utils/request';
import mockSongsSheet from './mock/queryRecommendSongsSheet';

export interface SongSheetModel {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

export const queryRecommendSongsSheet = async (limit = 9) => {
  type ReturnBodyType = {
    code: number;
    featureFirst: boolean;
    haveRcmdSongs: boolean;
    recommend: SongSheetModel[];
  };
  // const returnBody = (await request.get<{}, ReturnBodyType>(`/personalized?limit=${limit}`)).recommend;
  // console.log(returnBody);
  // return returnBody;
  return (mockSongsSheet as any).result; //returnBody;
};
