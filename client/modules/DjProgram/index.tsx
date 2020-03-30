import React, { FC } from 'react';
import './style.less';

import { DjProgramModel } from '@/api/djprogram';

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
            <img src={item.picUrl} alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-gray-400 cursor-pointer hover:text-white truncate mb-8">
              {item.program.radio.name}
            </div>
            <div className="text-gray-700 text-12 cursor-pointer hover:text-gray-600 truncate ">
              {item.program.dj.nickname}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DjProgram;
