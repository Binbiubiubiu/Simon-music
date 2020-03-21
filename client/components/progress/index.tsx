import React, { FC, useState, useEffect, useRef } from 'react';
import cls from 'classnames';
import './style.less';
import { bindEvent, unbindEvent } from '@/utils/dom';
import { getPercent } from '@/utils/math';

interface ProgressProps {
  value?: number;
  direct?: 'x' | 'y';
  className?: string;
}

interface ProgressDragOps {
  defaultValue: number;
  direct: 'x' | 'y';
}

const useProgressDrag = (ref: React.RefObject<HTMLDivElement>, options: ProgressDragOps) => {
  if (!ref) {
    throw new Error('拖拽对象不能为空');
  }

  const { defaultValue, direct = 'x' } = options;

  const [current, setCurrent] = useState(defaultValue);
  const [sum, setSum] = useState(0);
  const [startVal, setStartVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const rect = el?.getBoundingClientRect() || { width: 0, height: 0, x: 0, y: 0 };
    if (direct == 'x') {
      setSum(rect.width);
      setStartVal(rect.x + window.pageXOffset); //获取pageX
    } else {
      setSum(rect.height);
      setStartVal(rect.y + window.pageYOffset + rect.height); //获取pageX
    }
  }, [ref]);

  useEffect(() => {
    setCurrent(defaultValue);
  }, [defaultValue]);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (direct == 'x') {
      setCurrent(getPercent(e.pageX - startVal, sum));
    } else {
      setCurrent(getPercent(startVal - e.pageY, sum));
    }
  };

  const handleDocumentMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const computed = direct == 'x' ? e.pageX - startVal : startVal - e.pageY;
    console.log(e.pageY, startVal, computed, sum);
    setCurrent(getPercent(Math.min(computed, sum), sum));
  };

  const handleCursorMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    unbindEvent(document, 'mousemove', handleDocumentMove);
    unbindEvent(document, 'mouseup', handleCursorMouseUp);
  };

  const handleCursorMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    bindEvent(document, 'mousemove', handleDocumentMove);
    bindEvent(document, 'mouseup', handleCursorMouseUp);
  };

  return { current, handleCursorMouseDown, handleProgressBarClick };
};

const Progress: FC<ProgressProps> = (props) => {
  const { value, direct = 'x', className } = props;

  const ref = useRef<HTMLDivElement>(null);

  const { current, handleCursorMouseDown, handleProgressBarClick } = useProgressDrag(ref, {
    defaultValue: value || 0,
    direct,
  });

  if (direct == 'y') {
    return (
      <div
        ref={ref}
        className={cls('progress-wrapper-y', className)}
        onClick={handleProgressBarClick}>
        <div className={cls(`progress-y`)} style={{ height: `${current}%` }}>
          <div onMouseDown={handleCursorMouseDown} className={cls('progress-cursor-y')}></div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={cls('progress-wrapper', className)} onClick={handleProgressBarClick}>
      <div className={cls(`progress-x`)} style={{ width: `${current}%` }}>
        <div onMouseDown={handleCursorMouseDown} className={cls('progress-cursor-x')}></div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  value: 0,
  direct: 'x',
};

export default Progress;
