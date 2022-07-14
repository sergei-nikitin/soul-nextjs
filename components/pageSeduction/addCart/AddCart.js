import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import { rightAnimation } from '../../../assets/functions/motionAnimations';
import ButtonAdd from '../../buttonAdd/ButtonAdd';
import foto from '../../../assets/images/seduction/butle.png';
import s from './AddCart.module.scss';

export const AddCart = ({ onClickAdd, onClickPlus, onClickMinus, count }) => {
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();

  useEffect(() => {
    if (refSection) {
      setClientHeight(refSection.current.offsetTop - 100);
    }
  }, []);

  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, `${clientHeight}`], [0.5, 1]);

  return (
    <section ref={refSection} className={s.section}>
      <div className={s.container}>
        {/* foto */}
        <div className={s.fotoBlock}>
          <div className={s.butleWrapper}>
            <div className={s.foto}>
              <motion.div
                className={s.motionFotoWrapper}
                style={{
                  scale,
                }}>
                <Image src={foto} alt="foto" />
              </motion.div>
            </div>
          </div>
        </div>
        {/* count and info */}
        <div custom={2} variants={rightAnimation} className={s.infoWrapper}>
          <div className={s.nameAndPrice}>
            <p>seduction</p>
            <p>$ 100.00</p>
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
              <span>{count}</span>
              <button onClick={onClickPlus} type="button">
                +
              </button>
            </div>
            <motion.div
              style={{
                scale,
              }}>
              <ButtonAdd onClickAdd={onClickAdd} />
            </motion.div>
          </div>
          <p className={s.text}>
            For girls who want to create the perfect romantic image, for those
            who have something to talk about. Feelings of love will be
            resurrected along with the aroma. Delicate poetry. Always gorgeous,
            always free and frank.
          </p>
        </div>
      </div>
    </section>
  );
};
