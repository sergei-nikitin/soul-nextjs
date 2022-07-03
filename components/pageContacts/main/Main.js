import React from 'react';
import { motion } from 'framer-motion';

import s from './Main.module.scss';

const Main = () => {
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
        <motion.h1 custom={1} variants={toTopAnimation} className={s.title}>
          CONTACTS US
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default Main;
