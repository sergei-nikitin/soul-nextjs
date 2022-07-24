import {useEffect, useState} from "react";
import { DEFAULT_WINDOW_DESKTOP_WIDTH } from "../config/windowWidth";

const useDeviceWidth = () => {
  const [windowWidth, setWindowWidth] = useState(DEFAULT_WINDOW_DESKTOP_WIDTH);

  useEffect(
    () => {
      const syncWidth = () => {
        setWindowWidth(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
      };

      if (process.browser && document) {
        syncWidth();

        document.addEventListener('resize', syncWidth);
      }

      return () => {
        document.removeEventListener('resize', syncWidth);
      };
    },
    [process.browser]
  );

  return windowWidth;
}

export default useDeviceWidth;
