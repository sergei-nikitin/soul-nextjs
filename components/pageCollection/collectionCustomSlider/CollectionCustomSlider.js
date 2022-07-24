import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice';

import { RED } from '../../../cnstants';
import { BLUE } from '../../../cnstants';
import { GOLD } from '../../../cnstants';

import { nameSwitch } from '../../../assets/functions/nameSwitch';
import { SeductionMini } from '../miniProducts/SeductionMini';
import { TreasureMini } from '../miniProducts/TreasureMini';
import { TwirlMini } from '../miniProducts/TwirlMini';
import ButtonAdd from '../../buttonAdd/ButtonAdd';
import LinkTo from '../../link/LinkTo';

import red from '../../../assets/images/butles/red.png';
import blue from '../../../assets/images/butles/blue.png';
import gold from '../../../assets/images/butles/white.png';
import icon from '../../../assets/images/icons/sliderArrow.svg';
import s from './CollectionCustomSlider.module.scss';

export const CollectionCustomSlider = () => {
  const [activeNum, setActiveNum] = React.useState(0);
  const sliderRef = React.useRef();
  const dispatch = useDispatch();

  const onSeductionAdd = () => {
    const item = {
      id: 2,
      name: 'seduction',
      price: 132,
      imageUrl: red,
    };
    dispatch(addItem(item));
  };
  const onTreasureAdd = () => {
    const item = {
      id: 1,
      name: 'treasure',
      price: 132,
      imageUrl: blue,
    };
    dispatch(addItem(item));
  };
  const onTwirlAdd = () => {
    const item = {
      id: 3,
      name: 'twirl',
      price: 132,
      imageUrl: gold,
    };
    dispatch(addItem(item));
  };
  const onClickNext = () => {
    if (activeNum === GOLD) return;
    setActiveNum(activeNum + 1);
  };
  const onClickPrev = () => {
    if (activeNum === RED) return;
    setActiveNum(activeNum - 1);
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
  const onSwipeLeft = () => {
    if (direction === 'left' && activeNum !== RED) {
      setActiveNum(activeNum - 1);
    }
  };
  const onSwipeRight = () => {
    if (direction === 'right' && activeNum !== GOLD) {
      setActiveNum(activeNum + 1);
    }
  };

  const addSwitch = (param) => {
    switch (param) {
      case RED:
        return onSeductionAdd;
      case BLUE:
        return onTreasureAdd;
      case GOLD:
        return onTwirlAdd;
      default:
        return onSeductionAdd;
    }
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
    <section className={s.container}>
      <div className={s.slideNum}>
        <p className={s.mainNum}>0 </p>
        <div className={s.numWrapper}>
          <p className={activeNum === RED ? s.activeNumber : s.hiddenNumber}>
            1
          </p>
          <p className={activeNum === BLUE ? s.activeNumber : s.hiddenNumber}>
            2
          </p>
          <p className={activeNum === GOLD ? s.activeNumber : s.hiddenNumber}>
            3
          </p>
        </div>

        {/* <span className={s.mainNum}>0{activeNum + 1}</span> */}
        <span className={s.totalNum}>/ 03</span>
      </div>

      <div
        ref={sliderRef}
        onTouchStart={sliderTouchStart}
        onTouchMove={sliderTuchMove}
        className={s.mainContent}>
        <div className={s.imgBlockContainer}>
          <div className={s.imageWrapper}>
            <div className={activeNum === RED ? s.active : s.hidden}>
              <Image id={s.img} src={red} alt="foto" />
            </div>
            <div className={activeNum === BLUE ? s.active : s.hidden}>
              <Image id={s.img} src={blue} alt="foto" />
            </div>
            <div className={activeNum === GOLD ? s.active : s.hidden}>
              <Image id={s.img} src={gold} alt="foto" />
            </div>

            {activeNum === RED && (
              <div className={s.navPoints}>
                <span className={s.pointActive}></span>
                <span className={s.point}></span>
                <span className={s.point}></span>
                <NextBtn />
              </div>
            )}
            {activeNum === BLUE && (
              <div className={s.navPoints}>
                <PrevBtn />
                <span className={s.point}></span>
                <span className={s.pointActive}></span>
                <span className={s.point}></span>
                <NextBtn />
              </div>
            )}
            {activeNum === GOLD && (
              <div className={s.navPoints}>
                <PrevBtn />
                <span className={s.point}></span>
                <span className={s.point}></span>
                <span className={s.pointActive}></span>
              </div>
            )}
          </div>

          {/* найти более простое решение с добавлением кружку активного класса  */}
        </div>
        <div className={s.infocontainer}>
          <div className={s.nameWrapper}>
            <p className={activeNum === RED ? s.activeName : ''}>seduction</p>
            <p className={activeNum === BLUE ? s.activeName : ''}>treasure</p>
            <p className={activeNum === GOLD ? s.activeName : ''}>twirl</p>
          </div>

          <p className={s.priceProduct}>＄ 200.00</p>

          <div className={s.textWrapper}>
            <p className={activeNum === RED ? s.textProduct : ''}>seduction</p>
            <p className={activeNum === BLUE ? s.textProduct : ''}>treasure</p>
            <p className={activeNum === GOLD ? s.textProduct : ''}>twirl</p>
          </div>

          <div className={s.descrWrapper}>
            <p className={activeNum === RED ? s.descrProduct : ''}>
              seduction seduction
            </p>
            <p className={activeNum === BLUE ? s.descrProduct : ''}>
              treasure treasure
            </p>
            <p className={activeNum === GOLD ? s.descrProduct : ''}>
              twirl twirl
            </p>
          </div>

          <div className={s.btnsWrapper}>
            <LinkTo path={`/${nameSwitch(activeNum)}`} />
            <ButtonAdd onClickAdd={addSwitch(activeNum)} />
          </div>
        </div>
      </div>

      {/* mini products от 569px */}
      {activeNum === RED && (
        <div className={s.miniProducts}>
          <TreasureMini />
          <TwirlMini />
        </div>
      )}
      {activeNum === BLUE && (
        <div className={s.miniProducts}>
          <SeductionMini />
          <TwirlMini />
        </div>
      )}
      {activeNum === GOLD && (
        <div className={s.miniProducts}>
          <SeductionMini />
          <TreasureMini />
        </div>
      )}
    </section>
  );
};
