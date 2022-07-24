import Head from 'next/head';
import Header from '../header/Header';
import MobHeader from '../headerMob/MobHeader';
import Footer from '../footer/Footer';
import s from './MainLayout.module.scss';
import redVideo from "../../assets/0001-1620.mp4";

export function MainLayout({ children, title = 'Soul Of Mine' }) {

  return (
    <div  className={s.appWrapper}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <MobHeader />

      <main>{children}</main>
      <Footer />
      <video
        className={s.fixedBackgroundVideo}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        src={redVideo}
      />
    </div>
  );
}
