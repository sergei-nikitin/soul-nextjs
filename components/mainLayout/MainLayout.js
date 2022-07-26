import Head from 'next/head';
import Header from '../header/Header';
import MobHeader from '../headerMob/MobHeader';
import Footer from '../footer/Footer';
import s from './MainLayout.module.scss';
import redVideo from "../../assets/0001-1620.mp4";
import {useEffect, useState} from "react";
import brushCompressed from "../../assets/videos/brush compress2.mp4";

export function MainLayout({ children, title = 'Soul Of Mine' }) {

  const [showVideo, setShowVideo] = useState(true)
  const [startVideoOpacityZero, setStartVideoOpacityZero] = useState(false)
  useEffect(() => {
    setShowVideo(true);
    setTimeout(() => {
      setStartVideoOpacityZero(true)
    }, 2650)
    setTimeout(() => {
      setShowVideo(false)
    }, 3000)
  }, [])

  return (
    <div  className={s.appWrapper}>
      <div className={`${s.mainContent} ${startVideoOpacityZero ? s.visible : s.invisible}`}>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <MobHeader />

        <main>{children}</main>
        <Footer />
      </div>
      <video
        className={`${s.mainVideos} ${s.fixedBackgroundVideo}`}
        autoPlay
        preload="auto"
        // loop
        muted
        playsInline
        src={redVideo}
      />
      <video
        className={`${s.mainVideos} ${s.startVideo} ${showVideo ? '' : s.invisible} ${startVideoOpacityZero ? s.disappeared : ''}`}
        //
        preload="auto"
        autoPlay
        muted
        playsInline
        src={brushCompressed}
      />
    </div>
  );
}
