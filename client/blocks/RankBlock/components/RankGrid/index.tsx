import React, { FC } from 'react';
import './style.less';

import { TopListItem } from '@/api/toplist';
import Icon, { PlayIcon } from '@/components/Icon';
import { numberBaseWan } from '@/utils/number';
import CachedImage from '@/components/CachedImage';

interface RankGridCardProps {
  dataSource: TopListItem[];
}

const RankGridCard: FC<RankGridCardProps> = (props) => {
  const { dataSource } = props;

  return (
    <ul className="rank-grid ">
      {dataSource.map((item) => (
        <li className="rank-grid-item" key={item.id}>
          <div className="rank-grid-img">
            <CachedImage src={item.coverImgUrl} alt={item.name} />

            <div className="rank-grid-play-number">
              <Icon type="bofangsanjiaoxing" />
              &nbsp;
              {numberBaseWan(item.playCount)}
            </div>
            <PlayIcon className="rank-grid-icon" size={45} />
          </div>
          <div className="text-line-2 text-13 text-gray-400 cursor-pointer hover:text-white">
            {item.name}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RankGridCard;
