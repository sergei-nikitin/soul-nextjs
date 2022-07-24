import React, {useEffect} from 'react';
import { MainLayout } from '../components/mainLayout/MainLayout';

import { MainCartComponent } from '../components/pageCart/MainCartComponent';

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout title="Cart">
      <div className="cartWrapper">
        <MainCartComponent />
      </div>
    </MainLayout>
  );
}
