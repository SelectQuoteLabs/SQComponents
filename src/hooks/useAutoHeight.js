import React from 'react';

export function useAutoHeight() {
  const [containerRef, setContainerRef] = React.useState();
  const refCallback = node => setContainerRef(node);

  const autoHeight = React.useMemo(() => {
    if (!containerRef) {
      return;
    }

    const topOffset = containerRef?.getBoundingClientRect().top;
    const offsetBasedHeight = `calc(100vh - ${topOffset}px - 24px)`;

    const parentHeight = containerRef.parentElement.clientHeight;
    const parentTopOffset = containerRef.parentElement.getBoundingClientRect()
      .top;
    const topDifferential = topOffset - parentTopOffset;
    const maxOffsetBasedHeight = `calc(${parentHeight}px - ${topDifferential}px)`;

    const calculatedHeight = `min(${offsetBasedHeight}, ${maxOffsetBasedHeight})`;

    return calculatedHeight;
  }, [containerRef]);

  return {containerRef: refCallback, autoHeight};
}
