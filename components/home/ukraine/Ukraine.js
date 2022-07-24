import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import img from '../../../assets/images/home/soul-of-ukraine.png';
import btl from '../../../assets/images/home/ukraine-btl.png';
import s from './Ukraine.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';

const Ukraine = () => {
  const dispatch = useDispatch();
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();

  const onClickAdd = () => {
    const item = {
      id: 4,
      name: 'soul of ukraine',
      price: 100,
      imageUrl: btl,
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

  return (
    <section ref={refSection} className={s.section}>
      <div className={s.container}>
        <motion.p style={{ scale, opacity }} className={s.title}>
          Soul of Ukraine
        </motion.p>
        <div className={s.imageWrapper}>
          <Image className={s.img} src={img} alt="foto" />
        </div>

        <div className={s.desrc}>
          <p className={s.text}>
            The perfumers who were working on our amazing fragrance SOUL
            OF UKRAINE. The best noses of the world for the most unique perfume!
            This project is fully dedicated to support Ukrainian kids who
            suffered during the war in Ukraine.
          </p>
          <p className={s.text}>
            My appreciation to Symrise for their support and attention
            to my project! My appreciation to Леся Верба for her amazing and
            unique painting in our box for the fragrance.
          </p>
          <p className={s.text}>
            All income will be transferred to the Charity undation The Child
            of Unified Ukraine The limited edition of the very unique and
            authentic fragrance dedicated to Ukraine
          </p>
          <div onClick={onClickAdd} className={s.wrapper}>
            <button type="button" className={s.btn}>
              ADD TO CART
            </button>

            <span className={s.icon}>
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.756 7.015a1.057 1.057 0 0 0-.825-.401h-1.778L12.295.16a.348.348 0 0 0-.512-.084.37.37 0 0 0-.05.53l4.534 6.012H3.242L8.022.62A.37.37 0 0 0 7.98.093a.35.35 0 0 0-.51.067L2.31 6.618H1.065c-.32 0-.621.147-.824.4a1.116 1.116 0 0 0-.222.906l1.828 9.431a3.299 3.299 0 0 0 1.108 1.9A3.15 3.15 0 0 0 4.988 20h10.024a3.15 3.15 0 0 0 2.032-.746 3.299 3.299 0 0 0 1.108-1.9l1.828-9.43a1.116 1.116 0 0 0-.224-.909Zm-2.29 10.198c-.113.58-.418 1.1-.864 1.475a2.45 2.45 0 0 1-1.58.579H4.985a2.451 2.451 0 0 1-1.586-.575 2.568 2.568 0 0 1-.868-1.48L.713 7.783a.37.37 0 0 1 .077-.305.352.352 0 0 1 .279-.13H18.93a.352.352 0 0 1 .279.13.373.373 0 0 1 .077.305l-1.821 9.43Z"
                  fill="#BB9C13"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ukraine;
