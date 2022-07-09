import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import LinkTo from '../../link/LinkTo';
import img from '../../../assets/images/home/brand.png';
import s from './Brand.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';
import { leftAnimation } from '../../../assets/functions/fromLeft';

const Brand = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      // viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <motion.h2 custom={2} variants={leftAnimation} className={s.titleMob}>
          <span> This brand</span> <br />
          <span>was born in</span> <br />
          <span> great love...</span>
        </motion.h2>
        <motion.h2 custom={2} variants={leftAnimation} className={s.title}>
          This brand was born <br />
          in great love...
        </motion.h2>
        <div className={s.content}>
          <div className={s.descr}>
            <p className="text">
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things, the highest category of owners, Freedom of
              choice, inserts and desires.
            </p>

            <LinkTo path={'/about-us'} />
          </div>
          <motion.div custom={3} variants={toTopAnimation}>
            <div className={s.imageWrapper}>
              <Image className={s.img} src={img} alt="foto" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Brand;
