import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import contur from '../../assets/images/Vector.png';
import s from '../../assets/images/logo-letters/s.svg';
import o from '../../assets/images/logo-letters/o.svg';
import u from '../../assets/images/logo-letters/u.svg';
import l from '../../assets/images/logo-letters/l.svg';
import f from '../../assets/images/logo-letters/f.svg';
import m from '../../assets/images/logo-letters/m.svg';
import i from '../../assets/images/logo-letters/i.svg';
import n from '../../assets/images/logo-letters/n.svg';
import e from '../../assets/images/logo-letters/e.svg';

import st from './LogoFooter.module.scss';

export default function LogoFooter() {
  return (
    <>
      <Link className={st.logoWrapper} href="/">
        <a>
          <div className={st.logo}>
            <Image className={st.contur} src={contur} alt="logo" />
            <Image className={st.letter} src={s} alt="logo" />
          </div>
          <div className={st.textWrapper}>
            <Image className={st.letterSVG} src={s} alt="l" />
            <Image className={st.letterSVG} src={o} alt="l" />
            <Image className={st.letterSVG} src={u} alt="l" />
            <Image className={st.letterSVG} src={l} alt="l" />
            <span></span>
            <Image className={st.letterSVG} src={o} alt="l" />
            <Image className={st.letterSVG} src={f} alt="l" />
            <span></span>
            <Image className={st.letterSVG} src={m} alt="l" />
            <Image className={st.letterSVG} src={i} alt="l" />
            <Image className={st.letterSVG} src={n} alt="l" />
            <Image className={st.letterSVG} src={e} alt="l" />
          </div>
        </a>
      </Link>
    </>
  );
}
