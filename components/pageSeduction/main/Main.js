import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import butle from '../../../assets/images/butles/red.png';
import s from './Main.module.scss';

export const Main = () => {
  const toTopAnimation = {
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
        <div className={s.butleWrapper}>
          <motion.div custom={2} variants={toTopAnimation} className={s.butle}>
            <Image src={butle} alt="foto" />
          </motion.div>
        </div>
        <motion.h1 custom={1} variants={toTopAnimation} className={s.title}>
          Seduction
        </motion.h1>
      </div>
    </motion.section>
  );
};
