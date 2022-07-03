import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper';

// import { SliderItem } from './sliderItem/SliderItem';
import { SeductionCollsliderItem } from './sliderItem/SeductionCollSliderItem';
import { TreasureCollsliderItem } from './sliderItem/TreasureCollSliderItem';
import { TwirlCollSliderItem } from './sliderItem/TwirlCollSliderItem';

// import redButle from '../../assets/images/butles/red.png';
// import blueButle from '../../assets/images/butles/blue.png';
// import goldButle from '../../assets/images/butles/white.png';
import icon from '../../assets/images/icons/sliderArrow.svg';
import s from './SliderCollection.module.scss';

export const SliderCollection = () => {
  const itemsInfo = [
    {
      id: 1,
      img: '/public/images/butles/red.png',
      // img: `${redButle}`,
      num: '01',
      price: '120',
      linkPath: '/seduction',
      name: 'seduction',
      text: 'seduction - is smells like seduce is smells like seduce',
      descr:
        'These are emotions, who consider a person to adulthood, feelings, wings that lift us when it seems tenderness of touch new thoughts about familiar things.',
    },
    {
      id: 2,
      img: '/public/images/butles/blue.png',
      // img: `${blueButle}`,
      num: '02',
      price: '140',
      linkPath: '/treasure',
      name: 'trasure',
      text: 'trasure - is smells like seduce is smells like seduce',
      descr:
        'These are emotions, who consider a person to adulthood, feelings, wings that lift us when it seems tenderness of touch new thoughts about familiar things.',
    },
    {
      id: 3,
      img: '/public/images/butles/white.png',
      // img: `${goldButle}`,
      num: '03',
      price: '180',
      linkPath: '/twirl',
      name: 'twirl',
      text: 'twirl - is smells like seduce is smells like seduce',
      descr:
        'These are emotions, who consider a person to adulthood, feelings, wings that lift us when it seems tenderness of touch new thoughts about familiar things.',
    },
  ];
  function SlideNextButton() {
    const swiper = useSwiper();
    return (
      <button className={s.nextBtn} onClick={() => swiper.slideNext()}>
        <div className={s.icon}>
          <Image src={icon} alt="icon" />
        </div>
      </button>
    );
  }
  function SlidePrevButton() {
    const swiper = useSwiper();
    return (
      <button className={s.prevBtn} onClick={() => swiper.slidePrev()}>
        <div className={s.icon}>
          <Image src={icon} alt="icon" />
        </div>
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
        className="swiperCollection">
        <SwiperSlide>
          <SeductionCollsliderItem NextBtn={SlideNextButton} />
        </SwiperSlide>

        <SwiperSlide>
          <TreasureCollsliderItem
            PrevBtn={SlidePrevButton}
            NextBtn={SlideNextButton}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TwirlCollSliderItem PrevBtn={SlidePrevButton} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

{
  /* {itemsInfo.map((i) => (
          <SwiperSlide key={i.name}>
            <SliderItem
              id={i.id}
              num={i.num}
              img={i.img}
              name={i.name}
              price={i.price}
              text={i.text}
              descr={i.descr}
              linkPath={i.linkPath}
              PrevBtn={SlidePrevButton}
              NextBtn={SlideNextButton}
            />
          </SwiperSlide>
        ))} */
}
