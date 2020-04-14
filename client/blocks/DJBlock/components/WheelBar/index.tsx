import React, { FC, useState } from 'react';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

import './style.less';

import Icon from '@/components/Icon';
import Button from '@/components/Button';
import { DJCatModel } from '@/api/dj';

export interface WheelBarProps {
  dataSource: DJCatModel[];
}

const WheelBar: FC<WheelBarProps> = (props) => {
  const { dataSource } = props;
  const [x, setX] = useState(0);

  const action = throttle((event) => {
    let newX = x + (event.deltaY < 0 ? -1 : 1);
    newX = newX < 0 ? 0 : newX > 2 ? 2 : newX;
    setX(newX);
  }, 2000);

  return (
    <section
      className="wheelbar"
      onWheel={(e) => {
        e.persist();
        action(event);
      }}>
      <Button
        onClick={() => {
          setX(x - 1 < 0 ? 0 : x - 1);
        }}
        type="Group-"
        className="wheelbar-arrow"></Button>
      <div className="flex-1 overflow-hidden">
        <ul
          className="transition-transform duration-700"
          style={{ transform: `translate(${-x * 100}%,0)` }}>
          <li className="wheelbar-type">
            <div className="wheelbar-icon">
              <Icon type="paihangbang" className="text-primary text-24" />
            </div>
            <div className="wheelbar-text">排行榜</div>
          </li>
          {dataSource.map((item) => (
            <li className="wheelbar-type" key={item.id}>
              <div className="wheelbar-icon mx-auto">
                <i
                  className="wheelbar-icon-pic"
                  style={{ backgroundImage: `url(${item.picPCBlackUrl})` }}></i>
              </div>
              <div className="wheelbar-text">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={() => {
          setX(x + 1 > 2 ? 2 : x + 1);
        }}
        type="Group-1"
        className="wheelbar-arrow"></Button>
    </section>
  );
};

export default WheelBar;
