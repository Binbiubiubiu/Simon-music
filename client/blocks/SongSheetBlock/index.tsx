import React, { FC, useReducer, useEffect, useRef, useLayoutEffect } from 'react';
import {
  HighqualityModel,
  HotSongSheetTag,
  TopPlayListModel,
  queryTopPlaylistHighquality,
  queryTopPlaylist,
  CatListType,
} from '@/api/2';
import Pagination from '@/components/Pagination';
import TagBtn from './components/TagBtn';
import TagGroup from './components/TagGroup';
import SongSheetBar from './components/SongSheetBar';
import SongSheetList from './components/SongSheetList';

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

  const parentDom = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    parentDom.current?.parentElement?.parentElement?.scrollTo({ top: 0 });
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
    <>
      <SongSheetBar info={topBarInfo} />

      <div ref={parentDom} className="flex align-middle justify-between my-20">
        <TagBtn cats={initedCatList} value={currentTag} onChange={handleTagChange} />
        <TagGroup
          value={currentTag}
          options={initedHotTags.map((item) => item.name)}
          onChange={handleTagChange}
        />
      </div>
      <SongSheetList dataSource={list} />

      <Pagination className="mt-40 mb-80" {...pagination} onPageChange={handlePageChange} />
    </>
  );
};

export default SongSheetBlock;
