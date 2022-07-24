import React, { useState, useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import LinkTo from '../../link/LinkTo';
import img from '../../../assets/images/home/aboutUS.png';
import s from './About.module.scss';
import {
  DEFAULT_WINDOW_DESKTOP_WIDTH,
  DEFAULT_WINDOW_MOBILE_WIDTH,
  DEFAULT_WINDOW_TABLET_WIDTH,
  DEFAULT_WINDOW_MINI_TABLET_WIDTH,
} from '../../../config/windowWidth';
import { getValueBasedOnDeviceWidth } from '../../../utils/getValueBasedOnDeviceWidth';
import useDeviceWidth from '../../../hooks/useDeviceWidth';

const About = () => {
  const windowWidth = useDeviceWidth();
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();

  const widthMap = {
    [DEFAULT_WINDOW_DESKTOP_WIDTH]: clientHeight - 100,
    [DEFAULT_WINDOW_TABLET_WIDTH]: clientHeight - 400,
    [DEFAULT_WINDOW_MINI_TABLET_WIDTH]: clientHeight - 100,
    [DEFAULT_WINDOW_MOBILE_WIDTH]: clientHeight - 100,
  };

  const startAnimationPosition = clientHeight - 300;

  useEffect(() => {
    if (refSection) {
      setClientHeight(refSection.current.offsetTop - 500);
    }
  }, []);

  const { scrollY } = useViewportScroll();
  const top = useTransform(
    scrollY,
    [startAnimationPosition, getValueBasedOnDeviceWidth(windowWidth, widthMap)],
    [100, 0],
  );
  const opacity = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [0.3, 1],
  );
  const scale = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    // [0, getValueBasedOnDeviceWidth(windowWidth, widthMap)],
    [0.5, 1],
  );
  const left = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [-200, 0],
  );
  const right = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [-200, 0],
  );

  return (
    <section ref={refSection} className={s.section}>
      <div className={s.container}>
        <motion.h2 style={{ opacity }} className={s.title}>
          ABOUT US
        </motion.h2>

        <div className={s.fotoWrapper}>
          <span className={s.itsAbout}>
            <motion.p style={{ opacity, left }}>IT`S ABOUT</motion.p>
          </span>
          <span className={s.love}>
            <motion.p style={{ opacity, right }}>LOVE</motion.p>
          </span>
          <motion.div style={{ top, scale }} className={s.imageWrapper}>
            <Image src={img} alt="foto" placeholder="blur" />
          </motion.div>
        </div>

        <div className={s.descrWrapper}>
          <div className={s.textBlock}>
            <motion.p style={{ opacity }} className="text">
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things, the highest category of owners, Freedom of
              choice, inserts and desires.
            </motion.p>
            <motion.p style={{ opacity }} className="text">
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things.
            </motion.p>
            <div className={s.linkWrap}>
              <LinkTo path={'/about-us'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
