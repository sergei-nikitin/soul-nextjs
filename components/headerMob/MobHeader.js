import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { ReactComponent as Burger } from '../../assets/images/icons/burger-btn.svg';
import burger from '../../assets/images/icons/burger-btn.svg';
import close from '../../assets/images/icons/close.svg';
import { ReactComponent as Close } from '../../assets/images/icons/close.svg';
import { ReactComponent as Ball } from '../../assets/images/icons/ball.svg';
import { ReactComponent as Insta } from '../../assets/images/icons/insta.svg';
import { ReactComponent as Twiter } from '../../assets/images/icons/twiter.svg';
import { ReactComponent as FaceBook } from '../../assets/images/icons/fb.svg';
import letter from '../../assets/images/Vector-1.png';
import contur from '../../assets/images/Vector.png';
import cart from '../../assets/images/icons/cart.svg';
import arrov from '../../assets/images/icons/collection-arrov.svg';
import s from './MobHeader.module.scss';

export default function MobHeader() {
  const mobHeader = React.useRef();
  const { items } = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const [selectItems, setSelectItems] = React.useState(false);

  const closeMenu = () => {
    setMenu(!menu);
    setSelectItems(false);
  };
  const setActive = ({ isActive }) =>
    isActive ? [s.navLink, s.activeLink].join(' ') : s.Link;

  // const setActiveItem = ({ isActive }) =>
  //   isActive ? [s.item, s.activeItem].join(' ') : s.item;

  const select = () => {
    setRotate(!rotate);
    setSelectItems(!selectItems);
  };

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
  // className={show ? 'mobHeader' : 'mobHeaderHidden'}
  return (
    <header ref={mobHeader} className={show ? 'mobHeader' : 'mobHeaderHidden'}>
      {menu ? (
        <Image
          src={close}
          alt="icon"
          onClick={closeMenu}
          className={s.burger}
        />
      ) : (
        <Image
          src={burger}
          alt="icon"
          onClick={closeMenu}
          className={s.burger}
        />
      )}
      {/* {menu ? (
        <Close onClick={closeMenu} className={s.burger} />
      ) : (
        <Burger onClick={closeMenu} className={s.burger} />
      )} */}

      <Link href={'/'}>
        <a className={s.logoWrapper}>
          <Image className={s.contur} src={contur} alt="logo" />
          {/* <Image className={s.letter} src={letter} alt="logo" /> */}
        </a>
      </Link>

      <Link className={s.cart} href={'/cart'}>
        <a>
          <Image className={s.cart} src={cart} alt="logo" />
          {items.leght > 0 && <span>( {items.length} )</span>}
        </a>
      </Link>

      {/* menu */}

      <div
        className={
          menu ? [s.menuWrapper, s.menuWrapperActive].join(' ') : s.menuWrapper
        }>
        <div className={s.linksWrapper}>
          <Link href={'/'}>
            <a className={s.navLink} onClick={closeMenu}>
              home
            </a>
          </Link>
          <Link href={'/aboutUs'}>
            <a className={s.navLink} onClick={closeMenu}>
              about us
            </a>
          </Link>
          <span onClick={select} className={s.navLink}>
            collection
            <Image
              className={rotate ? [s.arrov, s.rotate].join(' ') : s.arrov}
              src={arrov}
              alt="icon"
            />
          </span>

          {selectItems && (
            <div className={s.list}>
              <Link href={'/twirl'}>
                <a className={s.navLink} onClick={closeMenu}>
                  twirl
                </a>
              </Link>
              <Link href={'/treasure'}>
                <a className={s.navLink} onClick={closeMenu}>
                  treasure
                </a>
              </Link>
              <Link href={'/seduction'}>
                <a className={s.navLink} onClick={closeMenu}>
                  seduction
                </a>
              </Link>
            </div>
          )}

          <Link href={'/contacts'}>
            <a className={s.navLink} onClick={closeMenu}>
              contacts
            </a>
          </Link>
        </div>
        <div className={s.info}>
          <a className={s.tel} href="tel:+971501871707">
            +971501871707
          </a>
          <div className={s.socLinks}>
            {/* <a href="#">
              <Ball />
            </a>
            <a href="#">
              <Insta />
            </a>
            <a href="#">
              <Twiter />
            </a>
            <a href="#">
              <FaceBook />
            </a> */}
          </div>
        </div>
      </div>

      {/* <div
        className={
          menu ? [s.menuWrapper, s.menuWrapperActive].join(' ') : s.menuWrapper
        }>
        <button onClick={closeMenu} className={s.close} type="button">
          <Image src={close} alt="close" />
        </button>
        <Link onClick={closeMenu} href="/" className={setActive}>
          <span>01</span>
          home
        </Link>
        <Link onClick={closeMenu} href="/about-us" className={setActive}>
          <span>02</span>
          about us
        </Link>
        <div className={s.scollectionWrapper}>
          <Link
            onClick={closeMenu}
            href="/collection"
            className={s.collectionsLink}>
            <span>03</span>
            collections
          </Link>
          <Image onClick={() => setItems(!items)} src={arrov} alt="Image" />
        </div>
        {items && (
          <div className={s.items}>
            <Link onClick={closeMenu} className={setActiveItem} href="/twirl">
              twirl
            </Link>
            <Link
              onClick={closeMenu}
              className={setActiveItem}
              href="/treasure">
              treasure
            </Link>
            <Link
              onClick={closeMenu}
              className={setActiveItem}
              href="/seduction">
              seduction
            </Link>
          </div>
        )}
        <Link onClick={closeMenu} href="/contacts" className={setActive}>
          <span>04</span>
          contacts
        </Link>
      </div> */}
    </header>
  );
}
