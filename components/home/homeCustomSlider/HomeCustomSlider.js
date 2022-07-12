import React, {useEffect} from 'react';
import Image from 'next/image';

import {nameSwitch} from '../../../assets/functions/nameSwitch';
import LinkTo from '../../link/LinkTo';
import red from '../../../assets/images/butles/red.png';
import blue from '../../../assets/images/butles/blue.png';
import gold from '../../../assets/images/butles/white.png';
import icon from '../../../assets/images/icons/sliderArrow.svg';
import s from './HomeCustomSlider.module.scss';
import redVideo from '../../../assets/red.mp4';
import goldVideo from '../../../assets/gold.mp4';
import blueVideo from '../../../assets/blue.mp4';

const HomeCustomSlider = () => {
  const [activeNum, setActiveNum] = React.useState(0);
  const [videoContainerHeight, setVideoContainerHeight] = React.useState(0);
  const sliderRef = React.useRef();
  const vidContainerRef = React.useRef();
  useEffect(() => {
    setVideoContainerHeight(vidContainerRef.current.clientHeight)
  })

  const onClickNext = () => {
    if (activeNum === 2) return;
    setActiveNum(activeNum + 1);
  };
  const onClickPrev = () => {
    if (activeNum === 0) return;
    setActiveNum(activeNum - 1);
  };
  const onSwipeLeft = () => {
    if (direction === 'left' && activeNum !== 0) {
      setActiveNum(activeNum - 1);
    }
  };
  const onSwipeRight = () => {
    if (direction === 'right' && activeNum !== 2) {
      setActiveNum(activeNum + 1);
    }
  };
  const NextBtn = () => {
    return (
      <button onClick={onClickNext} className={s.nextBtn}>
        <div className={s.iconWrapper}>
          <Image src={icon} alt="icon"/>
        </div>
      </button>
    );
  };
  const PrevBtn = () => {
    return (
      <button onClick={onClickPrev} className={s.prevBtn}>
        <div className={s.iconWrapper}>
          <Image src={icon} alt="icon"/>
        </div>
      </button>
    );
  };

  let direction = '';
  let x1 = null;
  let y1 = null;

  const sliderTouchStart = (event) => {
    x1 = event.touches[0].clientX;
    y1 = event.touches[0].clientY;
  };
  const sliderTuchMove = (event) => {
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

    if (!x1 || !y1) return false;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        direction = 'left';
        onSwipeLeft();
      } else {
        direction = 'right';
        onSwipeRight();
      }
    }
    x1 = null;
    y1 = null;
  };

  return (
    <section className={s.section}>
      <div
        ref={sliderRef}
        className={s.container}
        onTouchStart={sliderTouchStart}
        onTouchMove={sliderTuchMove}>
        <p className={s.brandName}>
          soul
          <br/> of mine
        </p>
        <div className={s.videoContainer} ref={vidContainerRef}>
          <video
            className={activeNum === 0 ? s.videoVisible : s.videoHidden}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            src={redVideo}
          />
          <video
            className={activeNum === 1 ? s.videoVisible : s.videoHidden}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            src={goldVideo}
          />
          <video
            className={activeNum === 2 ? s.videoVisible : s.videoHidden}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            src={blueVideo}
          />
        </div>
        <div className={s.imgContainer}>
          <div className={s.imagesContainer}>
            <div id={s.img} className={activeNum === 0 ? s.active : s.hidden}>
              <Image src={red} alt="foto"/>
            </div>

            <div id={s.img} className={activeNum === 1 ? s.active : s.hidden}>
              <Image src={blue} alt="foto"/>
            </div>

            <div id={s.img} className={activeNum === 2 ? s.active : s.hidden}>
              <Image src={gold} alt="foto"/>
            </div>
          </div>

          <div className={s.navPoints}>
            {activeNum === 0 ? '' : <PrevBtn/>}
            <span className={activeNum === 0 ? s.pointActive : s.point}></span>
            <span className={activeNum === 1 ? s.pointActive : s.point}></span>
            <span className={activeNum === 2 ? s.pointActive : s.point}></span>
            {activeNum === 2 ? '' : <NextBtn/>}
          </div>
        </div>

        <div className={s.textWrapper}>
          <p className={s.brandNameDesk}>
            <span className={s.soul}> soul</span>
            <span className={s.ofMine}>of mine</span>
          </p>
          <div className={s.nameWrapper}>
            <p className={activeNum === 0 ? s.activeName : ''}>seduction</p>
            <p className={activeNum === 1 ? s.activeName : ''}>treasure</p>
            <p className={activeNum === 2 ? s.activeName : ''}>twirl</p>
          </div>

          <div className={s.descrWrapper}>
            <span className={s.hiddenSpan}>
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h5>
            </span>
            <div
              className={
                activeNum === 0 ? s.activeTextWrapper : s.hiddenTextWrapper
              }>
              <p>
                of the printing and typesetting industry. Lorem Ipsum is simply
                dummy text
              </p>
            </div>
            <div
              className={
                activeNum === 1 ? s.activeTextWrapper : s.hiddenTextWrapper
              }>
              <p>
                Ipsum Lorem and typesetting industry. is simply dummy text of
                the printing
              </p>
            </div>
            <div
              className={
                activeNum === 2 ? s.activeTextWrapper : s.hiddenTextWrapper
              }>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className={s.linkWrapper}>
            <LinkTo path={`/${nameSwitch(activeNum)}`}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCustomSlider;
