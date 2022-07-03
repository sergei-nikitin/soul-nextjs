import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { SliderCollection } from '../components/pageCollection/SliderCollection';

export default function Collection() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout title="Collection">
      <SliderCollection />
    </MainLayout>
  );
}
