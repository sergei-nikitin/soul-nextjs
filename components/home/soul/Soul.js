import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import LinkTo from '../../link/LinkTo';
import img from '../../../assets/images/home/soul.jpg';
import s from './Soul.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';
import { leftAnimation } from '../../../assets/functions/fromLeft';

export const Soul = () => {
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();

  // число px с которых нужно запускать анимацию
  const startAnimationHeight = clientHeight - 150;
  // const startAnimationHeight = clientHeight - 50;

  useEffect(() => {
    if (refSection) {
      // setClientHeight(refSection.current.offsetTop);
      setClientHeight(refSection.current.offsetTop - 500);
    }
  }, []);

  const { scrollY } = useViewportScroll();
  const top = useTransform(
    scrollY,
    [`${startAnimationHeight}`, `${clientHeight}`],
    [100, 0],
  );
  const opacity = useTransform(
    scrollY,
    [`${startAnimationHeight}`, `${clientHeight}`],
    [0, 1],
  );

  // console.log(startAnimationHeight);
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
            <LinkTo path={'/collection'} />
          </motion.div>
        </div>
        <div>
          <div className={s.imageWrapper}>
            <Image className={s.img} src={img} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
