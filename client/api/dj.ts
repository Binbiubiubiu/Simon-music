import request from '@/utils/request';

/* -------------------------------------------------------------------------- */
/*                                  电台banner                                 */
/* -------------------------------------------------------------------------- */

export interface DJBannerModel {
  targetId: number;
  targetType: number;
  pic: string;
  url: string;
  typeTitle: string;
  exclusive: boolean;
}

export const queryDJBanners = async () => {
  type ReturnBodyType = {
    code: number;
    data: DJBannerModel[];
  };
  const returnBody = (await request.get<{}, ReturnBodyType>('/dj/banner')).data;
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                    电台推荐                                   */
/* -------------------------------------------------------------------------- */

export interface DJCatModel {
  picPCWhite: number;
  picPCBlack: number;
  picPCWhiteStr: string;
  picPCWhiteUrl: string;
  picPCBlackStr: string;
  picPCBlackUrl: string;
  name: string;
  id: number;
}

export const queryDJCatList = async () => {
  type ReturnBodyType = {
    code: number;
    categories: DJCatModel[];
  };
  const returnBody = (await request.get<{}, ReturnBodyType>('/dj/catelist')).categories;
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                    电台 - 付费精选                                   */
/* -------------------------------------------------------------------------- */

export interface DJPayGiftModel {
  id: number;
  name: string;
  rcmdText: string;
  radioFeeType: number;
  feeScope: number;
  picUrl: string;
  programCount: number;
  playCount: number;
  alg: string;
  originalPrice: number;
  discountPrice: number;
  lastProgramName: string;
  traceId: number;
}

export const queryDJPayGiftList = async (limit = 4) => {
  type ReturnBodyType = {
    code: number;
    msg: string;
    data: {
      hasMore: boolean;
      list: DJPayGiftModel[];
    };
  };
  const returnBody = (await request.get<{}, ReturnBodyType>(`/dj/paygift?limit=${limit}`)).data
    .list;
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                 电台 - 个性推荐;                                 */
/* -------------------------------------------------------------------------- */

export interface DJRecommendModel {
  id: number;
  name: string;
  picUrl: string;
  programCount: number;
  subCount: number;
  createTime: number;
  categoryId: number;
  category: string;
  rcmdtext: string;
  radioFeeType: number;
  feeScope: number;
  dj: {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags: null;
    experts: null;
    djStatus: number;
    vipType: number;
    remarkName: null;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    avatarImgId_str: string;
  };
  copywriter: string;
}

export const queryDJRecommendList = async (limit = 6) => {
  type ReturnBodyType = {
    code: number;
    name: string;
    djRadios: DJRecommendModel[];
  };
  const returnBody = (
    await request.get<{}, ReturnBodyType>(`/dj/recommend?limit=${limit}`)
  ).djRadios.slice(0, 6);
  return returnBody;
};

/* -------------------------------------------------------------------------- */
/*                                 电台 - 个性推荐;                                 */
/* -------------------------------------------------------------------------- */

export interface DJRecommendTypeModel {
  dj: {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: number;
    authority: number;
    mutual: boolean;
    expertTags: string[];
    experts: null;
    djStatus: number;
    vipType: number;
    remarkName: null;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
  };
  category: string;
  buyed: boolean;
  price: number;
  originalPrice: number;
  discountPrice: null;
  purchaseCount: number;
  lastProgramName: string;
  videos: null;
  finished: boolean;
  underShelf: boolean;
  liveInfo: null;
  radioFeeType: number;
  lastProgramCreateTime: number;
  lastProgramId: number;
  picUrl: string;
  categoryId: number;
  picId: number;
  createTime: number;
  feeScope: number;
  programCount: number;
  desc: string;
  subCount: number;
  name: string;
  id: number;
  rcmdtext: string;
  lastUpdateProgramName: string;
}

export const queryDJRecommendTypeList = async (type = 6) => {
  type ReturnBodyType = {
    code: number;
    hasMore: false;
    djRadios: DJRecommendTypeModel[];
  };
  const returnBody = (
    await request.get<{}, ReturnBodyType>(`/dj/recommend/type?type=${type}`)
  ).djRadios.slice(0, 6);
  return returnBody;
};
