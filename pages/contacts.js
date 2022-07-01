import React from 'react';

import { MainLayout } from '../components/MainLayout';
import Main from '../components/pageContacts/main/Main';
import FormSection from '../components/pageContacts/form/FormSection';
import { Soul } from '../components/home/soul/Soul';

export default function Contacts() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <Main />
      <FormSection />
      <Soul />
    </MainLayout>
  );
}
