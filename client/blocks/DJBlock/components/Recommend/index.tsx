import React, { FC } from 'react';
import './style.less';
import { DJRecommendModel, DJRecommendTypeModel } from '@/api/dj';
import CachedImage from '@/components/CachedImage';

interface RecommendProps {
  dataSource: Array<DJRecommendModel | DJRecommendTypeModel>;
}

const Recommend: FC<RecommendProps> = (props) => {
  const { dataSource } = props;
  return (
    <ul className="grid grid-cols-6 col-gap-4">
      {dataSource.map((item) => (
        <li className="djsheet-item" key={item.id}>
          <div className="djsheet-img">
            <CachedImage src={item.picUrl} alt={item.name} />

            <div className="djsheet-name">{item.name}</div>
          </div>
          <div className="text-line-2 text-xs text-gray-400 cursor-pointer hover:text-white">
            {item.rcmdtext}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Recommend;
