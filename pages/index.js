import React from 'react';
import { MainLayout } from '../components/MainLayout';
import HomeCustomSlider from '../components/home/homeCustomSlider/HomeCustomSlider';
import About from '../components/home/about/About';
import Twirl from '../components/home/twirl/Twirl';
import Treasure from '../components/home/treasure/Treasure';
import Seduction from '../components/home/seduction/Seduction';
import Brand from '../components/home/brand/Brand';
import Ukraine from '../components/home/ukraine/Ukraine';
import { Soul } from '../components/home/soul/Soul';

export default function Home() {
  React.useEffect(() => {
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
      <HomeCustomSlider />
      <About />
      <Twirl />
      <Seduction />
      <Treasure />
      <Brand />
      <Ukraine />
      <Soul />
    </MainLayout>
  );
}
