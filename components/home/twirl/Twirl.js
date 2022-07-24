import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useDispatch } from 'react-redux';

import LinkTo from '../../link/LinkTo';
import { addItem } from '../../../redux/slices/cartSlice';

import ButtonAdd from '../../buttonAdd/ButtonAdd';
import flak from '../../../public/images/butles/white.png';
import s from './Twirl.module.scss';

const Twirl = () => {
  const dispatch = useDispatch();
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();

  const onClickAdd = () => {
    const item = {
      id: 1,
      name: 'twirl',
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

  const right = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [-300, 0],
  );

  return (
    <section ref={refSection} className={s.section}>
      <div className={s.bgWrapper}>
        <motion.div style={{ right }} className={s.motionBgWrapper}>
          <span>TWIRL</span>
        </motion.div>
      </div>

      <div className={s.container}>
        <div className={s.textWtapper}>
          <motion.div style={{ top, opacity }} className={s.motionTextWrapper}>
            <h3 className={s.title}>
              twirl - this is how feeling smells ease and unconditional
              happiness
            </h3>
            <p className="text">
              For girls who want to create the perfect romantic image, for those
              who have something to talk about...
            </p>
            <div className={s.btnswrapper}>
              <ButtonAdd onClickAdd={onClickAdd} />
              <LinkTo path={'/twirl'} name={'see more'} />
            </div>
          </motion.div>
        </div>

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
      </div>
    </section>
  );
};
export default Twirl;
