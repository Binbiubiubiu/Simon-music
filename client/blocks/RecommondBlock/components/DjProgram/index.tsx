import React, { FC } from 'react';
import './style.less';

import { DjProgramModel } from '@/api/recommond';
import CachedImage from '@/components/CachedImage';

interface DjProgramProps {
  dataSource: DjProgramModel[];
}

const DjProgram: FC<DjProgramProps> = (props) => {
  const { dataSource } = props;
  return (
    <ul className="djprogram ">
      {dataSource.map((item) => (
        <li className="djprogram-item" key={item.id}>
          <div className="djprogram-img">
            <CachedImage src={item.picUrl} alt={item.program.radio.name} />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-gray-400 text-sm cursor-pointer hover:text-white truncate mb-5">
              {item.program.radio.name}
            </div>
            <div className="text-gray-700 text-xs cursor-pointer hover:text-gray-600 truncate ">
              {item.program.dj.nickname}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DjProgram;
