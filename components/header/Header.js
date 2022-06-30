import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Link,hrefink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addHeaderHeight } from '../../redux/slices/heightSlice';

// import CartPage from '../cart';
// import letter from '../../assets/images/Vector-1.png';
import contur from '../../assets/images/Vector.png';
import cartImage from '../../assets/images/icons/cart.svg';
import arrov from '../../assets/images/icons/navArrov.svg';
import s from './Header.module.scss';

export default function Header() {
  const header = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const headerHeight = header.current.clientHeight;
    dispatch(addHeaderHeight(headerHeight));
  }, []);

  const { items, totalPrice } = useSelector((state) => state.cart);
  const [cart, setCart] = React.useState(false);

  const setActive = ({ isActive }) =>
    isActive ? [s.navLink, s.activeLink].join(' ') : s.navLink;
  const [show, setShow] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
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
              {/* <Link href={'/'} className={setActive}> */}
              <a className={s.navLink}>home</a>
            </Link>
            <Link href={'/aboutUs'}>
              <a className={s.navLink}>about us</a>
            </Link>
            <div className={s.select}>
              <div className={s.span}></div>
              <Link href={'/collection'}>
                <a className={s.navLink}>
                  collection
                  <Image className={s.navArrov} src={arrov} alt="hover" />
                </a>
              </Link>
              <Link href={'/treasure'}>
                <a className={s.navLink}>treasure</a>
              </Link>
              <Link href={'/seduction'}>
                <a className={s.navLink}>seduction</a>
              </Link>
              <Link href={'/twirl'}>
                <a className={s.navLink}>twirl</a>
              </Link>
            </div>
            <Link href={'/contacts'}>
              <a className={s.navLink}> contacts</a>
            </Link>
          </nav>
          <Link href={'/cart'}>
            {totalPrice ? (
              <div onClick={() => setCart(!cart)} className={s.cartLink}>
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
