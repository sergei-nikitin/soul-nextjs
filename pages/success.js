import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '../components/mainLayout/MainLayout';

import img from '../assets/images/cartFlower.png';
import s from '../components/pageCart/EmptyCart.module.scss';

export default function success() {
  return (
    <MainLayout>
      <div className={s.wrapper}>
        <div className={s.img}>
          <Image src={img} alt="img" />
        </div>

        <div className={s.infoWrapper}>
          <p className={s.text}>
            Your order successfully <br /> been placed
          </p>
          <p className="text">We will contact you during the day</p>
          <Link href="/">
            <a className={s.link}> CONTINUE SHOPPING</a>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
