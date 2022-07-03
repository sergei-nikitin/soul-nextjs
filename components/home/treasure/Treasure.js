import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import LinkTo from '../../link/LinkTo';
import ButtonAdd from '../../buttonAdd/ButtonAdd';
import bg from '../../../assets/images/home/treasure-bg.png';
import flak from '../../../assets/images/butles/blue.png';
import s from '../twirl/Twirl.module.scss';

const Treasure = () => {
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = React.useState(0);
  const sizes = [50, 75, 100];
  const onClickAdd = () => {
    const item = {
      id: 3,
      name: 'treasure',
      price: 100,
      imageUrl: flak,
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };
  const leftAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,

      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
  };
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
      <motion.div
        custom={2}
        variants={rightAnimation}
        className={s.bgWrapperTreasure}>
        <span>TREASURE</span>
      </motion.div>

      <div className={s.container}>
        <motion.div
          custom={2}
          variants={leftAnimation}
          className={s.textWtapper}>
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

        <motion.div
          custom={3}
          variants={toTopAnimation}
          className={s.imgWrapper}>
          <div className={s.imageWrapper}>
            <Image
              className={s.flak}
              src={flak}
              alt="twirl"
              placeholder="blur"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default Treasure;
