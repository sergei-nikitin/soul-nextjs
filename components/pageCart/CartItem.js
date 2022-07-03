import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

// import red from '../../assets/images/butles/red.png';
import s from './CartItem.module.scss';

export const CartItem = ({ id, price, count, imageUrl, name, size }) => {
  const ref = React.useRef();
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove?'))
      dispatch(removeItem(id));
  };
  return (
    <div className={s.wrapper}>
      <div className={s.block1}>
        <div className={s.foto}>
          <Image src={imageUrl} alt="foto" />
        </div>

        <h3 className={s.name}>{name}</h3>
      </div>

      <div className={s.block2}>
        <div className={s.count}>
          {count === 1 ? (
            <button
              onClick={onClickRemove}
              className={s.btnCount}
              type="button">
              -
            </button>
          ) : (
            <button onClick={onClickMinus} className={s.btnCount} type="button">
              -
            </button>
          )}

          <span ref={ref} className={s.number}>
            {count}
          </span>
          <button onClick={onClickPlus} className={s.btnCount} type="button">
            +
          </button>
        </div>

        <span className={s.price}>$ {price * count}.00</span>
      </div>

      {/* <div className={s.closeAndPrice}>
        <button onClick={onClickRemove} className={s.btnClose} type="button">
          +
        </button>
        <span className={s.price}>$ {price * count}.00</span>
      </div> */}
    </div>
  );
};
