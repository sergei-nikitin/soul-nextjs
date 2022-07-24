import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../components/mainLayout/MainLayout';

import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

import { SeductionMain } from '../components/pageProduct/main/SeductionMain';
import { SeductionDescr } from '../components/pageProduct/descr/SeductionDescr';
import { SeductionNotes } from '../components/pageProduct/notes/SeductionNotes';
import { SeductionAddCart } from '../components/pageProduct/addCart/SeductionAddCart';
import { Soul } from '../components/home/soul/Soul';

import flak from '../assets/images/butles/red.png';

export default function Seduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  let countItem = 0;
  items.forEach((i) => {
    if (i.id === 2) return (countItem += i.count);
  });

  const onClickAdd = () => {
    const item = {
      id: 2,
      name: 'seduction',
      price: 132,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };
  const onClickPlus = () => {
    const item = {
      id: 2,
      name: 'seduction',
      price: 132,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };

  const onClickMinus = () => {
    const item = {
      id: 2,
      name: 'seduction',
      price: 132,
      imageUrl: flak,
    };
    dispatch(minusItem(item.id));
  };
  return (
    <MainLayout title="Seduction">
      <SeductionMain />
      <SeductionDescr />
      <SeductionNotes />
      <SeductionAddCart
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
