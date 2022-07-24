import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import ButtonAdd from '../../buttonAdd/ButtonAdd';
import LinkTo from '../../link/LinkTo';
import flak from '../../../assets/images/butles/red.png';
import s from './Seduction.module.scss';

const Seduction = () => {
  const dispatch = useDispatch();
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();
  const onClickAdd = () => {
    const item = {
      id: 2,
      name: 'seduction',
      price: 100,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };
  const startAnimationPosition = clientHeight - 300;

  useEffect(() => {
    if (refSection) {
      setClientHeight(refSection.current.offsetTop - 200);
    }
  }, []);

  const { scrollY } = useViewportScroll();
  const top = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [150, 0],
  );
  const opacity = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [0, 1],
  );
  const scale = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [0, 1],
  );
  const left = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [-300, 0],
  );

  return (
    <section ref={refSection} className={s.section}>
      <div className={s.bgWrapper}>
        <motion.div style={{ left }} className={s.motionBgWrapper}>
          <span>SEDUCTION</span>
        </motion.div>
      </div>

      <div className={s.container}>
        <div className={s.imgWrapper}>
          <div className={s.imageWrapper}>
            <motion.div
              style={{ top, opacity, scale }}
              className={s.motionImageWrapper}>
              <Image
                className={s.flak}
                src={flak}
                alt="twirl"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </div>

        <div className={s.textWtapper}>
          <motion.div style={{ top, opacity }} className={s.motionTextWrapper}>
            <h3 className={s.title}>seduction - is smells like seduce</h3>
            <p className="text">
              A rich, luxurious fragrance designed for women. Self-confident who
              is not afraid demonstrate luxury <br />
              even on the skin...
            </p>
            <div className={s.btnswrapper}>
              <ButtonAdd onClickAdd={onClickAdd} />
              <LinkTo path={'/seduction'} name={'see more'} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Seduction;
