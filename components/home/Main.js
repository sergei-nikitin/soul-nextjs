import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper';

import { SeductionSlide } from './sliderItems/SeductionSlide';
import { TreasureSlide } from './sliderItems/TreasureSlide';
import { TwirlSlide } from './sliderItems/TwirlSlide';
import icon from '../../assets/images/icons/sliderArrow.svg';

import s from './Main.module.scss';

export const Main = () => {
  // const itemsInfo = [
  //   {
  //     id: '1',
  //     img: `${redButle}`,

  //     linkPath: '/seduction',
  //     name: 'seduction',
  //     text: 'seduction - is smells like seduce is smells like seduce',
  //     descr:
  //       'These are emotions, who consider a person to adulthood, feelings, wings that lift us when it seems tenderness of touch new thoughts about familiar things.',
  //   },
  //   {
  //     id: '2',
  //     img: `${blueButle}`,

  //     linkPath: '/treasure',
  //     name: 'trasure',
  //     text: 'trasure - is smells like seduce is smells like seduce',
  //     descr:
  //       'These are emotions, who consider a person to adulthood, feelings, wings that lift us when it seems tenderness of touch new thoughts about familiar things.',
  //   },
  //   {
  //     id: '3',
  //     img: `${goldButle}`,
  //     linkPath: '/twirl',
  //     name: 'twirl',
  //     text: 'twirl - is smells like seduce is smells like seduce',
  //     descr:
  //       'These are emotions, who consider a person to adulthood, feelings, wings that lift us when it seems tenderness of touch new thoughts about familiar things.',
  //   },
  // ];
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
        modules={[Mousewheel, Keyboard]}
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
