import React, { FC } from 'react';
import './style.less';
import Progress from '../progress';
import {
  LikeBtn,
  LastSongBtn,
  PlayBtn,
  NextSongBtn,
  ShareBtn,
  SongListBtn,
  SongWordBtn,
  SongVoiceBtn,
} from './Button';

interface BottomPlayerProps {
  name?: string;
}

const BottomPlayer: FC<BottomPlayerProps> = (props) => {
  return (
    <div className="bottom-player">
      <Progress value={40} />
      <ul className="bottom-player-bar">
        <li className="bottom-player-song">
          <img src="https://p4.music.126.net/lRE0QHTUkA_DxlB14uzSqg==/109951164207703933.jpg?param=200y200" />
          <dl className="song-info">
            <dt className="song-title">
              <span className="song-name text-overflow">My Heart Will Go On (Titanic) </span>
              <small className="song-singer"> - Bronn Journey</small>
            </dt>
            <dd className="song-time">02:53 / 04:24</dd>
          </dl>
        </li>
        <li className="bottom-player-control">
          <LikeBtn />
          <LastSongBtn />
          <PlayBtn />
          <NextSongBtn />
          <ShareBtn />
        </li>
        <li className="bottom-player-menu">
          <SongListBtn />
          <SongWordBtn />
          <SongVoiceBtn />
        </li>
      </ul>
    </div>
  );
};

export default BottomPlayer;
