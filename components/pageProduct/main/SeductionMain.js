import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import bg from '../../../assets/images/seduction/bg.jpg';
import butle from '../../../assets/images/butles/red.png';
import s from './Main.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';

export const SeductionMain = () => {
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

      transition: { delay: custom * 0.2, duration: 0.8 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      // viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <div className={s.bg}>
          <Image src={bg} alt="bg" />
        </div>

        <div className={s.butleWrapper}>
          <motion.div
            ref={butleContainer}
            custom={2}
            variants={toTopAnimation}
            className={buttlePosition ? s.butleDown : s.butleTop}>
            <Image src={butle} alt="foto" />
          </motion.div>
        </div>

        <motion.h1 custom={1} variants={titleAnimation} className={s.title}>
          Seduction
        </motion.h1>
      </div>
    </motion.section>
  );
};
