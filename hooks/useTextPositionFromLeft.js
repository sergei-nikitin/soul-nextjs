import { useEffect, useState } from 'react';
import { DEFAULT_WINDOW_DESKTOP_WIDTH } from '../config/windowWidth';

const useTextPositionFromLeft = () => {
  const [leftTextPosition, setLeftTextPosition] = useState();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const syncWidth = () => {
      setWindowWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
      );
    };

    if (windowWidth > 0) {
      if (windowWidth <= 375) {
        return setLeftTextPosition(20);
      } else if (windowWidth > 375 && windowWidth <= 428) {
        return setLeftTextPosition(50);
      } else if (windowWidth > 428 && windowWidth <= 600) {
        return setLeftTextPosition(100);
      } else {
        return console.log('windowWidth - ', windowWidth);
      }
    }

    if (process.browser && document) {
      syncWidth();
      document.addEventListener('resize', syncWidth);
    }
    return () => {
      document.removeEventListener('resize', syncWidth);
    };
  }, [process.browser]);

  return leftTextPosition;
};

export default useTextPositionFromLeft;
