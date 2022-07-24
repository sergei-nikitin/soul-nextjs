import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import roze from '../../../assets/images/seduction/roze.png';
import f1 from '../../../assets/images/seduction/1.png';
import f2 from '../../../assets/images/seduction/2.png';
import s from './Descr.module.scss';
import {
  DEFAULT_WINDOW_DESKTOP_WIDTH,
  DEFAULT_WINDOW_MOBILE_WIDTH,
  DEFAULT_WINDOW_TABLET_WIDTH,
  DEFAULT_WINDOW_MINI_TABLET_WIDTH,
} from '../../../config/windowWidth';
import { getValueBasedOnDeviceWidth } from '../../../utils/getValueBasedOnDeviceWidth';
import useDeviceWidth from '../../../hooks/useDeviceWidth';

const widthMap = {
  [DEFAULT_WINDOW_DESKTOP_WIDTH]: 700,
  [DEFAULT_WINDOW_TABLET_WIDTH]: 1000,
  [DEFAULT_WINDOW_MINI_TABLET_WIDTH]: 300,
  [DEFAULT_WINDOW_MOBILE_WIDTH]: 800,
};

export const TreasureDescr = () => {
  const windowWidth = useDeviceWidth();
  const { scrollY } = useViewportScroll();
  const left = useTransform(
    scrollY,
    [0, getValueBasedOnDeviceWidth(windowWidth, widthMap)],
    [-200, 0],
  );
  const right = useTransform(
    scrollY,
    [0, getValueBasedOnDeviceWidth(windowWidth, widthMap)],
    [-200, 0],
  );

  const opacity = useTransform(
    scrollY,
    [0, getValueBasedOnDeviceWidth(windowWidth, widthMap)],
    [0, 1],
  );

  if (process.browser && window) {
    console.log();
  }

  return (
    <motion.section className={s.section}>
      <div className={s.container}>
        <motion.h2
          style={{
            opacity,
          }}
          className={s.title}>
          treashure - this is how feeling smells ease and unconditional
          happiness
        </motion.h2>
        <motion.p style={{ opacity }} className="text">
          These are emotions, who consider a person to adulthood, feelings,
          wings that lift us when it seems tenderness of touch new thoughts
          about familiar things, the highest category of owners, Freedom of
          choice, inserts and desires. These are emotions, who consider a person
          to adulthood, feelings, wings that lift us when it seems tenderness.
        </motion.p>

        <div className={s.f1}>
          <motion.div
            className={s.fWrapper}
            style={{
              left,
              opacity,
            }}>
            <Image src={f1} alt="foto" />
          </motion.div>
        </div>

        <div className={s.f2}>
          <motion.div
            className={s.fWrapper}
            style={{
              right,
              opacity,
            }}>
            <Image src={f2} alt="foto" />
          </motion.div>
        </div>
        <div className={s.roze}>
          <motion.div
            className={s.fWrapper}
            style={{
              right,
              opacity,
            }}>
            <Image src={roze} alt="foto" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
