import React, { FC } from 'react';
import './style.less';
import { DJPayGiftModel } from '@/api/dj';
import CachedImage from '@/components/CachedImage';
import Icon from '@/components/Icon';

interface PayGiftProps {
  dataSource: DJPayGiftModel[];
}

const PayGift: FC<PayGiftProps> = (props) => {
  const { dataSource } = props;
  return (
    <ul className="grid grid-cols-2 col-gap-14">
      {dataSource.map((item) => (
        <li className="flex border-gray-800 border-t border-b py-12" key={item.id}>
          <div className="playgift-img">
            <CachedImage src={item.picUrl} alt={item.name} />
          </div>
          <dl className="flex-1">
            <dt className="mt-8 text-14 font-bold text-gray-400 cursor-pointer hover:text-white">
              {item.name}
            </dt>
            <dd className=" text-12 text-gray-700 mt-14 leading-6">
              {item.rcmdText}
              <br />
              <Icon type="bofangsanjiaoxing" className="text-white mr-6" />
              {item.lastProgramName}
            </dd>
            <dd className="text-16 text-gray-700 cursor-pointer text-primary mt-10 ml-6">
              ¥ {item.originalPrice / 100}
            </dd>
          </dl>
        </li>
      ))}
    </ul>
  );
};

export default PayGift;
