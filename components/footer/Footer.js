import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addFooterHeight } from '../../redux/slices/heightSlice';

import LogoFooter from './LogoFooter';
import BallIcon from '../icons/BallIcon';
import InstaIcon from '../icons/InstaIcon';
import TwiterIcon from '../icons/TwiterIcon';
import FaceBookIcon from '../icons/FaceBookIcon';

import s from './Footer.module.scss';

export default function Footer() {
  const router = useRouter();
  const footer = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const footerHeight = footer.current.clientHeight;
    dispatch(addFooterHeight(footerHeight));
  }, []);

  return (
    <>
      <footer ref={footer} className={s.footer}>
        <div className={s.main}>
          <div className={s.logoWrapper}>
            <LogoFooter />
          </div>

          <ul className={s.nav}>
            <li key="menu">MENU</li>

            <li key="home">
              <Link href={'/'}>
                <a
                  className={
                    router.pathname == '/'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }>
                  Home
                </a>
              </Link>
            </li>
            <li key="about-us">
              <Link href={'/aboutUs'}>
                <a
                  className={
                    router.pathname == '/aboutUs'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }>
                  About Us
                </a>
              </Link>
            </li>
            <li key="collection">
              <Link href={'/collection'}>
                <a
                  className={
                    router.pathname == '/collection'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }>
                  Collection
                </a>
              </Link>
            </li>
            <li key="contacts">
              <Link href={'/contacts'}>
                <a
                  className={
                    router.pathname == '/contacts'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }>
                  Contacts
                </a>
              </Link>
            </li>
          </ul>
          <ul className={s.nav}>
            <li key="DOCUMENTS">DOCUMENTS</li>

            <li key="rights">
              <p>All rights reserved</p>
            </li>
            <li key="Cookie">
              <p>Cookie settings</p>
            </li>
            <li key="policy">
              <p>Privacy policy</p>
            </li>
          </ul>

          <div className={s.conectInfo}>
            <div className={s.contacts}>
              <p>CONTACTS</p>
              <a className={s.tel} href="tel:+971501871707">
                +971501871707
              </a>
            </div>
            <div className={s.socialWrapper}>
              <p>SOCIAL MEDIA</p>
              <div className={s.social}>
                <a
                  className="iconSocial"
                  href="https://www.facebook.com/Noble-Royale-Perfumes-103629824949988">
                  <BallIcon />
                </a>
                <a
                  className="iconSocial"
                  href="https://www.facebook.com/Noble-Royale-Perfumes-103629824949988">
                  <InstaIcon />
                </a>
                <a
                  className="iconSocial"
                  href="https://www.facebook.com/Noble-Royale-Perfumes-103629824949988">
                  <TwiterIcon />
                </a>
                <a
                  className="iconSocial"
                  href="https://www.facebook.com/Noble-Royale-Perfumes-103629824949988">
                  <FaceBookIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={s.subFooter}>
          <div className={s.textWrapper}>
            <p>© 2022 COPYRIGHT SOUL OF MINE</p>
            <p>Design by All-in Agency. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
