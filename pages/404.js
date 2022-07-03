import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';

import img from '../assets/images/defaultButle.png';
import s from '../components/pageCart/EmptyCart.module.scss';

const notFoundPage = () => {
  return (
    <MainLayout title="Page not found">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 50px)',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.5)',
        }}>
        <div className={s.wrapper}>
          <div className={s.img}>
            <Image src={img} alt="img" />
          </div>

          <div>
            <p className={s.text}>That page cannot be found</p>
            <Link href="/">
              <a className={s.link}> CONTINUE SHOPPING</a>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default notFoundPage;
