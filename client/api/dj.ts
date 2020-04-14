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
