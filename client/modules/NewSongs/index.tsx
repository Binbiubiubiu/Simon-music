import React, { FC } from 'react';
import './style.less';
import { NewSongModel } from '@/api/new-songs';
import { PlayIcon } from '@/components/Icon';
import Button from '@/components/Button';

interface NewSongsProps {
  dataSource: NewSongModel[];
}

const NewSongs: FC<NewSongsProps> = (props) => {
  const { dataSource } = props;
  return (
    <ul className="new-songs ">
      {dataSource.map((item, i) => (
        <li className="new-songs-item" key={item.id}>
          <div className="new-songs-img">
            <img src={item.picUrl} alt="" />
            <PlayIcon className="new-songs-icon" />
          </div>
          <div className="text-gray-700 px-10">{`0${i + 1}`}</div>
          <dl className="flex-1 min-w-0">
            <dt className="text-gray-400 truncate">
              {item.name}
              <span className="text-gray-700">
                {item.song.alias.length > 0 ? `(${item.song.alias})` : ''}
              </span>
            </dt>
            <dd className="text-gray-500 text-12">
              {item.song.artists.map((item) => item.name).join('/')}
            </dd>
          </dl>
          <Button.Icon style={{ flex: '0 0 94px' }} type="bofang1"></Button.Icon>
        </li>
      ))}
    </ul>
  );
};

export default NewSongs;
