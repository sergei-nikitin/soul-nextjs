import Reactб, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import LinkTo from '../../link/LinkTo';
import foto1 from '../../../assets/images/about-us/about-us-1.jpg';
import foto2 from '../../../assets/images/home/aboutUS.png';
import foto3 from '../../../assets/images/home/brand.png';

import s from './History.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';
import { rightAnimation } from '../../../assets/functions/fromRight';
import {
  DEFAULT_WINDOW_DESKTOP_WIDTH,
  DEFAULT_WINDOW_MOBILE_WIDTH,
  DEFAULT_WINDOW_TABLET_WIDTH,
  DEFAULT_WINDOW_MINI_TABLET_WIDTH,
} from '../../../config/windowWidth';
import { getValueBasedOnDeviceWidth } from '../../../utils/getValueBasedOnDeviceWidth';
import useDeviceWidth from '../../../hooks/useDeviceWidth';

export const History = () => {
  const windowWidth = useDeviceWidth();
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();

  const startAnimationPosition = clientHeight - 230;

  useEffect(() => {
    if (refSection) {
      setClientHeight(refSection.current.offsetTop - 200);
    }
  }, []);

  const widthMap = {
    [DEFAULT_WINDOW_DESKTOP_WIDTH]: clientHeight,
    [DEFAULT_WINDOW_TABLET_WIDTH]: clientHeight,
    [DEFAULT_WINDOW_MINI_TABLET_WIDTH]: clientHeight,
    [DEFAULT_WINDOW_MOBILE_WIDTH]: clientHeight,
  };

  const { scrollY } = useViewportScroll();

  const scale = useTransform(
    scrollY,
    [startAnimationPosition, getValueBasedOnDeviceWidth(windowWidth, widthMap)],
    [0.5, 1],
  );

  const opacity = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [0, 1],
  );

  return (
    <section ref={refSection} className={s.section}>
      <div className={s.container}>
        <motion.h2 style={{ opacity, scale }} className={s.title}>
          Our History
        </motion.h2>

        <div className={s.textWrapprt}>
          <motion.p className="text">
            These are emotions, who consider a person to adulthood, feelings,
            wings that lift us when it seems tenderness of touch new thoughts
            about familiar things, the highest category of owners, Freedom of
            choice, inserts and desires.
          </motion.p>

          <div className={s.fotoContainer}>
            <div className={s.foto1}>
              <motion.div
                style={{ opacity, scale }}
                className={s.motionFotoWrapper}>
                <Image src={foto1} alt="foto" />
              </motion.div>
            </div>
            <div className={s.foto2}>
              <motion.div
                style={{ opacity, scale }}
                className={s.motionFotoWrapper}>
                <Image src={foto2} alt="foto" />
              </motion.div>
            </div>

            <div className={s.foto3}>
              <motion.div
                style={{ opacity, scale }}
                className={s.motionFotoWrapper}>
                <Image src={foto3} alt="foto" />
              </motion.div>
            </div>
          </div>
          <motion.p className="text">
            These are emotions, who consider a person to adulthood, feelings,
            wings that lift us when it seems tenderness of touch new thoughts
            about familiar things, the highest category of owners, Freedom of
            choice, inserts and desires. These are emotions, who consider a
            person to adulthood, feelings, wings that lift us when it seems.
          </motion.p>
          <div className={s.linkWrapper}>
            <LinkTo path={'/collection'} />
          </div>
        </div>
      </div>
    </section>
  );
};
