import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import ButtonAdd from '../../buttonAdd/ButtonAdd';
import foto from '../../../assets/images/seduction/butle.png';
import s from './AddCart.module.scss';

export const AddCart = ({ onClickAdd, onClickPlus, onClickMinus, count }) => {
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
        {/* foto */}
        <div className={s.fotoBlock}>
          <div className={s.butleWrapper}>
            <motion.div custom={2} variants={toTopAnimation} className={s.foto}>
              <Image src={foto} alt="foto" />
            </motion.div>
          </div>
        </div>
        {/* count and info */}
        <motion.div
          custom={2}
          variants={rightAnimation}
          className={s.infoWrapper}>
          <div className={s.nameAndPrice}>
            <p>seduction</p>
            <p>$ 132.00</p>
          </div>
          <div className={s.counter}>
            <div className={s.btns}>
              {!count ? (
                <button disbled="true" style={{ color: '#9a9491' }}>
                  -
                </button>
              ) : (
                <button onClick={onClickMinus} type="button">
                  -
                </button>
              )}
              {/* <button onClick={onClickMinus} type="button">
                -
              </button> */}
              <span>{count}</span>
              <button onClick={onClickPlus} type="button">
                +
              </button>
            </div>
            <ButtonAdd onClickAdd={onClickAdd} />
          </div>
          <p className={s.text}>
            For girls who want to create the perfect romantic image, for those
            who have something to talk about. Feelings of love will be
            resurrected along with the aroma. Delicate poetry. Always gorgeous,
            always free and frank.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};
