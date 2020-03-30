// eslint-disable-next-line @typescript-eslint/no-unused-vars
import request from '@/utils/request';
import mockMv from './mock/queryRecommendMv';

export interface MvModel {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: null;
  duration: number;
  playCount: number;
  subed: boolean;
  artists: {
    id: number;
    name: string;
  }[];
  artistName: string;
  artistId: number;
  alg: string;
}

export const queryReconmmendMv = async () => {
  type ReturnBodyType = {
    code: number;
    category: number;
    result: MvModel[];
  };
  // const returnBody = (await request.get<{}, ReturnBodyType>(`/personalized/mv`)).result;
  // return returnBody;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (mockMv as any).result; //returnBody;
};
