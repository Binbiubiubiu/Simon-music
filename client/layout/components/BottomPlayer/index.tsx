import React, { FC } from 'react';
import './style.less';
import Progress from '@/components/progress';
import Button from '@/components/Button';

interface BottomPlayerProps {
  name?: string;
}

const BottomPlayer: FC<BottomPlayerProps> = () => {
  return (
    <footer className="bottom-player">
      <Progress value={40} />
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
            <dd className="text-12 opacity-50">02:53 / 04:24</dd>
          </dl>
        </li>
        <li className="bottom-player-control">
          <Button.Icon type="xihuan" className="text-white text-18" title="喜欢"></Button.Icon>
          <Button.Icon
            type="shangyishou"
            className="text-primary text-22"
            title="上一首(快捷键)"></Button.Icon>
          <Button.Icon type="bofangzanting" className="play-btn" title="暂停(快捷键)"></Button.Icon>
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