import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import img1 from '../../../assets/images/about-us/about-us-1.jpg';
import img2 from '../../../assets/images/about-us/about-us-2.jpg';
import img3 from '../../../assets/images/about-us/about-us-3.jpg';
import s from './Main.module.scss';

export const Main = () => {
  const fotoAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,

      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
  };

  const leftAnimation = {
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

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <motion.h1 custom={1} variants={leftAnimation} className={s.title1}>
          brand was born
        </motion.h1>
        <motion.h2 custom={1.5} variants={leftAnimation} className={s.title2}>
          in great love...
        </motion.h2>
        <p className="text">
          These are emotions, who consider a person to adulthood, feelings,
          wings that lift us when it seems tenderness of touch new thoughts
          about familiar things, the highest category of owners, Freedom of
          choice, inserts and desires.
        </p>
        <p className="text">
          These are emotions, who consider a person to adulthood, feelings,
          wings that lift us when it.
        </p>
      </div>
      <motion.div
        custom={2}
        variants={fotoAnimation}
        className={s.image1Wrapper}>
        <Image className={s.img1} src={img1} alt="img" />
      </motion.div>

      <motion.div
        custom={3}
        variants={fotoAnimation}
        className={s.image2Wrapper}>
        <Image className={s.img2} src={img2} alt="img" />
      </motion.div>

      <motion.div
        custom={2}
        variants={fotoAnimation}
        className={s.image3Wrapper}>
        <Image className={s.img3} src={img3} alt="img" />
      </motion.div>
    </motion.section>
  );
};
