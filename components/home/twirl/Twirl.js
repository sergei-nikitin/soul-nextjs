import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import LinkTo from '../../link/LinkTo';
import { addItem } from '../../../redux/slices/cartSlice';
// import { toTopAnimation } from '../../../assets/functions/toTop';

import ButtonAdd from '../../buttonAdd/ButtonAdd';
import flak from '../../../public/images/butles/white.png';
import s from './Twirl.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';
import { leftAnimation } from '../../../assets/functions/fromLeft';
import { rightAnimation } from '../../../assets/functions/fromRight';

const Twirl = () => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id: 1,
      name: 'twirl',
      price: 100,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={s.section}>
      <motion.div custom={2} variants={rightAnimation} className={s.bgWrapper}>
        <span>TWIRL</span>
      </motion.div>

      <div className={s.container}>
        <motion.div
          custom={2}
          variants={leftAnimation}
          className={s.textWtapper}>
          <h3 className={s.title}>
            twirl - this is how feeling smells ease and unconditional happiness
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
export default Twirl;
