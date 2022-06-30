import React from 'react';
import { MainLayout } from '../components/MainLayout';
// import Main from '../components/home/main';
// import About from '../components/home/about';
// import Twirl from '../components/home/twirl';
// import Treasure from '../components/home/treasure/Treasure';
// import Seduction from '../components/home/seduction/Seduction';
// import Brand from '../components/home/brand/Brand';
// import Ukraine from '../components/home/ukraine';
// import { Soul } from '../components/home/soul';

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <h1>Home</h1>
      {/* <Main />
      <About />
      <Twirl />
      <Seduction />
      <Treasure />
      <Brand />
      <Ukraine />
      <Soul /> */}
    </MainLayout>
  );
}
