import { useRef, useEffect, useReducer } from 'react';
import throttle from 'lodash/throttle';
import { bindEvent, unbindEvent } from '@/utils/dom';

interface AudioState {
  current: number;
  duration: number;
  percent: number;
  paused: boolean;
}

const audioReducer = (state: AudioState, payload: Partial<AudioState>) => {
  return { ...state, ...payload };
};

const useAudio = (src: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, dispatch] = useReducer(audioReducer, {
    current: 0,
    duration: 0,
    percent: 0,
    paused: true,
  });

  const play = (currentTime = 0) => {
    if (!audioRef.current) {
      console.warn('播放器初始化失败');
      return;
    }
    const canStartPlay = audioRef.current.readyState > 1;

    if (canStartPlay) {
      dispatch({ paused: false });
      // console.log(`${p}-----${(p / 100) * audioRef.current.duration}`);
      audioRef.current.currentTime = currentTime;
      audioRef.current.play();
    }
  };

  const pause = () => {
    if (!audioRef.current) {
      console.warn('播放器初始化失败');
      return;
    }
    dispatch({ paused: true });
    audioRef.current.pause();
  };

  const onTimeUpdate = throttle((e: Event) => {
    const { currentTime, duration } = e.target as HTMLAudioElement;
    dispatch({
      current: currentTime,
      percent: Math.ceil((currentTime / duration) * 1000) / 10,
    });
  }, 1000);

  const onCanPlay = () => {
    dispatch({ duration: audioRef.current?.duration || 0 });
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = src;

    bindEvent(audioRef.current, 'timeupdate', onTimeUpdate);
    bindEvent(audioRef.current, 'canplay', onCanPlay);
    return () => {
      if (audioRef.current) {
        unbindEvent(audioRef.current, 'timeupdate', onTimeUpdate);
        unbindEvent(audioRef.current, 'canplay', onCanPlay);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return {
    // data
    audioRef,
    ...state,
    // methods
    play,
    pause,
  };
};

export default useAudio;
