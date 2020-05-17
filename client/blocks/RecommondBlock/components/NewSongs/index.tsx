import React, { FC } from 'react';
import cls from 'classnames';
import './style.less';
import { NewSongModel } from '@/api/recommond';
import { PlayIcon } from '@/components/Icon';
import Button from '@/components/Button';
import CachedImage from '@/components/CachedImage';

interface NewSongsProps {
  dataSource: NewSongModel[];
}

const NewSongs: FC<NewSongsProps> = (props) => {
  const { dataSource } = props;
  return (
    <ul className="new-songs ">
      {dataSource.map((item, i) => (
        <li className="new-songs-item hover:bg-gray-800" key={item.id}>
          <div className="new-songs-img">
            <CachedImage src={item.picUrl} alt={item.name} />

            <PlayIcon className="new-songs-icon" />
          </div>
          <div className="text-gray-700 px-3">{`0${i + 1}`}</div>
          <dl className="flex-1 min-w-0">
            <dt className="text-gray-400 truncate text-sm">
              {item.name}
              <span className="text-gray-700 ">
                {item.song.alias.length > 0 ? `（${item.song.alias}）` : ''}
              </span>
            </dt>
            <dd className="text-gray-500 text-xs ">
              {item.song.artists.map((item) => item.name).join('/')}
            </dd>
          </dl>
          <div style={{ flex: '0 0 94px' }} className="flex items-center justify-center">
            <Button
              className={cls('text-primary text-xl', { invisible: item.song.mvid == 0 })}
              type="shipin"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NewSongs;
