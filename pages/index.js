import React from 'react';
import {MainLayout} from '../components/MainLayout';
import HomeCustomSlider from '../components/home/homeCustomSlider/HomeCustomSlider';
import About from '../components/home/about/About';
import Twirl from '../components/home/twirl/Twirl';
import Treasure from '../components/home/treasure/Treasure';
import Seduction from '../components/home/seduction/Seduction';
import Brand from '../components/home/brand/Brand';
import Ukraine from '../components/home/ukraine/Ukraine';
import {Soul} from '../components/home/soul/Soul';
import {useEffect} from "react";
import {loadState} from "../helpers/localStorage";
import {useDispatch, useSelector} from "react-redux";
import {setItems, setTotalPrice} from "../redux/slices/cartSlice";


export default function Home() {
  // console.log('asdddddddddddddddddddddddddddddddddddddddd')
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  console.log('items ----------', items)
  useEffect(() => {
    const persistedState = loadState();
    if (persistedState) {
      dispatch(setItems(persistedState.cart.items))
      dispatch(setTotalPrice(persistedState.cart.totalPrice))
      console.log('persistedState-----------------------', persistedState)
    }
  }, [])
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <HomeCustomSlider/>
      <About/>
      <Twirl/>
      <Seduction/>
      <Treasure/>
      <Brand/>
      <Ukraine/>
      <Soul/>
    </MainLayout>
  );
}
