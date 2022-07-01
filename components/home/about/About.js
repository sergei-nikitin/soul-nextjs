import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import LinkTo from '../../link/LinkTo';
import img from '../../../assets/images/home/aboutUS.png';
import s from './About.module.scss';

const About = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,

      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
  };
  const textAnimationFromRight = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
  };
  const fotoAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <motion.h2 custom={1} variants={textAnimation} className={s.title}>
          ABOUT US
        </motion.h2>
        <motion.div
          custom={2}
          variants={fotoAnimation}
          className={s.fotoWrapper}>
          <div className={s.imageWrapper}>
            <Image
              className={s.aboutImg}
              src={img}
              alt="foto"
              placeholder="blur"
            />
          </div>
        </motion.div>

        <div className={s.descrWrapper}>
          <div className={s.textBlock}>
            <motion.p
              custom={2}
              variants={textAnimationFromRight}
              className="text">
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things, the highest category of owners, Freedom of
              choice, inserts and desires.
            </motion.p>
            <motion.p
              custom={3}
              variants={textAnimationFromRight}
              className="text">
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
    </motion.section>
  );
};

export default About;
