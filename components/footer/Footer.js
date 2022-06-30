import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addFooterHeight } from '../../redux/slices/heightSlice';

// import { LogoFooter } from './LogoFooter';
import instagramIcon from '../../assets/images/icons/Instagram.svg';
import twitterIcon from '../../assets/images/icons/twiter.svg';
import facebookIcon from '../../assets/images/icons/Facebook.svg';
// import Ball from '../../assets/images/icons/ball.svg';
import ball from '../../assets/images/icons/ball.svg';

import s from './Footer.module.scss';

export default function Footer() {
  const footer = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const footerHeight = footer.current.clientHeight;
    dispatch(addFooterHeight(footerHeight));
  }, []);

  const setActive = ({ isActive }) =>
    isActive ? [s.navLink, s.activeLink].join(' ') : s.navLink;
  return (
    <>
      <footer ref={footer} className={s.footer}>
        <div className={s.main}>
          <div className={s.logoWrapper}>{/* <LogoFooter /> */}</div>

          <ul className={s.nav}>
            <li key="menu">MENU</li>

            <li key="home">
              <Link className={setActive} href={'/'}>
                <a>Home</a>
              </Link>
            </li>
            <li key="about-us">
              <Link className={setActive} href={'/aboutUs'}>
                <a>About Us</a>
              </Link>
            </li>
            <li key="collection">
              <Link className={setActive} href={'/collection'}>
                <a> Collection</a>
              </Link>
            </li>
            <li key="contacts">
              <Link className={setActive} href={'/contacts'}>
                <a>Contacts</a>
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
                  className={s.ball}
                  href="https://www.facebook.com/Noble-Royale-Perfumes-103629824949988">
                  {/* <Ball /> */}
                  <Image src={ball} alt="icon" className={s.icons} />
                </a>
                <a href="https://www.facebook.com/Noble-Royale-Perfumes-103629824949988">
                  <Image src={instagramIcon} alt="icon" className={s.icons} />
                </a>
                <a href="https://www.facebook.com/Noble-Royale-Perfumes-103629824949988">
                  <Image src={twitterIcon} alt="icon" className={s.icons} />
                </a>
                <a href="https://www.facebook.com/Noble-Royale-Perfumes-103629824949988">
                  <Image src={facebookIcon} alt="icon" className={s.icons} />
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
