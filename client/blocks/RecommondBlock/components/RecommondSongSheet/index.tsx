import React, { FC } from 'react';
import './style.less';
import { SongSheetModel } from '@/api/1';
import Icon, { PlayIcon } from '@/components/Icon';
import { numberBaseWan } from '@/utils/number';
import CachedImage from '@/components/CachedImage';

interface RecommondSongSheetProps {
  dataSource: SongSheetModel[];
}

const RecommondSongSheet: FC<RecommondSongSheetProps> = (props) => {
  const { dataSource } = props;
  return (
    <ul className="song-sheet ">
      {/* TODO: 每日推荐歌曲*/}
      {/* <li className="song-sheet-item">
        <div className="song-sheet-img" style={{ backgroundImage: `url()` }}>
          <div className="song-sheet-play-number"></div>
          <div className="song-sheet-icon"></div>
        </div>
        <div className="song-sheet-text">每日推荐歌曲</div>
      </li> */}
      {dataSource.map((item) => (
        <li className="song-sheet-item" key={item.id}>
          <div className="song-sheet-img">
            <CachedImage src={item.picUrl} alt={item.name} />

            <div className="song-sheet-play-number">
              <Icon type="bofangsanjiaoxing" />
              &nbsp;
              {numberBaseWan(item.playCount)}
            </div>
            <PlayIcon className="song-sheet-icon" />
          </div>
          <div className="text-line-2 text-12 text-gray-400 cursor-pointer hover:text-white">
            {item.name}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RecommondSongSheet;
