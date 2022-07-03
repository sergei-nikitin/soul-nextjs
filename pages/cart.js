import React from 'react';
import { MainLayout } from '../components/MainLayout';

import { MainCartComponent } from '../components/pageCart/MainCartComponent';

export default function Cart() {
  React.useEffect(() => {
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
