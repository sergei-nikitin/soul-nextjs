import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import LinkTo from '../../link/LinkTo';
import ButtonAdd from '../../buttonAdd/ButtonAdd';
import flak from '../../../assets/images/butles/blue.png';
import s from '../twirl/Twirl.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';
import { rightAnimation } from '../../../assets/functions/fromRight';
import { leftAnimation } from '../../../assets/functions/fromLeft';

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

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      // viewport={{ amount: 0.2, once: true }}
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
