import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import butle from '../../../assets/images/butles/blue.png';
import bg from '../../../assets/images/home/treasure-bg.png';
import s from './MiniProducts.module.scss';

export const TreasureMini = () => {
  return (
    <>
      <Link href="/treasure">
        <a className={s.wrapper}>
          <div className={s.bg}>
            <Image src={bg} alt={bg} layout="fill" />
          </div>
          <div className={s.butle}>
            <Image src={butle} alt="butle" placeholder="blur" />
          </div>
          <p className={s.name}>treasure</p>
        </a>
      </Link>
    </>
  );
};
