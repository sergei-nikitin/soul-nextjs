import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import { rightAnimation } from '../../../assets/functions/motionAnimations';
import ButtonAdd from '../../buttonAdd/ButtonAdd';
import foto from '../../../assets/images/twirl/butle.png';
import bg from '../../../assets/images/twirl/bgAdd.png';
import s from './AddCart.module.scss';

import {
  DEFAULT_WINDOW_DESKTOP_WIDTH,
  DEFAULT_WINDOW_MOBILE_WIDTH,
  DEFAULT_WINDOW_TABLET_WIDTH,
  DEFAULT_WINDOW_MINI_TABLET_WIDTH,
} from '../../../config/windowWidth';
import { getValueBasedOnDeviceWidth } from '../../../utils/getValueBasedOnDeviceWidth';
import useDeviceWidth from '../../../hooks/useDeviceWidth';

export const TwirlAddCart = ({
  onClickAdd,
  onClickPlus,
  onClickMinus,
  count,
}) => {
  const windowWidth = useDeviceWidth();
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();

  const widthMap = {
    [DEFAULT_WINDOW_DESKTOP_WIDTH]: clientHeight,
    [DEFAULT_WINDOW_TABLET_WIDTH]: clientHeight,
    [DEFAULT_WINDOW_MINI_TABLET_WIDTH]: clientHeight,
    [DEFAULT_WINDOW_MOBILE_WIDTH]: clientHeight + 100,
  };

  useEffect(() => {
    if (refSection) {
      setClientHeight(refSection.current.offsetTop - 300);
    }
  }, []);

  const { scrollY } = useViewportScroll();
  const scale = useTransform(
    scrollY,
    [0, getValueBasedOnDeviceWidth(windowWidth, widthMap)],
    [0.3, 1],
  );
  if (process.browser && window) {
    console.log();
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      ref={refSection}
      className={s.section}>
      <div className={s.container}>
        {/* foto */}
        <div className={s.fotoBlock}>
          <div className={s.bg}>
            <Image src={bg} alt="bg" />
          </div>
          <div className={s.butleWrapper}>
            <motion.div
              className={s.foto}
              style={{
                scale,
              }}>
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
        </motion.div>
      </div>
    </motion.section>
  );
};
