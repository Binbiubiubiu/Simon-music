import React, { FC, useRef, useEffect, useMemo } from 'react';
import './style.less';
import Progress from './Progress';
import Button from '@/components/Button';
import useAudio from '@/hooks/useAudio';
import { getMusicDuration } from '@/utils/time';

interface BottomPlayerProps {
  name?: string;
}

const BottomPlayer: FC<BottomPlayerProps> = () => {
  const { audioRef, paused, duration, current, percent, play, pause } = useAudio(
    'http://m8.music.126.net/20200406161931/2e19063bbd0c15b7ed8eeae6197a9295/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3',
  );

  const musicTime = useMemo<string>(
    () => `${getMusicDuration(current)} / ${getMusicDuration(duration)}`,
    [current, duration],
  );

  return (
    <footer className="bottom-player">
      <audio ref={audioRef}>
        <track kind="captions" />
      </audio>
      <Progress
        value={percent}
        onChange={(p) => {
          play((p / 100) * duration);
        }}
      />
      <ul className="bottom-player-bar">
        <li className="bottom-player-song">
          <img
            className="song-avator"
            alt="歌曲图片"
            src="https://p4.music.126.net/lRE0QHTUkA_DxlB14uzSqg==/109951164207703933.jpg?param=200y200"
          />
          <dl className="flex-1 min-w-0 text-white">
            <dt className="flex items-center">
              <span className="inline-block truncate text-white">
                My Heart Will Go On (Titanic){' '}
              </span>
              <small className="whitespace-no-wrap opacity-75">&nbsp; - Bronn Journey</small>
            </dt>
            <dd className="text-12 opacity-50">{musicTime}</dd>
          </dl>
        </li>
        <li className="bottom-player-control">
          <Button.Icon type="xihuan" className="text-white text-18" title="喜欢"></Button.Icon>
          <Button.Icon
            type="shangyishou"
            className="text-primary text-22"
            title="上一首(快捷键)"></Button.Icon>
          <PlaySwitch paused={paused} onPlay={() => play(current)} onPause={pause} />
          <Button.Icon
            type="next"
            className="text-primary text-22"
            title="下一首(快捷键)"></Button.Icon>
          <Button.Icon type="fenxiang" className="text-white text-18" title="分享"></Button.Icon>
        </li>
        <li className="bottom-player-menu">
          <Button.Icon
            type="bofangliebiao"
            className="text-white text-18"
            title="打开播放列表"></Button.Icon>
          <Button.Icon type="geci" className="text-white text-18" title="歌词"></Button.Icon>
          <Button.Icon type="yinliang" className="text-white text-18" title="静音"></Button.Icon>
        </li>
      </ul>
    </footer>
  );
};

export default BottomPlayer;

interface PlaySwitchProps {
  paused: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const PlaySwitch: FC<PlaySwitchProps> = (props) => {
  const { paused, onPlay, onPause } = props;

  return paused ? (
    <Button.Icon
      onClick={onPlay.bind(null, 0)}
      type="bofang pl-4"
      className="play-btn"
      title="播放(快捷键)"></Button.Icon>
  ) : (
    <Button.Icon
      onClick={onPause}
      type="bofangzanting "
      className="play-btn"
      title="暂停(快捷键)"></Button.Icon>
  );
};
