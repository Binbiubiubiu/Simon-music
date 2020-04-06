import React, { FC, useReducer, useEffect, useRef } from 'react';
import cls from 'classnames';
import './style.less';
import { bindEvent, unbindEvent } from '@/utils/dom';
import { percent } from '@/utils/number';
import { progressReducer } from './store';

interface ProgressProps {
  value?: number;
  className?: string;
  onChange?: (value: number) => void;
}

interface ProgressDragOps {
  value: number;
  onChange?: (value: number) => void;
}

const useProgressDrag = (ref: React.RefObject<HTMLDivElement>, options: ProgressDragOps) => {
  if (!ref) {
    throw new Error('拖拽对象不能为空');
  }

  const { value, onChange } = options;

  const [state, dispatch] = useReducer(progressReducer, {
    current: value,
    sum: 0,
    startVal: 0,
    isMoving: false,
  });

  useEffect(() => {
    if (state.isMoving) return;
    dispatch({
      current: value,
    });
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    const rect = el?.getBoundingClientRect() || { width: 0, height: 0, x: 0, y: 0 };

    dispatch({
      sum: rect.width,
      startVal: rect.x + window.pageXOffset, //获取pageX
    });
  }, [ref]);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const current = percent(e.pageX - state.startVal, state.sum);
    onChange && onChange(current);
    dispatch({
      current,
    });
  };

  const handleDocumentMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const current = percent(Math.min(e.pageX - state.startVal, state.sum), state.sum);
    dispatch({
      current,
    });
  };

  const handleCursorMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const current = percent(Math.min(e.pageX - state.startVal, state.sum), state.sum);
    onChange && onChange(current);
    dispatch({
      isMoving: false,
      current,
    });

    unbindEvent(document, 'mousemove', handleDocumentMove);
    unbindEvent(document, 'mouseup', handleCursorMouseUp);
  };

  const handleCursorMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch({
      isMoving: true,
    });
    bindEvent(document, 'mousemove', handleDocumentMove);
    bindEvent(document, 'mouseup', handleCursorMouseUp);
  };

  return { current: state.current, handleCursorMouseDown, handleProgressBarClick };
};

const Progress: FC<ProgressProps> = (props) => {
  const { value, className, onChange } = props;

  const ref = useRef<HTMLDivElement>(null);

  const { current, handleCursorMouseDown, handleProgressBarClick } = useProgressDrag(ref, {
    value: value || 0,
    onChange,
  });

  return (
    <div
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={current}
      aria-orientation="horizontal"
      className={cls('progress-wrapper', className)}
      onClick={handleProgressBarClick}
      onKeyDown={() => 0}>
      <div className={cls(`progress-x`)} style={{ width: `${current}%` }}>
        <div
          role="button"
          tabIndex={0}
          onMouseDown={handleCursorMouseDown}
          className={cls('progress-cursor-x')}></div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  value: 0,
};

export default Progress;
