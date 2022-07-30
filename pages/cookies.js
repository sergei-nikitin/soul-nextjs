import React, {useEffect} from 'react';
import { MainLayout } from '../components/mainLayout/MainLayout';
import CookiesComponent from "../components/cookies/CookiesInfoComponent";

export default function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout title="Cookies">
      <CookiesComponent />
    </MainLayout>
  );
}
