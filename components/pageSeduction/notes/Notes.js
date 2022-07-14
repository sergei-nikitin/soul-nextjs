import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { leftAnimation } from '../../../assets/functions/fromLeft';
import { rightAnimation } from '../../../assets/functions/fromRight';

import f1 from '../../../assets/images/seduction/notes1.png';
import f2 from '../../../assets/images/seduction/notes2.png';
import f3 from '../../../assets/images/seduction/notes3.jpg';
import f4 from '../../../assets/images/seduction/notes4.jpg';
import f5 from '../../../assets/images/seduction/notes5.jpg';
import f6 from '../../../assets/images/seduction/notes6.jpg';
import s from './Notes.module.scss';

export const Notes = () => {
  const [visible, setVisible] = React.useState(true);
  const [visible3, setVisible3] = React.useState(false);
  const [visible5, setVisible5] = React.useState(false);
  const handleVisibleF1 = () => {
    setVisible(true);
  };
  const handleVisibleF3 = () => {
    setVisible3(true);
  };
  const handleHiddenF3 = () => {
    setVisible3(false);
  };
  const handleVisibleF5 = () => {
    setVisible5(true);
  };
  const handleHiddenF5 = () => {
    setVisible5(false);
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={s.section}>
      <div className={s.container}>
        <motion.div
          custom={2}
          variants={leftAnimation}
          className={s.fotoLeftWrapper}>
          <div className={visible ? s.fotoLeftVisible : s.fotoLeft}>
            <Image src={f1} alt="foto" />
          </div>
          <div className={visible3 ? s.fotoLeftVisible : s.fotoLeft}>
            <Image src={f3} alt="foto" />
          </div>
          <div className={visible5 ? s.fotoLeftVisible : s.fotoLeft}>
            <Image src={f5} alt="foto" />
          </div>
        </motion.div>

        <ul className={s.list}>
          <li onMouseEnter={handleVisibleF1} className={s.listItem}>
            <p className={s.title}>top notes</p>
            <p className={s.descr}>
              Saffron, pineapple, violet leaves, raspberry, peach
            </p>
            <div className={s.fotoRight}>
              <Image src={f2} alt="foto" />
            </div>
          </li>
          <li
            onMouseEnter={handleVisibleF3}
            onMouseLeave={handleHiddenF3}
            className={s.listItem}>
            <p className={s.title}>heart notes</p>
            <p className={s.descr}>Geranium, neroli, orange bolossom, rose</p>
            <div className={s.fotoRight}>
              <Image src={f4} alt="foto" />
            </div>
          </li>
          <li
            onMouseEnter={handleVisibleF5}
            onMouseLeave={handleHiddenF5}
            className={s.listItem}>
            <p className={s.title}>base notes</p>
            <p className={s.descr}>Sandal, patchoudi, musks, amber, vanilla</p>
            <div className={s.fotoRight}>
              <Image src={f6} alt="foto" />
            </div>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};
