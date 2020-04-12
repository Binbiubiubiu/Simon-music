import request from '@/utils/request';

/* -------------------------------------------------------------------------- */
/*                                  首页banner                                 */
/* -------------------------------------------------------------------------- */

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
  const returnBody = (await request.get<{}, ReturnBodyType>('/banner')).banners;
  return returnBody;
};

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
  const returnBody = (await request.get<{}, ReturnBodyType>(`/personalized?limit=${limit}`)).result;
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                    独家放送                                   */
/* -------------------------------------------------------------------------- */

export interface PrivateContentModel {
  id: number;
  url: string;
  picUrl: string;
  sPicUrl: string;
  type: string;
  copywriter: string;
  name: string;
  alg: string;
}

export const queryPrivateContent = async () => {
  type ReturnBodyType = {
    code: number;
    name: string;
    result: PrivateContentModel[];
  };
  const returnBody = (await request.get<{}, ReturnBodyType>(`/personalized/privatecontent`)).result;
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                    最新音乐                                   */
/* -------------------------------------------------------------------------- */

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
  const returnBody = (await request.get<{}, ReturnBodyType>(`/personalized/newsong`)).result;
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                    推荐mv                                   */
/* -------------------------------------------------------------------------- */

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
  const returnBody = (await request.get<{}, ReturnBodyType>(`/personalized/mv`)).result;
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                    主播电台                                   */
/* -------------------------------------------------------------------------- */

export interface DjProgramModel {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: null;
  program: {
    dj: {
      nickname: string;
    };
    radio: {
      name: string;
    };
  };
  alg: string;
}

export const queryDjProgram = async () => {
  type ReturnBodyType = {
    code: number;
    category: number;
    result: DjProgramModel[];
  };
  const returnBody = (await request.get<{}, ReturnBodyType>('/personalized/djprogram')).result;
  return returnBody;
};
