import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import BurgerIcon from '../icons/BurgerIcon';
import CloseIcon from '../icons/CloseIcon';
import BallIcon from '../icons/BallIcon';
import TwiterIcon from '../icons/TwiterIcon';
import InstaIcon from '../icons/InstaIcon';
import FaceBookIcon from '../icons/FaceBookIcon';

import contur from '../../assets/images/Vector.png';
import cart from '../../assets/images/icons/cart.svg';
import arrov from '../../assets/images/icons/collection-arrov.svg';
import s from './MobHeader.module.scss';

export default function MobHeader() {
  const router = useRouter();
  const mobHeader = React.useRef();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const [selectItems, setSelectItems] = React.useState(false);

  const closeMenu = () => {
    setMenu(!menu);
    setSelectItems(false);
  };

  const select = () => {
    setRotate(!rotate);
    setSelectItems(!selectItems);
  };

  const [show, setShow] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header ref={mobHeader} className={show ? 'mobHeader' : 'mobHeaderHidden'}>
      {menu ? (
        <CloseIcon onClick={closeMenu} />
      ) : (
        <BurgerIcon onClick={closeMenu} />
      )}

      <Link href={'/'}>
        <a className={s.logoWrapper}>
          <Image className={s.contur} src={contur} alt="logo" />
        </a>
      </Link>

      <Link href={'/cart'}>
        <a className={s.cart}>
          <Image className={s.cart} src={cart} alt="cart" />
          {items > '0' && <span>( {items.length} )</span>}
        </a>
      </Link>

      {/* menu */}

      <div
        className={
          menu ? [s.menuWrapper, s.menuWrapperActive].join(' ') : s.menuWrapper
        }>
        <div className={s.linksWrapper}>
          <Link href={'/'}>
            <a
              className={
                router.pathname == '/'
                  ? [s.navLink, s.activeLink].join(' ')
                  : s.navLink
              }
              onClick={closeMenu}>
              home
            </a>
          </Link>
          <Link href={'/aboutUs'}>
            <a
              className={
                router.pathname == '/aboutUs'
                  ? [s.navLink, s.activeLink].join(' ')
                  : s.navLink
              }
              onClick={closeMenu}>
              about us
            </a>
          </Link>
          <div className={s.collectionWrapper}>
            <Link href={'/collection'}>
              <a
                className={
                  router.pathname == '/collection'
                    ? [s.navLink, s.activeLink].join(' ')
                    : s.navLink
                }
                onClick={closeMenu}>
                collection
              </a>
            </Link>
            <span
              onClick={select}
              className={
                router.pathname == '/collection'
                  ? [s.navLink, s.activeLink].join(' ')
                  : s.navLink
              }>
              <button className={s.arrowBtn}>
                <Image
                  className={rotate ? [s.arrov, s.rotate].join(' ') : s.arrov}
                  src={arrov}
                  alt="icon"
                />
              </button>
            </span>
          </div>

          {selectItems && (
            <div className={s.list}>
              <Link href={'/twirl'}>
                <a
                  className={
                    router.pathname == '/twirl'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }
                  onClick={closeMenu}>
                  twirl
                </a>
              </Link>
              <Link href={'/treasure'}>
                <a
                  className={
                    router.pathname == '/treasure'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }
                  onClick={closeMenu}>
                  treasure
                </a>
              </Link>
              <Link href={'/seduction'}>
                <a
                  className={
                    router.pathname == '/seduction'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }
                  onClick={closeMenu}>
                  seduction
                </a>
              </Link>
            </div>
          )}
          <Link href={'/contacts'}>
            <a
              className={
                router.pathname == '/contacts'
                  ? [s.navLink, s.activeLink].join(' ')
                  : s.navLink
              }
              onClick={closeMenu}>
              contacts
            </a>
          </Link>
        </div>
        <div className={s.info}>
          <a className={s.tel} href="tel:+971501871707">
            +971501871707
          </a>
          <div className={s.socLinks}>
            <a className={s.socialIcon} href="#">
              <BallIcon />
            </a>
            <a className={s.socialIcon} href="#">
              <InstaIcon />
            </a>
            <a className={s.socialIcon} href="#">
              <TwiterIcon />
            </a>
            <a className={s.socialIcon} href="#">
              <FaceBookIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
