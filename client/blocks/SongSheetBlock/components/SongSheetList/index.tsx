import React, { FC } from 'react';
import './style.less';
import { TopPlayListModel } from '@/api/2';
import Icon, { PlayIcon } from '@/components/Icon';
import CachedImage from '@/components/CachedImage';

import { numberBaseWan } from '@/utils/number';

const AuthorTypeIcon: {
  [key: number]: JSX.Element;
} = {
  2: <Icon type="vip" className="text-primary" />,
  4: <Icon type="yinle" className="text-primary" />,
  200: <Icon type="shoucang" className="text-orange-400" />,
};

interface SongSheetListProps {
  dataSource: TopPlayListModel[];
}

const SongSheetList: FC<SongSheetListProps> = (props) => {
  const { dataSource } = props;
  return (
    <ul className="grid grid-cols-4 lg:grid-cols-5 row-gap-34 col-gap-14">
      {dataSource.map((item) => (
        <li className="song-sheet-item" key={item.id}>
          <div className="song-sheet-img">
            <CachedImage src={item.coverImgUrl} alt={item.name} />
            <div className="song-sheet-play-number">
              <Icon type="bofangsanjiaoxing" />
              &nbsp;
              {numberBaseWan(item.playCount)}
            </div>
            <div className="song-sheet-author">
              <Icon type="wo" />
              &nbsp;
              <span className="min-w-0 truncate">{item.creator.nickname}</span>
              &nbsp;
              {AuthorTypeIcon[item.creator.userType]}
            </div>
            <PlayIcon size={44} className="song-sheet-icon" />
          </div>
          <div className="text-line-2 text-12 text-gray-400 cursor-pointer hover:text-white">
            {item.name}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SongSheetList;
