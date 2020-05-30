import React, { FC } from 'react';

import { ArtistModel } from '@/api/singer';
import CachedImage from '@/components/CachedImage';
import Icon from '@/components/Icon';

interface SingerListProps {
  dataSource: ArtistModel[];
}

const SingerList: FC<SingerListProps> = (props) => {
  const { dataSource } = props;
  return (
    <ul className="grid grid-cols-5 lg:grid-cols-6 row-gap-8 col-gap-5">
      {dataSource.map((item) => (
        <li key={item.id}>
          <CachedImage
            mode="cover"
            className="w-full rounded cursor-pointer mb-1 "
            src={item.picUrl}
            alt={item.picUrl}
          />
          <div className="flex justify-between text-xs text-gray-400 cursor-pointer hover:text-white">
            <div className="truncate flex-1 min-w-0">{item.name}</div>
            {item.accountId && (
              <div className="w-4 h-4 rounded-full overflow-hidden bg-primary flex items-center justify-center text-center">
                <Icon type="wo" className="text-white font-bold text-xs transform scale-75" />
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SingerList;
