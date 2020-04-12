import React, { FC } from 'react';
import './style.less';

import { MvModel } from '@/api/1';
import Icon from '@/components/Icon';
import { numberBaseWan } from '@/utils/number';
import CachedImage from '@/components/CachedImage';

interface MvProps {
  dataSource: MvModel[];
}

const Mv: FC<MvProps> = (props) => {
  const { dataSource } = props;
  return (
    <ul className="grid grid-cols-4 row-gap-14 col-gap-14">
      {dataSource.map((item) => (
        <li className="mv-item" key={item.id}>
          <div className="mv-img">
            <div className="hover-tip">{item.copywriter}</div>
            <CachedImage src={item.picUrl} alt={item.name} />
            <div className="mv-play-number">
              <Icon type="bofangsanjiaoxing" />
              &nbsp;
              {numberBaseWan(item.playCount)}
            </div>
          </div>
          <div className="text-gray-400 cursor-pointer hover:text-white truncate">{item.name}</div>
          <div className="text-gray-700 text-12 cursor-pointer hover:text-gray-600 truncate ">
            {item.artistName}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Mv;
