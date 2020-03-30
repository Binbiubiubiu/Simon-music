import request from '@/utils/request';
import mockSongsSheet from './mock/queryRecommendSongsSheet';
import mockPlaylistHighquality from './mock/queryPlaylistHighquality';

/* -------------------------------------------------------------------------- */
/*                                    推荐歌单                                    */
/* -------------------------------------------------------------------------- */

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

export const queryRecommendSongsSheet = async (limit = 10) => {
  type ReturnBodyType = {
    code: number;
    hasTaste: boolean;
    category: number;
    result: SongSheetModel[];
  };
  // const returnBody = (await request.get<{}, ReturnBodyType>(`/personalized?limit=${limit}`)).result;
  // return returnBody;
  return (mockSongsSheet as any).result; //returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                    精品歌单                                    */
/* -------------------------------------------------------------------------- */

export interface HighqualityModel {
  name: string;
  id: number;
  trackNumberUpdateTime: number;
  status: number;
  userId: number;
  createTime: number;
  updateTime: number;
  subscribedCount: number;
  trackCount: number;
  cloudTrackCount: number;
  coverImgUrl: string;
  coverImgId: number;
  description: string;
  tags: string[];
  playCount: number;
  trackUpdateTime: number;
  specialType: number;
  totalDuration: number;
  creator: {};
  tracks: null;
  subscribers: {}[];
  subscribed: boolean;
  commentThreadId: string;
  newImported: boolean;
  adType: number;
  highQuality: boolean;
  privacy: number;
  ordered: boolean;
  anonimous: boolean;
  coverStatus: number;
  recommendInfo: {};
  shareCount: number;
  coverImgId_str: string;
  commentCount: number;
  copywriter: string;
  tag: string;
}

export const queryTopPlaylistHighquality = async (limit = 10) => {
  type ReturnBodyType = {
    code: number;
    lasttime: number;
    more: number;
    total: number;
    playlists: HighqualityModel[];
  };
  // const returnBody = (await request.get<{}, ReturnBodyType>(`/top/playlist/highquality?limit=${limit}`)).playlists;
  // return returnBody;
  return (mockPlaylistHighquality as any).playlists; //returnBody;
};
