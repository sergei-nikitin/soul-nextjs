import React, {useEffect} from 'react';
import { MainLayout } from '../components/mainLayout/MainLayout';

import { Main } from '../components/pageAboutUs/main/Main';
import { Slider } from '../components/pageAboutUs/slider/Slider';
import { History } from '../components/pageAboutUs/history/History';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout title={'About Us'}>
      <Main />
      <Slider />
      <History />
    </MainLayout>
  );
}
