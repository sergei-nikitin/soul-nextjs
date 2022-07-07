import React from 'react';
import Image from 'next/image';

import LinkTo from '../../link/LinkTo';
import red from '../../../assets/images/butles/red.png';
import blue from '../../../assets/images/butles/blue.png';
import gold from '../../../assets/images/butles/white.png';
import icon from '../../../assets/images/icons/sliderArrow.svg';
import s from './HomeCustomSlider.module.scss';

const HomeCustomSlider = () => {
  const [activeNum, setActiveNum] = React.useState(0);

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
        <Image src={icon} alt="icon" />
      </button>
    );
  };
  const PrevBtn = () => {
    return (
      <button onClick={onClickPrev} className={s.prevBtn}>
        <Image src={icon} alt="icon" />
      </button>
    );
  };

  const nameSwitch = (param) => {
    switch (param) {
      case 0:
        return 'seduction';
      case 1:
        return 'treasure';
      case 2:
        return 'twirl';
      default:
        return 'seduction';
    }
  };
  const textSwitch = (param) => {
    switch (param) {
      case 0:
        return 'seduction seduction seduction seduction seduction';
      case 1:
        return ' treasure treasure treasure treasure treasure treasure';
      case 2:
        return 'twirl twirl twirl twirl twirl twirl twirl';
      default:
        return 'seduction twirl treasure seduction twirl treasure seduction twirl';
    }
  };
  let direction = '';
  const sliderRef = React.useRef();

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
          <br /> of mine
        </p>
        <div className={s.imgContainer}>
          <div className={s.imagesContainer}>
            <div id={s.img} className={activeNum === 0 ? s.active : s.hidden}>
              <Image src={red} alt="foto" />
            </div>

            <div id={s.img} className={activeNum === 1 ? s.active : s.hidden}>
              <Image src={blue} alt="foto" />
            </div>

            <div id={s.img} className={activeNum === 2 ? s.active : s.hidden}>
              <Image src={gold} alt="foto" />
            </div>
          </div>

          <div className={s.navPoints}>
            {activeNum === 0 ? '' : <PrevBtn />}
            <span className={activeNum === 0 ? s.pointActive : s.point}></span>
            <span className={activeNum === 1 ? s.pointActive : s.point}></span>
            <span className={activeNum === 2 ? s.pointActive : s.point}></span>
            {activeNum === 2 ? '' : <NextBtn />}
          </div>
        </div>

        <div className={s.textWrapper}>
          <p className={s.brandNameDesk}>
            <span className={s.soul}> soul</span>
            <span className={s.ofMine}>of mine</span>
          </p>
          <p className={s.productName}>{nameSwitch(activeNum)}</p>

          <p className={s.textProduct}>{textSwitch(activeNum)}</p>

          <div className={s.linkWrapper}>
            <LinkTo path={`/${nameSwitch(activeNum)}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCustomSlider;
