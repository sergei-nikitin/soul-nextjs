import React, { useEffect } from 'react';
import { MainLayout } from '../components/mainLayout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem } from '../redux/slices/cartSlice';

import { TwirlMain } from '../components/pageProduct/main/TwirlMain';
import { TwirlDescr } from '../components/pageProduct/descr/TwirlDescr';
import { TwirlNotes } from '../components/pageProduct/notes/TwirlNotes';
import { TwirlAddCart } from '../components/pageProduct/addCart/TwirlAddCart';
import Soul from '../components/home/soul/Soul';
import flak from '../assets/images/butles/white.png';

export default function Twirl() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  let countItem = 0;
  items.forEach((i) => {
    if (i.id === 3) return (countItem += i.count);
  });

  const onClickAdd = () => {
    const item = {
      id: 3,
      name: 'seduction',
      price: 132,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };
  const onClickPlus = () => {
    const item = {
      id: 3,
      name: 'twirl',
      price: 132,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };

  const onClickMinus = () => {
    const item = {
      id: 3,
      name: 'twirl',
      price: 132,
      imageUrl: flak,
    };
    dispatch(minusItem(item.id));
  };
  return (
    <MainLayout title="Twirl">
      <TwirlMain />
      <TwirlDescr />
      <TwirlNotes />
      <TwirlAddCart
        count={countItem}
        onClickAdd={onClickAdd}
        onClickPlus={onClickPlus}
        onClickMinus={onClickMinus}
      />
      <Soul />
    </MainLayout>
  );
}
