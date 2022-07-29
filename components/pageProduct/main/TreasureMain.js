import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

import bg from '../../../assets/images/treasure/bg.jpg';
import butle from '../../../assets/images/butles/blue.png';
import s from './Main.module.scss';
import {toTopAnimation} from '../../../assets/functions/toTop';
import blue_1920 from "../../../assets/videos/blueBotl/1920.mp4";
import blue_428 from "../../../assets/videos/blueBotl/428.mp4";
import useCurrentWidth from "../../../hooks/useCurrentWidth";

export const TreasureMain = () => {
  const deviceWidth = useCurrentWidth();
  const butleContainer = useRef();
  const [buttlePosition, setButlePosition] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setButlePosition(true);
      } else {
        setButlePosition(false);
      }
    });
    observer.observe(butleContainer.current);
  }, []);

  const titleAnimation = {
    hidden: {
      scale: 6,
      opacity: 0,
    },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,

      transition: {delay: custom * 0.2, duration: 0.8},
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      // viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <div className={s.bg}>
          {deviceWidth > 570 ? <video

            className={s.bottleVideoDesktop}
            autoPlay
            preload="auto"
            loop
            muted
            playsInline
            src={blue_1920}
            // style="pointer-events: none;"
          /> : <Image src={bg} alt="bg"/>}
        </div>

        <div className={s.butleWrapper}>
          <motion.div
            ref={butleContainer}
            custom={2}
            variants={toTopAnimation}
            className={`${deviceWidth > 570 ? s.displayNone : s.displayBlock} ${buttlePosition ? s.butleDown : s.butleTop}`}>
            <Image src={butle} alt="foto"/>
          </motion.div>
          <video
            className={s.bottleVideo}
            autoPlay
            preload="auto"
            loop
            muted
            playsInline
            src={blue_428}
          />
        </div>

        <motion.h1 custom={1} variants={titleAnimation} className={s.title}>
          Treasure
        </motion.h1>
      </div>
    </motion.section>
  );
};
