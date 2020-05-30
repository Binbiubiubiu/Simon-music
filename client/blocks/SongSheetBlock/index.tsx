import React, { FC, useReducer, useEffect, useRef } from 'react';
import {
  HighqualityModel,
  HotSongSheetTag,
  TopPlayListModel,
  queryTopPlaylistHighquality,
  queryTopPlaylist,
  CatListType,
} from '@/api/song-sheet';
import Pagination from '@/components/Pagination';
import TagBtn from './components/TagBtn';
import TagGroup from './components/TagGroup';
import SongSheetBar from './components/SongSheetBar';
import SongSheetList from './components/SongSheetList';
import PageContainer from '@/components/PageContainer';

export type SongSheetBlockProps = {
  initedTopBarInfo: HighqualityModel;
  initedCatList: CatListType;
  initedHotTags: HotSongSheetTag[];
  initedSongSheetData: { offset: number; limit: number; total: number; list: TopPlayListModel[] };
};

interface SongSheetBlockState {
  topBarInfo: HighqualityModel;
  currentTag: string;
  list: TopPlayListModel[];
  pagination: { current: number; size: number; total: number };
}

const songSheetBlockReducer = (
  state: SongSheetBlockState,
  payload: Partial<SongSheetBlockState>,
) => {
  return { ...state, ...payload };
};

const SongSheetBlock: FC<SongSheetBlockProps> = (props) => {
  const { initedTopBarInfo, initedCatList, initedHotTags, initedSongSheetData } = props;

  const [{ topBarInfo, currentTag, list, pagination }, dispatch] = useReducer(
    songSheetBlockReducer,
    {
      topBarInfo: initedTopBarInfo,
      currentTag: '全部歌单',
      list: initedSongSheetData.list,
      pagination: {
        current: 1,
        size: 100,
        total: initedSongSheetData.total,
      },
    },
  );

  // const { scrollToTop } = useContext<LayoutContextState | null>(
  //   LayoutContext,
  // ) as LayoutContextState;
  const pageEl = useRef<typeof PageContainer>();

  useEffect(() => {
    pageEl.current?.moveTop();
  }, [pagination, currentTag]);

  const handleTagChange = async (tag: string | number) => {
    const topBarList = await queryTopPlaylistHighquality(`${tag}`, 1, 1);
    const { playlists, total } = await queryTopPlaylist(`${tag}`, 1, 100);
    dispatch({
      topBarInfo: topBarList[0],
      currentTag: `${tag}`,
      list: playlists,
      pagination: {
        current: 1,
        total,
        size: 100,
      },
    });
  };

  const handlePageChange = async (pageNo: number) => {
    const { playlists, total } = await queryTopPlaylist(currentTag, pageNo, 100);
    dispatch({
      pagination: {
        current: pageNo,
        total,
        size: 100,
      },
      list: playlists,
    });
  };

  return (
    <PageContainer ref={pageEl}>
      <SongSheetBar info={topBarInfo} />

      <div className="flex align-middle justify-between my-6">
        <TagBtn cats={initedCatList} value={currentTag} onChange={handleTagChange} />
        <TagGroup
          value={currentTag}
          options={initedHotTags.map((item) => item.name)}
          onChange={handleTagChange}
        />
      </div>
      <SongSheetList dataSource={list} />

      <Pagination className="mt-16 mb-20" {...pagination} onPageChange={handlePageChange} />
    </PageContainer>
  );
};

export default SongSheetBlock;
