import React from 'react';
import { motion } from 'framer-motion';

import s from './Main.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';

const Main = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      // viewport={{ amount: 0.2, once: true }}s
      className={s.section}>
      <div className={s.container}>
        <motion.h1 custom={1} variants={toTopAnimation} className={s.title}>
          CONTACTS US
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default Main;
