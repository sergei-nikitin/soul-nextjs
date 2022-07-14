import {
  DEFAULT_WINDOW_DESKTOP_WIDTH,
  DEFAULT_WINDOW_MOBILE_WIDTH,
  DEFAULT_WINDOW_TABLET_WIDTH
} from "../config/windowWidth";

export const getValueBasedOnDeviceWidth = (width, widthMap) => {
  if (width >= DEFAULT_WINDOW_DESKTOP_WIDTH) {
    return widthMap[DEFAULT_WINDOW_DESKTOP_WIDTH];
  }
  if (width >= DEFAULT_WINDOW_TABLET_WIDTH) {
    return widthMap[DEFAULT_WINDOW_TABLET_WIDTH];
  }

  return widthMap[DEFAULT_WINDOW_MOBILE_WIDTH];
};
