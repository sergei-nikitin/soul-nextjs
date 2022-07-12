import React from 'react';
import Image from 'next/image';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';

import { clearItems } from '../../redux/slices/cartSlice';
import { CartItem } from './CartItem';
import { FormCart } from './FormCart';
import { EmptyCart } from './EmptyCart';

import close from '../../assets/images/icons/close.svg';
import s from './MainCartComponent.module.scss';

export const MainCartComponent = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);

  const onClickClear = () => {
    if (window.confirm('Are you sure you want to remove?'))
      dispatch(clearItems());
  };

  return (
    <>
      {totalPrice > 0 ? (
        <>
          <div className={s.wrapper}>
            <div className={s.upperBlock}>
              <h3 className={s.title}>CART</h3>
              <span onClick={onClickClear} className={s.clearCart}>
                <div className={s.closeIcon}>
                  <Image src={close} alt="icon" />
                </div>
              </span>
            </div>

            <div className={s.itemsWrap}>
              {items.map((item) => (
                <CartItem key={shortid.generate()} {...item} />
              ))}
            </div>

            <div className={s.info}>
              <p>TOTAL:</p>
              <p className={s.totalPrice}>$ {totalPrice}.00</p>
            </div>
          </div>
          <div className={s.actions}></div>
          <FormCart />
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
