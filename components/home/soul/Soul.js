import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import {motion, useViewportScroll, useTransform} from 'framer-motion';

import LinkTo from '../../link/LinkTo';
import img from '../../../assets/images/home/soul.jpg';
import s from './Soul.module.scss';
import {
  DEFAULT_WINDOW_DESKTOP_WIDTH,
  DEFAULT_WINDOW_MOBILE_WIDTH,
  DEFAULT_WINDOW_TABLET_WIDTH,
  DEFAULT_WINDOW_MINI_TABLET_WIDTH,
} from '../../../config/windowWidth';

const Soul = () => {
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();

  const widthMap = {
    [DEFAULT_WINDOW_DESKTOP_WIDTH]: clientHeight - 100,
    [DEFAULT_WINDOW_TABLET_WIDTH]: clientHeight - 400,
    [DEFAULT_WINDOW_MINI_TABLET_WIDTH]: clientHeight - 100,
    [DEFAULT_WINDOW_MOBILE_WIDTH]: clientHeight - 100,
  };
  // число px с которых нужно запускать анимацию
  const startAnimationPosition = clientHeight - 300;

  useEffect(() => {
    if (refSection) {
      setClientHeight(refSection.current.offsetTop - 500);
    }
  }, []);

  const {scrollY} = useViewportScroll();
  const top = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [100, 0],
  );

  const opacity = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [0, 1],
  );

  return (
    <section ref={refSection} className={s.section}>
      <div className={s.container}>
        <div className={s.descr}>
          <motion.div
            style={{
              top,
              opacity,
            }}
            className={s.motionTopDiv}>
            <h2 className={s.title}>SOUL OF MINE PERFUME</h2>
            <p className="text">
              Is carried in over 100 stores across 18 countries.
            </p>
            <LinkTo path={'/collection'}/>
          </motion.div>
        </div>
        <div>
          <div className={s.imageWrapper}>
            <motion.div
              style={{
                top,
                opacity,
              }}
              className={s.motionFotoWrapper}>
              <Image className={s.img} src={img} alt="img"/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Soul
