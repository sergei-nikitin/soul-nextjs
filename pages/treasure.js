import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../components/mainLayout/MainLayout';

import { addItem, minusItem } from '../redux/slices/cartSlice';

import { TreasureMain } from '../components/pageProduct/main/TreasureMain';
import { TreasureDescr } from '../components/pageProduct/descr/TreasureDescr';
import { TreasureNotes } from '../components/pageProduct/notes/TreasureNotes';
import { TreasureAddCart } from '../components/pageProduct/addCart/TreasureAddCart';
import Soul from '../components/home/soul/Soul';

import flak from '../assets/images/butles/blue.png';

export default function Treasure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  let countItem = 0;
  items.forEach((i) => {
    if (i.id === 1) return (countItem += i.count);
  });

  const onClickAdd = () => {
    const item = {
      id: 1,
      name: 'treasure',
      price: 132,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };
  const onClickPlus = () => {
    const item = {
      id: 1,
      name: 'treasure',
      price: 132,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };

  const onClickMinus = () => {
    const item = {
      id: 1,
      name: 'treasure',
      price: 132,
      imageUrl: flak,
    };
    dispatch(minusItem(item.id));
  };

  return (
    <MainLayout title="Treasure">
      <TreasureMain />
      <TreasureDescr />
      <TreasureNotes />
      <TreasureAddCart
        count={countItem}
        onClickAdd={onClickAdd}
        onClickPlus={onClickPlus}
        onClickMinus={onClickMinus}
      />
      <Soul />
    </MainLayout>
  );
}

// import { addItem } from '../redux/slices/cartSlice';
