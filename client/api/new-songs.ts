// eslint-disable-next-line @typescript-eslint/no-unused-vars
import request from '@/utils/request';
import mockNewSong from './mock/newsong';

export interface NewSongModel {
  id: number;
  type: number;
  name: string;
  copywriter: null;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: null;
  song: {
    name: string;
    id: number;
    alias: string[];
    artists: {
      id: number;
      name: string;
    }[];
    mvid: number;
  };
  alg: string;
}

export const queryNewSongs = async () => {
  type ReturnBodyType = {
    code: number;
    category: number;
    result: NewSongModel[];
  };
  // const returnBody = (await request.get<{}, ReturnBodyType>(`/personalized/newsong`)).result;
  // return returnBody;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (mockNewSong as any).result; //returnBody;
};
