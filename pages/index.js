import React, {Suspense} from 'react';
import {MainLayout} from '../components/mainLayout/MainLayout';
import dynamic from "next/dynamic";

const HomeCustomSlider = dynamic(() => import('../components/home/homeCustomSlider/HomeCustomSlider'))
const About = dynamic(() => import('../components/home/about/About'))
const Twirl = dynamic(() => import('../components/home/twirl/Twirl'))
const Treasure = dynamic(() => import('../components/home/treasure/Treasure'))
const Seduction = dynamic(() => import('../components/home/seduction/Seduction'))
const Brand = dynamic(() => import('../components/home/brand/Brand'))
const Ukraine = dynamic(() => import('../components/home/ukraine/Ukraine'))
const Soul = dynamic(() => import('../components/home/soul/Soul'))
import {useEffect} from "react";


export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const num = [1, 2, 3, 4, 5];
  // const fn = (array, i) => {
  //   array.reduce((acc, current) => {
  //     if (current !== i) {
  //       acc += current;
  //       console.log(array);
  //     }
  //   });
  // };

  // fn(num, 2);

  return (
      <MainLayout>
        <Suspense>
          <HomeCustomSlider/>
          <About/>
          <Twirl/>
          <Seduction/>
          <Treasure/>
          <Brand/>
          <Ukraine/>
          <Soul/>
        </Suspense>
      </MainLayout>
  );
}
