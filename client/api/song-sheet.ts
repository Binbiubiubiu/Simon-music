import request from '@/utils/request';

export enum OrderEnum {
  NEW = 'new',
  HOT = 'hot',
}

export const DEFAULT_CAT = '全部';
export const DEFAULT_PAGESIZE = 100;

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

export const queryTopPlaylistHighquality = async (
  cat = DEFAULT_CAT,
  current = 1,
  size = DEFAULT_PAGESIZE,
  order = OrderEnum.NEW,
) => {
  type ReturnBodyType = {
    code: number;
    lasttime: number;
    more: number;
    total: number;
    playlists: HighqualityModel[];
  };
  const returnBody = (
    await request.get<{}, ReturnBodyType>(
      `/top/playlist/highquality?cat=${encodeURI(cat)}&offset=${(current - 1) *
        size}&limit=${size}&order=${order}`,
    )
  ).playlists;
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                   热门歌单分类                                  */
/* -------------------------------------------------------------------------- */

export interface HotSongSheetTag {
  activity: boolean;
  usedCount: number;
  hot: boolean;
  position: number;
  category: number;
  createTime: number;
  name: string;
  id: number;
  type: number;
}

export const queryHotSongSheetTag = async () => {
  type ReturnBodyType = {
    code: number;
    tags: HotSongSheetTag[];
  };
  const returnBody = (await request.get<{}, ReturnBodyType>(`/playlist/hot`)).tags;
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                    歌单类型                                   */
/* -------------------------------------------------------------------------- */

export type CatListType = {
  all: {
    name: string;
  };
  sub: {
    name: string;
    category: number;
    hot: boolean;
  }[][];
  categories: {
    [key: number]: string;
  };
};

export const queryCatlist = async () => {
  type ReturnBodyType = {
    code: number;
    all: {
      name: string;
    };
    sub: {
      name: string;
      category: number;
      hot: boolean;
    }[];
    categories: string[];
  };

  const { all, sub, categories } = await request.get<{}, ReturnBodyType>(`/playlist/catlist`);

  return {
    all,
    categories: Object.values(categories),
    sub: sub.reduce((t: any, item) => {
      if (!t[item.category]) {
        t[item.category] = [];
      }
      t[item.category].push(item);
      return t;
    }, []),
  };
};

/* -------------------------------------------------------------------------- */
/*                                    歌单接口                                   */
/* -------------------------------------------------------------------------- */

export interface TopPlayListModel {
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
  creator: {
    nickname: string;
    expertTags: string[];
    vipType: number;
    userType: number;
  };
  tracks: null;
  subscribers: [];
  subscribed: boolean;
  commentThreadId: number;
  newImported: boolean;
  adType: number;
  highQuality: boolean;
  privacy: number;
  ordered: boolean;
  anonimous: boolean;
  coverStatus: number;
  recommendInfo: null;
  shareCount: number;
  coverImgId_str: string;
  commentCount: number;
}

export const queryTopPlaylist = async (
  cat = DEFAULT_CAT,
  current = 1,
  size = DEFAULT_PAGESIZE,
  order = OrderEnum.HOT,
) => {
  type ReturnBodyType = {
    code: number;
    playlists: TopPlayListModel[];
    total: number;
    more: number;
    cat: string;
  };

  const returnBody = await request.get<{}, ReturnBodyType>(
    `/top/playlist?cat=${encodeURI(cat)}&offset=${(current - 1) *
      size}&limit=${size}&order=${order}`,
  );
  return returnBody;
};
