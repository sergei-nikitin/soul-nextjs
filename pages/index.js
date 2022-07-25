import React, {useState} from 'react';
import {MainLayout} from '../components/mainLayout/MainLayout';
import HomeCustomSlider from '../components/home/homeCustomSlider/HomeCustomSlider';
import About from '../components/home/about/About';
import Twirl from '../components/home/twirl/Twirl';
import Treasure from '../components/home/treasure/Treasure';
import Seduction from '../components/home/seduction/Seduction';
import Brand from '../components/home/brand/Brand';
import Ukraine from '../components/home/ukraine/Ukraine';
import {Soul} from '../components/home/soul/Soul';
import {useEffect, useRef} from "react";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicHomeCustomSlider = dynamic(() => import('../components/home/homeCustomSlider/HomeCustomSlider'), {
  suspense: true,
})
function SuspenseDynamicHomeCustomSlider() {
  return (
    <Suspense>
      <DynamicHomeCustomSlider />
    </Suspense>
  )
}
const DynamicAbout = dynamic(() => import('../components/home/about/About'), {
  suspense: true,
})
function SuspenseDynamicAbout() {
  return (
    <Suspense>
      <DynamicAbout />
    </Suspense>
  )
}
const DynamicTwirl = dynamic(() => import('../components/home/twirl/Twirl'), {
  suspense: true,
})
function SuspenseDynamicTwirl() {
  return (
    <Suspense>
      <DynamicTwirl />
    </Suspense>
  )
}
const DynamicSeduction = dynamic(() => import('../components/home/seduction/Seduction'), {
  suspense: true,
})
function SuspenseDynamicSeduction() {
  return (
    <Suspense>
      <DynamicSeduction />
    </Suspense>
  )
}
const DynamicTreasure = dynamic(() => import('../components/home/treasure/Treasure'), {
  suspense: true,
})
function SuspenseDynamicTreasure() {
  return (
    <Suspense>
      <DynamicTreasure />
    </Suspense>
  )
}
const DynamicBrand = dynamic(() => import('../components/home/brand/Brand'), {
  suspense: true,
})
function SuspenseDynamicBrand() {
  return (
    <Suspense>
      <DynamicBrand />
    </Suspense>
  )
}
const DynamicUkraine = dynamic(() => import('../components/home/ukraine/Ukraine'), {
  suspense: true,
})
function SuspenseDynamicUkraine() {
  return (
    <Suspense>
      <DynamicUkraine />
    </Suspense>
  )
}
const DynamicSoul = dynamic(() => import('../components/home/soul/Soul'), {
  suspense: true,
})
function SuspenseDynamicSoul() {
  return (
    <Suspense>
      <DynamicSoul />
    </Suspense>
  )
}

export default function Home() {
  const aboutUsRef = useRef(null);

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
      <SuspenseDynamicHomeCustomSlider aboutUsRef={aboutUsRef}/>
      <SuspenseDynamicAbout aboutUsRef={aboutUsRef}/>
      <SuspenseDynamicTwirl/>
      <SuspenseDynamicSeduction/>
      <SuspenseDynamicTreasure/>
      <SuspenseDynamicBrand/>
      <SuspenseDynamicUkraine/>
      <SuspenseDynamicSoul/>
    </MainLayout>
  );
}
