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

export default function Home() {

  useEffect(() => {
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
