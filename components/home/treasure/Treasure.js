import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import LinkTo from '../../link/LinkTo';
import ButtonAdd from '../../buttonAdd/ButtonAdd';
import flak from '../../../assets/images/butles/blue.png';
import s from '../twirl/Twirl.module.scss';

const Treasure = () => {
  const dispatch = useDispatch();
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();

  const onClickAdd = () => {
    const item = {
      id: 3,
      name: 'treasure',
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
    [-200, 0],
  );
  const right = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [-300, 0],
  );

  return (
    <section ref={refSection} className={s.section}>
      <div className={s.bgWrapperTreasure}>
        <motion.div style={{ right }} className={s.motionBgWrapperTreasure}>
          <span>TREASURE</span>
        </motion.div>
      </div>

      <div className={s.container}>
        <div className={s.textWtapper}>
          <motion.div style={{ top, opacity }} className={s.motionTextWrapper}>
            <h3 className={s.title}>treasure - male energy</h3>
            <p className="text">
              A fragrance for men, sophisticated and a little overbearing.
              <br />
              Seductive masculinity...
            </p>
            <div className={s.btnswrapper}>
              <ButtonAdd onClickAdd={onClickAdd} />
              <LinkTo path={'/treasure'} name={'see more'} />
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
export default Treasure;
