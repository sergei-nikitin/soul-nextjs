import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import LinkTo from '../../link/LinkTo';
import img from '../../../assets/images/home/soul.jpg';
import s from './Soul.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';
import { leftAnimation } from '../../../assets/functions/fromLeft';

export const Soul = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      // viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <motion.div custom={2} variants={leftAnimation} className={s.descr}>
          <h2 className={s.title}>SOUL OF MINE PERFUME</h2>
          <p className="text">
            Is carried in over 100 stores across 18 countries.
          </p>
          <LinkTo path={'/collection'} />
        </motion.div>
        <motion.div custom={3} variants={toTopAnimation}>
          <div className={s.imageWrapper}>
            <Image className={s.img} src={img} alt="img" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
