import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

import blue from '../../../assets/images/about-us/about-us-blue.png';
import red from '../../../assets/images/about-us/about-us-butle-red.jpg';
import gold from '../../../assets/images/about-us/about-us-butle-gold.jpg';

import s from './Slider.module.scss';

export const Slider = () => {
  const [slider, setSlider] = React.useState(false);
  React.useEffect(() => {
    setSlider(true);
  }, []);

  const itemsInfo = {
    item1: {
      title: 'treasure',
      text: 'These are emotions, who consider a person to adulthood, feelings, wings that lift us when it seems tenderness of touch new thoughts about familiar things.',
    },
    item2: {
      title: 'seduction',
      text: 'These are emotions, who consider a person to adulthood, feelings, wings that lift us when it seems tenderness of touch new thoughts about familiar things.',
    },
    item3: {
      title: 'twirl',
      text: 'These are emotions, who consider a person to adulthood, feelings, wings that lift us when it seems tenderness of touch new thoughts about familiar things.',
    },
  };
  const SliderItem = ({ img, title, text }) => {
    return (
      <div className={s.itemSliderWrapper}>
        <div className={s.imageWrapper}>
          <Image src={img} alt="img" />
        </div>

        <h3 className={s.title}>{title}</h3>
        <p className="text">{text}</p>
      </div>
    );
  };
  const toTopAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,

      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <motion.h2 custom={2} variants={toTopAnimation} className={s.mainTitle}>
          We create unique bottles for each fragrance
        </motion.h2>
        {slider && (
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              569: {
                slidesPerView: 2,
                spaceBetween: 20,
                loop: true,
              },
              834: {
                slidesPerView: 3,
                spaceBetween: 20,
                autoplay: false,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 150,
                autoplay: false,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 170,
                autoplay: false,
              },
            }}
            modules={[Autoplay]}
            className={s.swiper}>
            <SwiperSlide>
              <SliderItem
                img={blue}
                title={itemsInfo.item1.title}
                text={itemsInfo.item1.text}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem
                img={red}
                title={itemsInfo.item2.title}
                text={itemsInfo.item2.text}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem
                img={gold}
                title={itemsInfo.item3.title}
                text={itemsInfo.item3.text}
              />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </motion.section>
  );
};
