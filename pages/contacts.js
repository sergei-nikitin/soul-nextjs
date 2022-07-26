import React, {useEffect} from 'react';

import { MainLayout } from '../components/mainLayout/MainLayout';
import Main from '../components/pageContacts/main/Main';
import FormSection from '../components/pageContacts/form/FormSection';
import Soul from '../components/home/soul/Soul';

export default function Contacts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout title="Contacts">
      <Main />
      <FormSection />
      <Soul />
    </MainLayout>
  );
}
