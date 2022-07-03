import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import butle from '../../../assets/images/butles/red.png';
import bg from '../../../assets/images/home/seduction-bg.png';
import s from './MiniProducts.module.scss';

export const SeductionMini = () => {
  return (
    <>
      <Link href="/seduction">
        <a className={s.wrapper}>
          <div className={s.bg}>
            <Image src={bg} alt={bg} layout="fill" />
          </div>
          <div className={s.butle}>
            <Image src={butle} alt="butle" placeholder="blur" />
          </div>
          <p className={s.name}>seduction</p>
        </a>
      </Link>
    </>
  );
};
