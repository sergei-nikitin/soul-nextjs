import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import roze from '../../../assets/images/seduction/roze.png';
import f1 from '../../../assets/images/seduction/1.png';
import f2 from '../../../assets/images/seduction/2.png';
import { toTopAnimation } from '../../../assets/functions/toTop';
// import { leftAnimation } from '../../../assets/functions/fromLeft';
// import { rightAnimation } from '../../../assets/functions/fromRight';
import s from './Descr.module.scss';

// const useAdaptiveAnimation = (fn) => {};

// вынести в отд
const DEFAULT_WINDOW_DESK_WIDTH = 1280;
const DEFAULT_WINDOW_TABL_WIDTH = 1024;
const DEFAULT_WINDOW_MOB_WIDTH = 428;

const widthMap = {
  [DEFAULT_WINDOW_DESK_WIDTH]: 700,
  [DEFAULT_WINDOW_TABL_WIDTH]: 300,
  [DEFAULT_WINDOW_MOB_WIDTH]: 300,
};

const getValueBaseOnDeviseWidth = (width, widthMap) => {
  console.log('width -----', width);
  if (width >= DEFAULT_WINDOW_DESK_WIDTH) {
    return widthMap[DEFAULT_WINDOW_DESK_WIDTH];
  }
  if (width >= DEFAULT_WINDOW_TABL_WIDTH) {
    return widthMap[DEFAULT_WINDOW_TABL_WIDTH];
  }

  return widthMap[DEFAULT_WINDOW_DESK_WIDTH];
};

const document = null;

export const Descr = () => {
  const [windowWidth, setWindowWidth] = useState(DEFAULT_WINDOW_DESK_WIDTH);
  const { scrollY } = useViewportScroll();
  const left = useTransform(
    scrollY,
    [0, getValueBaseOnDeviseWidth(1200, widthMap)],
    [-200, 0],
  );
  const right = useTransform(
    scrollY,
    [0, getValueBaseOnDeviseWidth(1200, widthMap)],
    [-200, 0],
  );
  // const top = useTransform(scrollY, [0, 400], [100, 0]);
  const opacity = useTransform(
    scrollY,
    [0, getValueBaseOnDeviseWidth(1200, widthMap)],
    [0, 1],
  );

  // useEffect(() => {
  //   if (document) {
  //     const sincWinth = () => {
  //       setWindowWidth(document.body.offsetWidth);
  //       console.log(windowWidth);
  //     };
  //     const listener = document.addEventListener('resize', sincWinth);
  //     return () => {
  //       document.removeEventListener('resize', listener);
  //     };
  //   }
  // }, [document]);

  // console.log(document && document.body.offsetWidth);

  // console.log(getValueBaseOnDeviseWidth(windowWidth, widthMap));

  return (
    <motion.section
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ amount: 0.5 }}
      className={s.section}>
      <div className={s.container}>
        <motion.h2
          style={{
            opacity,
          }}
          className={s.title}>
          twirl - this is how feeling smells ease and unconditional happiness
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
            className={s.f1Wrapper}
            style={{
              left,
              opacity,
            }}>
            <Image src={f1} alt="foto" />
          </motion.div>
        </div>

        <div className={s.f2}>
          <motion.div
            style={{
              right,
              opacity,
              position: 'absolute',
              height: '100%',
              width: '100%',
            }}>
            <Image src={f2} alt="foto" />
          </motion.div>
        </div>
        <div className={s.roze}>
          <motion.div
            style={{
              right,
              opacity,
              position: 'absolute',
              height: '100%',
              width: '100%',
            }}>
            <Image src={roze} alt="foto" />
          </motion.div>
        </div>

        {/* <motion.div custom={2} variants={rightAnimation} className={s.f2}>
          <Image src={f2} alt="foto" />
        </motion.div> */}

        {/* <motion.div custom={2} variants={rightAnimation} className={s.roze}>
          <Image src={roze} alt="foto" />
        </motion.div> */}
      </div>
    </motion.section>
  );
};
