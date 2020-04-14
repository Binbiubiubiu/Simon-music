import React, { FC, useState, useEffect } from 'react';
import cls from 'classnames';
import './style.less';
import Button from '../Button';
import { BannerModel } from '@/api/recommond';
import { DJBannerModel } from '@/api/dj';

type UseSwiperOpstion = {
  initCurrent?: number;
  itemsLength: number;
  duration: number;
};

type UseSwiperType = (
  ops: UseSwiperOpstion,
) => {
  current: number;
  items: string[];
  nextAction: () => void;
  preAction: () => void;
  setCurrent: (current: number) => void;
  setDisabled: (disabled: boolean) => void;
};

const useSwiper: UseSwiperType = (ops) => {
  const { initCurrent = 0, itemsLength, duration } = ops;

  const [cards, setCards] = useState<string[]>([]);
  const [current, setCurrent] = useState<number>(-1);
  const [disabled, setDisabled] = useState<boolean>(false);

  const goToCurrent = (c: number) => {
    if (c == current) {
      return;
    }
    setCurrent(c);
    const cardsPostions = Array(itemsLength)
      .fill('')
      .map((_, i) => `swiper-order-${i + 1}`);
    const newCard = cardsPostions.concat(cardsPostions.splice(0, itemsLength - c));
    setCards(newCard);
  };

  const nextAction = () => {
    goToCurrent(current + 2 > itemsLength ? 0 : current + 1);
    // setCurrent(current + 2 > itemsLength ? 0 : current + 1);
    // setCards([cards.pop() as string].concat(cards));
  };

  const preAction = () => {
    goToCurrent(current - 1 < 0 ? itemsLength - 1 : current - 1);
    // setCurrent(current - 1 < 0 ? itemsLength - 1 : current - 1);
    // setCards(cards.concat(cards.shift() as string));
  };

  useEffect(() => {
    goToCurrent(initCurrent);
  }, []);

  useEffect(() => {
    if (disabled) return;
    const timer = setTimeout(() => {
      nextAction();
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [current, duration, disabled]);

  return {
    current,
    items: cards,
    nextAction,
    preAction,
    setCurrent: goToCurrent,
    setDisabled,
  };
};

interface SwiperProps {
  /**
   *  轮播图高度
   */
  height?: number;
  /**
   *  轮播图数据
   */
  dataSource: BannerModel[] | DJBannerModel[];
  /**
   *  轮播图时间间隔(ms)
   *  @default 5000
   */
  duration?: number;
}

const Swiper: FC<SwiperProps> = (props) => {
  const { dataSource, duration = 5000 } = props;

  const { current, items, nextAction, preAction, setCurrent, setDisabled } = useSwiper({
    initCurrent: 0,
    itemsLength: dataSource.length,
    duration: duration,
  });

  return (
    <section
      className="swiper"
      onMouseEnter={() => setDisabled(true)}
      onMouseLeave={() => setDisabled(false)}>
      <ul className="swiper-content">
        {items.map((position, i) => (
          <li className={cls('swiper-item', position)} key={dataSource[i].url}>
            <img
              className="w-full h-full"
              src={(dataSource[i] as BannerModel).imageUrl || (dataSource[i] as DJBannerModel).pic}
              alt={dataSource[i].typeTitle}
            />
            <div className="swiper-badge">{dataSource[i].typeTitle}</div>
          </li>
        ))}
        <Button type="Group-" className="swiper-btn " onClick={() => preAction()}></Button>
        <Button type="Group-1" className="swiper-btn " onClick={() => nextAction()}></Button>
      </ul>
      <ul className="swiper-footer">
        {items.map((position, i) => (
          <li
            className={cls('swiper-spot', { 'swiper-spot-active': i == current })}
            onFocus={() => 0}
            onMouseOver={() => {
              setCurrent(i);
            }}
            key={i}></li>
        ))}
      </ul>
    </section>
  );
};

export default Swiper;

// interface SwiperItemProps {
//   value: any;
// }

// export const Item: FC<SwiperItemProps> = (props) => {};
