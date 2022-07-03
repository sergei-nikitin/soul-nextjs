import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import butle from '../../../assets/images/butles/white.png';
import bg from '../../../assets/images/home/twirl-bg.png';
import s from './MiniProducts.module.scss';

export const TwirlMini = () => {
  return (
    <>
      <Link href="/twirl">
        <a className={s.wrapper}>
          <div className={s.bg}>
            <Image src={bg} alt={bg} layout="fill" />
          </div>
          <div className={s.butle}>
            <Image src={butle} alt="butle" placeholder="blure" />
          </div>

          <p className={s.name}>twirl</p>
        </a>
      </Link>
    </>
  );
};
