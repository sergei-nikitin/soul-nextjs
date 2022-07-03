import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import LinkTo from '../../link/LinkTo';
import foto1 from '../../../assets/images/about-us/about-us-1.jpg';
import foto2 from '../../../assets/images/home/aboutUS.png';
import foto3 from '../../../assets/images/home/brand.png';

import s from './History.module.scss';

export const History = () => {
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
  const rightAnimation = {
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
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <motion.h2 custom={1} variants={toTopAnimation} className={s.title}>
          Our History
        </motion.h2>

        <div className={s.textWrapprt}>
          <motion.p custom={2} variants={rightAnimation} className="text">
            These are emotions, who consider a person to adulthood, feelings,
            wings that lift us when it seems tenderness of touch new thoughts
            about familiar things, the highest category of owners, Freedom of
            choice, inserts and desires.
          </motion.p>

          <div className={s.fotoContainer}>
            <motion.div
              custom={2}
              variants={toTopAnimation}
              className={s.foto1}>
              <Image src={foto1} alt="foto" />
            </motion.div>
            <motion.div
              custom={3}
              variants={toTopAnimation}
              className={s.foto2}>
              <Image src={foto2} alt="foto" />
            </motion.div>

            <motion.div
              custom={4}
              variants={toTopAnimation}
              className={s.foto3}>
              <Image src={foto3} alt="foto" />
            </motion.div>
          </div>
          <motion.p custom={2} variants={rightAnimation} className="text">
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
    </motion.section>
  );
};
