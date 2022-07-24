import React from 'react';
import Image from 'next/image';
import shortid from 'shortid';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import arrow from '../../assets/images/icons/grayArrow.svg';
import s from './FormCart.module.scss';

export const FormCart = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);
  return (
    <>
      <form className={s.cartForm}>
        <div className={s.formField}>
          <input
            className={s.input}
            name="name"
            id="name"
            type="text"
            placeholder=" "
          />
          <label htmlFor="name" className={s.label}>
            FIRST NAME
          </label>
        </div>

        <div className={s.formField}>
          <input
            className={s.input}
            required
            name="phone"
            id="phone"
            type="tel"
            placeholder=" "
          />
          <label htmlFor="phone" className={s.label}>
            PHONE
          </label>
        </div>
        {/* <div className={s.checkBoxWrapper}> */}
        <label className={s.checkboxLabel}>
          <input
            required
            className={s.checkInput}
            type="checkbox"
            name="Privacy Policy"
          />
          <span className={s.checkBox}></span>I agree to the Privacy Policy and
          Terms and Conditions.
        </label>
        {/* </div> */}

        {/* items */}
        {items.lenght > 0 &&
          items.map(({ name, count, price }) => (
            <textarea
              id="textarea"
              className="visuallyHidden"
              key={shortid.generate()}
              defaulvalue={[
                'name: ',
                name,
                ' ',
                'count: ',
                count,
                ' ',
                'price: ',
                `${price * count}`,
              ].join(' ')}
            />
          ))}
        <div className={s.actions}>
          <Link href="/">
            <a className={s.link}>
              <Image src={arrow} alt="icon" />
              Back
            </a>
          </Link>
          <button className={s.submit} type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};
{
}
