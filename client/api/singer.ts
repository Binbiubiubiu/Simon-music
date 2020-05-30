import request from '@/utils/request';

/* -------------------------------------------------------------------------- */
/*                                    歌手列表                                    */
/* -------------------------------------------------------------------------- */

export interface ArtistModel {
  img1v1Id: number;
  topicPerson: number;
  alias: string[];
  picId: number;
  albumSize: number;
  img1v1Url: string;
  picUrl: string;
  trans: string;
  followed: boolean;
  briefDesc: string;
  musicSize: number;
  name: string;
  id: number;
  accountId: number;
  picId_str: string;
  transNames: string[];
  img1v1Id_str: string;
}

export const queryArtistList = async (
  search: {
    type: number;
    area: number;
    initial: number | string;
  },
  current = 1,
  size = 60,
) => {
  const { type = -1, area = -1, initial = -1 } = search;
  type ReturnBodyType = {
    code: number;
    more: boolean;
    artists: ArtistModel[];
  };
  const returnBody = (
    await request.get<{}, ReturnBodyType>(
      `/artist/list?type=${type}&offset=${(current - 1) *
        size}&limit=${size}&area=${area}&initial=${initial}`,
    )
  ).artists;
  return returnBody;
};
