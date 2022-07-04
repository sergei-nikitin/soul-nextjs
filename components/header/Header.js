import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
// import { Link,hrefink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addHeaderHeight } from '../../redux/slices/heightSlice';

import contur from '../../assets/images/Vector.png';
import cartImage from '../../assets/images/icons/cart.svg';
import arrov from '../../assets/images/icons/navArrov.svg';
import s from './Header.module.scss';

export default function Header() {
  const router = useRouter();
  const header = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const headerHeight = header.current.clientHeight;
    dispatch(addHeaderHeight(headerHeight));
  }, []);

  const { items, totalPrice } = useSelector((state) => state.cart);
  const [cart, setCart] = React.useState(false);

  const [show, setShow] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
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
    // <header className={[s.header, s.conatainer].join(' ')}>
    <>
      <header ref={header} className={show ? 'header' : 'headerHidden'}>
        {/* {cart && <Cart closeCart={closeCart} />} */}

        <div className={s.wrapper}>
          <Link href={'/'}>
            <a className={s.logoWrapper}>
              <Image className={s.contur} src={contur} alt="logo" />
              {/* <Image className={s.letter} src={letter} alt="logo" /> */}
            </a>
          </Link>

          <nav className={s.navBlock}>
            <Link href={'/'}>
              <a
                className={
                  router.pathname == '/'
                    ? [s.navLink, s.activeLink].join(' ')
                    : s.navLink
                }>
                home
              </a>
            </Link>
            <Link href={'/aboutUs'}>
              <a
                className={
                  router.pathname == '/aboutUs'
                    ? [s.navLink, s.activeLink].join(' ')
                    : s.navLink
                }>
                about us
              </a>
            </Link>
            <div className={s.select}>
              <div className={s.span}></div>
              <Link href={'/collection'}>
                <a
                  className={
                    router.pathname == '/collection'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }>
                  collection
                  <Image className={s.navArrov} src={arrov} alt="hover" />
                </a>
              </Link>
              <Link href={'/treasure'}>
                <a
                  className={
                    router.pathname == '/treasure'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }>
                  treasure
                </a>
              </Link>
              <Link href={'/seduction'}>
                <a
                  className={
                    router.pathname == '/seduction'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }>
                  seduction
                </a>
              </Link>
              <Link href={'/twirl'}>
                <a
                  className={
                    router.pathname == '/twirl'
                      ? [s.navLink, s.activeLink].join(' ')
                      : s.navLink
                  }>
                  twirl
                </a>
              </Link>
            </div>
            <Link href={'/contacts'}>
              <a
                className={
                  router.pathname == '/contacts'
                    ? [s.navLink, s.activeLink].join(' ')
                    : s.navLink
                }>
                contacts
              </a>
            </Link>
          </nav>
          <Link href={'/cart'}>
            {totalPrice ? (
              <div className={s.cartLink}>
                <Image src={cartImage} alt="cart" />
                {items && <span>( {items.length} )</span>}
              </div>
            ) : (
              <div className={s.cartLinkEmpty}>
                <Image src={cartImage} alt="cart" />
              </div>
            )}
          </Link>
        </div>
      </header>
    </>
  );
}
