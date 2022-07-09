import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import roze from '../../../assets/images/seduction/roze.png';
import f1 from '../../../assets/images/seduction/1.png';
import f2 from '../../../assets/images/seduction/2.png';
import { toTopAnimation } from '../../../assets/functions/toTop';
import { leftAnimation } from '../../../assets/functions/fromLeft';
import { rightAnimation } from '../../../assets/functions/fromRight';
import s from './Descr.module.scss';

export const Descr = () => {
  // const leftAnimation = {
  //   hidden: {
  //     x: -100,
  //     opacity: 0,
  //   },
  //   visible: (custom) => ({
  //     x: 0,
  //     opacity: 1,

  //     transition: { delay: custom * 0.2, duration: 0.3 },
  //   }),
  // };
  // const rightAnimation = {
  //   hidden: {
  //     x: 100,
  //     opacity: 0,
  //   },
  //   visible: (custom) => ({
  //     x: 0,
  //     opacity: 1,

  //     transition: { delay: custom * 0.2, duration: 0.3 },
  //   }),
  // };
  // const toTopAnimation = {
  //   hidden: {
  //     y: 100,
  //     opacity: 0,
  //   },
  //   visible: (custom) => ({
  //     y: 0,
  //     opacity: 1,

  //     transition: { delay: custom * 0.2, duration: 0.3 },
  //   }),
  // };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={s.section}>
      <div className={s.container}>
        <motion.h2 custom={1} variants={toTopAnimation} className={s.title}>
          twirl - this is how feeling smells ease and unconditional happiness
        </motion.h2>
        <motion.p custom={1} variants={toTopAnimation} className="text">
          These are emotions, who consider a person to adulthood, feelings,
          wings that lift us when it seems tenderness of touch new thoughts
          about familiar things, the highest category of owners, Freedom of
          choice, inserts and desires. These are emotions, who consider a person
          to adulthood, feelings, wings that lift us when it seems tenderness.
        </motion.p>
        <motion.div custom={2} variants={leftAnimation} className={s.f1}>
          <Image src={f1} alt="foto" />
        </motion.div>

        <motion.div custom={2} variants={rightAnimation} className={s.f2}>
          <Image src={f2} alt="foto" />
        </motion.div>

        <motion.div custom={2} variants={rightAnimation} className={s.roze}>
          <Image src={roze} alt="foto" />
        </motion.div>
      </div>
    </motion.section>
  );
};
