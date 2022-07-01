// import '../styles/styles.scss';
import Link from 'next/link';
import Head from 'next/head';
import Header from './header/Header';
import MobHeader from './headerMob/MobHeader';
import Footer from './footer/Footer';

export function MainLayout({ children, title = 'Soul Of Mine' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <MobHeader />

      <main>{children}</main>
      <Footer />
    </>
  );
}
