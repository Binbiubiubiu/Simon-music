import React, { FC } from 'react';
import './style.less';
import Icon from '@/components/Icon';
import { HighqualityModel } from '@/api/song-sheet';

interface SongSheetBarProps {
  info: HighqualityModel;
}

const SongSheetBar: FC<SongSheetBarProps> = (props) => {
  const { info } = props;

  if (!info) {
    return <></>;
  }

  return (
    <section className="relative overflow-hidden rounded-md my-24 cursor-pointer">
      <div className="relative z-10 p-14 flex">
        <img className="songsheet-bar-img" src={info.coverImgUrl} alt={info.name} />
        <dl className="flex-auto">
          <dt className=" text-yellow-500 border-yellow-500 border inline-block py-4 px-12 my-20 rounded-full">
            <Icon type="jingpin" /> 精品歌单
          </dt>
          <dd className="text-white text-16 mb-6">{info.name}</dd>
          <dd className="text-gray-300 text-12">{info.copywriter}</dd>
        </dl>
      </div>
      <div
        style={{ backgroundImage: `url(${info.coverImgUrl})` }}
        className="songsheet-bar-bg"></div>
    </section>
  );
};

export default SongSheetBar;
