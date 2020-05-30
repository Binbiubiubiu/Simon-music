import React, { FC, useEffect, useReducer } from 'react';
import throttle from 'lodash/throttle';

import SingerFormItem from './components/SingerSearch';
import SingerList from './components/SingerList';

import { queryArtistList } from '@/api/singer';
import PageContainer from '@/components/PageContainer';

const typeList = [
  { label: '全部', value: -1 },
  { label: '男歌手', value: 1 },
  { label: '女歌手', value: 2 },
  { label: '乐队组合', value: 3 },
];

const areaList = [
  { label: '全部', value: -1 },
  { label: '华语', value: 7 },
  { label: '欧美', value: 96 },
  { label: '日本', value: 8 },
  { label: '韩国', value: 16 },
  { label: '其他', value: 0 },
];
const initialList = [
  { label: '热门', value: -1 },
  ...'abcdefghijklmnopqrstuvwxyz'.split('').map((word) => {
    return { label: word.toUpperCase(), value: word };
  }),
];

function useSingerList() {
  const [state, dispatch] = useReducer(
    (state, payload) => {
      const { action, data, search } = payload;
      console.log(action, data, search);
      switch (action) {
        case 'loading':
          state.loading = true;
          break;
        case 'search':
          state.current = 1;
          state.dataSource = data;
          state.loading = false;
          break;
        case 'next':
          state.current += 1;
          state.dataSource = state.dataSource.concat(data);
          state.loading = false;
          break;
        case 'set':
          state.search = { ...state.search, ...search };
        default:
          break;
      }
      return { ...state };
    },
    {
      loading: false,
      dataSource: [],
      current: 1,
      pageSize: 60,

      search: { area: -1, type: -1, initial: -1 },
    },
  );

  useEffect(() => {
    (async function() {
      dispatch({ action: 'loading' });
      const dataSource = await queryArtistList(state.search, 1);
      dispatch({ action: 'search', data: dataSource });
    })();
  }, [state.search]);

  const loadMore = throttle((e) => {
    e.persist();
    if (!e.target || state.loading) {
      return;
    }

    const { clientHeight, scrollHeight, scrollTop } = e.target;
    // const { clientHeight, scrollHeight, scrollTop } = this.scroll;
    const isBottom = scrollTop + clientHeight + 600 > scrollHeight;
    if (isBottom) {
      dispatch({ action: 'loading' });
      queryArtistList(state.search, state.current + 1).then((dataSource) => {
        dispatch({ action: 'next', data: dataSource });
      });
    }
  }, 1000);

  return {
    loadMore,
    //
    loading: state.loading,
    search: state.search,
    list: state.dataSource,
    setSearch: (val) => {
      dispatch({
        action: 'set',
        search: val,
      });
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SingerBlockProps {}

const SingerBlock: FC<SingerBlockProps> = () => {
  const { loadMore, search, list, setSearch } = useSingerList();

  return (
    <PageContainer onScroll={loadMore}>
      <div className="py-4">
        <SingerFormItem
          label="歌手"
          current={search.area}
          dataSource={areaList}
          onChange={(val) => {
            setSearch({ area: val as number });
          }}></SingerFormItem>
        <SingerFormItem
          label="分类"
          current={search.type}
          dataSource={typeList}
          onChange={(val) => {
            setSearch({ type: val as number });
          }}></SingerFormItem>
        <SingerFormItem
          label="筛选"
          current={search.initial}
          dataSource={initialList}
          onChange={(val) => {
            setSearch({ initial: val });
          }}></SingerFormItem>
      </div>
      <SingerList dataSource={list} />
    </PageContainer>
  );
};

export default SingerBlock;
