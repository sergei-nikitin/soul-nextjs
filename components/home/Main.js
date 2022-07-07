import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Mousewheel, Keyboard, Navigation, EffectFade } from 'swiper';

import { SeductionSlide } from './sliderItems/SeductionSlide';
import { TreasureSlide } from './sliderItems/TreasureSlide';
import { TwirlSlide } from './sliderItems/TwirlSlide';
import icon from '../../assets/images/icons/sliderArrow.svg';

import s from './Main.module.scss';

export const Main = () => {
  function SlideNextButton() {
    const swiper = useSwiper();
    return (
      <button className={s.nextBtn} onClick={() => swiper.slideNext()}>
        <Image className={s.icon} src={icon} alt="icon" />
      </button>
    );
  }
  function SlidePrevButton() {
    const swiper = useSwiper();
    return (
      <button className={s.prevBtn} onClick={() => swiper.slidePrev()}>
        <Image className={s.icon} src={icon} alt="icon" />
      </button>
    );
  }
  return (
    <>
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        effect="fade"
        navigation={true}
        modules={[Mousewheel, Keyboard, Navigation, EffectFade]}
        className={s.swiperMain}>
        <SwiperSlide>
          <SeductionSlide NextBtn={SlideNextButton} PrevBtn={SlidePrevButton} />
        </SwiperSlide>
        <SwiperSlide>
          <TreasureSlide NextBtn={SlideNextButton} PrevBtn={SlidePrevButton} />
        </SwiperSlide>
        <SwiperSlide>
          <TwirlSlide NextBtn={SlideNextButton} PrevBtn={SlidePrevButton} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
