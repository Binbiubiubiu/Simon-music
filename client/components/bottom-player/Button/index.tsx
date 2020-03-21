import React, { FC, useState } from 'react';
import './style.less';
import Icon from '../../icon';
import Progress from '@/components/progress';

interface IconButtonProps {
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const LikeBtn: FC<IconButtonProps> = (props) => (
  <button {...props}>
    <Icon type="xihuan" size={18} color="white"></Icon>
  </button>
);

export const LastSongBtn: FC<IconButtonProps> = (props) => (
  <button {...props}>
    <Icon type="shangyishou" size={22} color="#c2463a"></Icon>
  </button>
);

export const PlayBtn: FC<IconButtonProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <button
      {...props}
      className="play-btn"
      onClick={() => {
        setIsPlaying(!isPlaying);
      }}>
      <Icon type={isPlaying ? 'bofang' : 'bofangzanting'} size={24} color="white"></Icon>
    </button>
  );
};

export const NextSongBtn: FC<IconButtonProps> = (props) => (
  <button {...props}>
    <Icon type="next" size={22} color="#c2463a"></Icon>
  </button>
);

export const ShareBtn: FC<IconButtonProps> = (props) => (
  <button {...props}>
    <Icon type="fenxiang" size={18} color="white"></Icon>
  </button>
);

export const SongListBtn: FC<IconButtonProps> = (props) => (
  <button {...props}>
    <Icon type="bofangliebiao" size={18} color="white"></Icon>
  </button>
);

export const SongWordBtn: FC<IconButtonProps> = (props) => (
  <button {...props}>
    <Icon type="geci" size={18} color="white"></Icon>
  </button>
);

export const SongVoiceBtn: FC<IconButtonProps> = (props) => {
  return (
    <div className="song-voice-btn">
      <div className="voice-controll">
        <Progress value={20} direct="y"></Progress>
      </div>
      <button {...props}>
        <Icon type="yinliang" size={18} color="white"></Icon>
      </button>
    </div>
  );
};
