import React, {useEffect} from 'react';
import { MainLayout } from '../components/mainLayout/MainLayout';
import { CollectionCustomSlider } from '../components/pageCollection/collectionCustomSlider/CollectionCustomSlider';

export default function Collection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout title="Collection">
      <CollectionCustomSlider />
    </MainLayout>
  );
}
