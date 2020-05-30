import React, { ForwardRefExoticComponent, useImperativeHandle, useRef } from 'react';

const PageContainer: ForwardRefExoticComponent<{
  onPageScroll: (e: any) => void;
}> = React.forwardRef((props, ref) => {
  const { children, ...rest } = props;

  const scrollEl = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => ({
    moveTop: () => {
      scrollEl.current?.scrollTo({ top: 0 });
    },
  }));

  return (
    <div ref={scrollEl} className="overflow-y-auto flex-1" {...rest}>
      <div className="mx-auto px-16" style={{ maxWidth: 1040, minWidth: 745, padding: '0 30px' }}>
        {children}
      </div>
    </div>
  );
});

PageContainer.displayName = 'PageContainer';

export default PageContainer as any;
