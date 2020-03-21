import { useState, useLayoutEffect, useRef } from 'react';
import { unbindEvent, bindEvent } from '@/utils/dom';

interface DragArea {
  width: number;
  height: number;
}

interface DragPoint {
  x: number;
  y: number;
}

const defaultPoint: DragPoint = {
  x: 0,
  y: 0,
};

const defaultArea: DragArea = {
  width: 0,
  height: 0,
};

export const useMouseDrag = (selector: string, iPoint: DragPoint = defaultPoint) => {
  if (!selector) {
    throw new Error('拖拽对象不能为空');
  }

  const [current, setCurrent] = useState<DragPoint>(iPoint);
  const rectRef = useRef<DragArea>(defaultArea);

  let startPosition = {
    x: 0,
    y: 0,
  };

  useLayoutEffect(() => {
    const element = document.querySelector(selector);
    rectRef.current = element?.getBoundingClientRect() || defaultArea;
  }, [rectRef]);

  const handleDocumentMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const computedX = current.x + e.pageX - startPosition.x;
    const computedY = current.y + e.pageY - startPosition.y;
    setCurrent({
      x: Math.min(computedX, rectRef.current.width),
      y: Math.min(computedY, rectRef.current.height),
    });
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    unbindEvent(document, 'mousemove', handleDocumentMove);
    unbindEvent(document, 'mouseup', handleMouseUp);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    startPosition = { x: e.pageX, y: e.pageY };
    bindEvent(document, 'mousemove', handleDocumentMove);
    bindEvent(document, 'mouseup', handleMouseUp);
  };

  return { current, handleMouseDown };
};
