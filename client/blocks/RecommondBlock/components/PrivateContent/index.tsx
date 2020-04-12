import React, { FC } from 'react';
import './style.less';
import { PrivateContentModel } from '@/api/1';
import { PlayIcon } from '@/components/Icon';
import CachedImage from '@/components/CachedImage';

interface PrivateContentProps {
  dataSource: PrivateContentModel[];
}

const PrivateContent: FC<PrivateContentProps> = (props) => {
  const { dataSource } = props;
  return (
    <ul className="grid grid-cols-4 row-gap-34 col-gap-14">
      {dataSource.map((item) => (
        <li className="private-content-item" key={item.id}>
          <div className="private-content-img">
            <CachedImage src={item.sPicUrl} alt={item.name} />

            <PlayIcon className="private-content-icon" mode="dark" size={24} />
          </div>
          <div className="text-gray-400 cursor-pointer hover:text-white">{item.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default PrivateContent;
