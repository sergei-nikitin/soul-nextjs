import React from 'react';
import s from './CookiesModal.module.scss';
import LinkTo from "../link/LinkTo";
import close from '../../assets/images/icons/close.svg';
import Image from "next/image";

export default function CookiesModal() {
  const closeClickHandler = () => {
    alert('Я сказал - прими куки сначала')
  }
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.closeIcon} onClick={closeClickHandler}>
          <Image src={close} alt="closeIcon" />
        </div>
        <h3>cookies!</h3>
        <p>This website uses cookies in order to offer you the most relevant information. Please accept cookies for optimal perfomance.</p>
        <LinkTo path={'/'} name='yes, I accept cookies' className={s.button}/>
      </div>
    </div>
  );
}
