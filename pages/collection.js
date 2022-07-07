import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { CollectionCustomSlider } from '../components/pageCollection/collectionCustomSlider/CollectionCustomSlider';

export default function Collection() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout title="Collection">
      <CollectionCustomSlider />
    </MainLayout>
  );
}
