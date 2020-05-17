import request from '@/utils/request';

/* ;-------------------------------------------------------------------------- */
/*                                     排行榜                                    */
/* -------------------------------------------------------------------------- */

export interface TopListItem {
  subscribers: [];
  subscribed: null;
  creator: null;
  artists: null;
  tracks: null;
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl: null;
  titleImage: number;
  titleImageUrl: null;
  englishTitle: null;
  opRecommend: boolean;
  recommendInfo: null;
  trackNumberUpdateTime: number;
  adType: number;
  subscribedCount: number;
  cloudTrackCount: number;
  createTime: number;
  highQuality: boolean;
  userId: number;
  updateTime: number;
  coverImgId: number;
  anonimous: boolean;
  newImported: boolean;
  specialType: number;
  totalDuration: number;
  coverImgUrl: string;
  trackCount: number;
  commentThreadId: string;
  privacy: number;
  trackUpdateTime: number;
  playCount: number;
  tags: [];
  ordered: boolean;
  description: string;
  status: number;
  name: string;
  id: number;
  coverImgId_str: string;
  TopistType: string;
}

export interface ArtistToplist {
  coverUrl: string;
  name: string;
  upateFrequency: string;
  position: number;
  updateFrequency: string;
}

export const queryTopList = async () => {
  type ReturnBodyType = {
    code: number;
    list: TopListItem[];
    artistToplist: ArtistToplist;
  };
  const returnBody = await request.get<{}, ReturnBodyType>(`/toplist`);
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                   查询排行榜详情                                  */
/* -------------------------------------------------------------------------- */

export type TracksDetail = {
  name: string;
  ar: Array<{
    name: string;
  }>;
  alia: string[];
  id: number;
};

interface PlaylistDetail {
  tracks: Array<TracksDetail>;
}

export const queryToplistDetail = async (type) => {
  type ReturnBodyType = {
    code: number;
    playlist: PlaylistDetail;
  };
  const returnBody = (await request.get<{}, ReturnBodyType>(`/top/list?idx=${type}`)).playlist
    .tracks;
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                 获取排行榜中的歌手榜                                 */
/* -------------------------------------------------------------------------- */

export interface Aartist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: string[];
  trans: string;
  musicSize: number;
  topicPerson: number;
  lastRank: number;
  score: number;
  picId_str: string;
  img1v1Id_str: string;
}

export interface TopAartistDetail {
  artists: Array<Aartist>;
  updateTime: number;
  type: number;
}

export const queryTopAartistDetail = async () => {
  type ReturnBodyType = {
    code: number;
    list: TopAartistDetail;
  };
  const returnBody = (await request.get<{}, ReturnBodyType>(`/toplist/artist`)).list.artists;
  return returnBody;
};
