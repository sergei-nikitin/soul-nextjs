import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import img from '../../assets/images/defaultButle.png';
import s from './EmptyCart.module.scss';

export const EmptyCart = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.img}>
        <Image src={img} alt="img" />
      </div>

      <div className={s.infoWrapper}>
        <p className={s.text}>No perfumes in your cart</p>
        <Link href="/">
          <a className={s.link}> CONTINUE SHOPPING</a>
        </Link>
      </div>
    </div>
  );
};
