import React from 'react';
import {MainLayout} from '../components/mainLayout/MainLayout';
import PageNotFound from "../components/404/PageNotFound";

const Page404 = () => {
  return (
    <MainLayout title="404 Page not found">
        <PageNotFound/>
    </MainLayout>
  );
};

export default Page404;
