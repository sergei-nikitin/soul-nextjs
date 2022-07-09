import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import ButtonAdd from '../../buttonAdd/ButtonAdd';
import LinkTo from '../../link/LinkTo';
import flak from '../../../assets/images/butles/red.png';
import s from './Seduction.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';
import { rightAnimation } from '../../../assets/functions/fromRight';
import { leftAnimation } from '../../../assets/functions/fromLeft';

const Seduction = () => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id: 2,
      name: 'seduction',
      price: 100,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      // viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <motion.div custom={2} variants={leftAnimation} className={s.bgWrapper}>
        <span>SEDUCTION</span>
      </motion.div>

      <div className={s.container}>
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

        <motion.div
          custom={2}
          variants={rightAnimation}
          className={s.textWtapper}>
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
    </motion.section>
  );
};
export default Seduction;
