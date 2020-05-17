import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import './style.less';
import {
  TracksDetail,
  queryToplistDetail,
  TopListItem,
  ArtistToplist,
  queryTopAartistDetail,
  Aartist,
} from '@/api/toplist';
import Icon, { PlayIcon } from '@/components/Icon';

interface RankCardProps {
  type: number;
  rank: TopListItem;
}

export const RankCard: FC<RankCardProps> = (props) => {
  const { type, rank } = props;

  const [tracks, setTracks] = useState<TracksDetail[]>([]);

  useEffect(() => {
    queryToplistDetail(type).then((res) => {
      setTracks(res.slice(0, 5));
    });
  }, [type]);

  return (
    <div className="flex mb-6">
      <div className="rankcard-img" style={{ backgroundImage: `url(${rank.coverImgUrl})` }}>
        <PlayIcon size={40} className="rankcard-icon" />
      </div>
      <ul className="flex-1">
        {tracks.map((item, index) => (
          <li className="rankcard-list-item" key={item.id}>
            <div className="rankcard-list-index">{index + 1}</div>
            <div className="flex-1 text-gray-400">
              {item.name}
              <span className="text-gray-600">
                &nbsp;
                {item.alia.length > 0 ? `(${item.alia.join('')})` : ''}
              </span>
            </div>
            <div>{item.ar.map((item) => item.name).join('/')}</div>
          </li>
        ))}
        <li className=" rankcard-list-item">
          <Link href="">
            <span className="text-gray-600 text-xs hover:text-gray-500 cursor-pointer">
              查看全部 <Icon type="Group-1"></Icon>{' '}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

interface SingerRankCardProps {
  rank: ArtistToplist;
}

export const SingerRankCard: FC<SingerRankCardProps> = (props) => {
  const { rank } = props;

  const [artists, setArtists] = useState<Aartist[]>([]);

  useEffect(() => {
    queryTopAartistDetail().then((res) => {
      setArtists(res.slice(0, 5));
    });
  }, []);

  return (
    <div className="flex mb-6">
      <div className="rankcard-img" style={{ backgroundImage: `url(${rank.coverUrl})` }}>
        <PlayIcon size={40} className="rankcard-icon" />
      </div>
      <ul className="flex-1">
        {artists.map((item, index) => (
          <li className="rankcard-list-item" key={item.id}>
            <div className="rankcard-list-index">{index + 1}</div>
            <div className="flex-1 text-gray-400">
              {item.name}
              <span className="text-gray-600">
                &nbsp;
                {item.alias.length > 0 ? `(${item.alias.join('')})` : ''}
              </span>
            </div>
          </li>
        ))}
        <li className=" rankcard-list-item">
          <Link href="">
            <span className="text-gray-600 text-xs hover:text-gray-500 cursor-pointer">
              查看全部 <Icon type="Group-1"></Icon>{' '}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
