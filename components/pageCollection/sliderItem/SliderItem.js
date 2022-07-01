import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice';

import { SeductionMini } from '../miniProducts/SeductionMini';
import { TreasureMini } from '../miniProducts/TreasureMini';
import { TwirlMini } from '../miniProducts/TwirlMini';
import ButtonAdd from '../../buttonAdd/ButtonAdd';
import LinkTo from '../../link/LinkTo';
import s from './SliderItem.module.scss';

export const SliderItem = ({
  id,
  num,
  img,
  name,
  price,
  descr,
  text,
  linkPath,
  PrevBtn,
  NextBtn,
}) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id: id,
      name: name,
      price: price,
      imageUrl: img,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={s.container}>
      <div className={s.slideNum}>
        <span className={s.mainNum}>{num}</span>
        <span className={s.totalNum}>/ 03</span>
      </div>
      <div className={s.imgContainer}>
        <div className={s.containerForCanvas}>
          {/* containerForCanvas: контейнер для анимации/ position:absolute w:100% h:100% */}
        </div>
        <div className={s.img}>
          <Image
            src={img}
            alt="img"
            placeholder="blure"
            layout="fill"
            // width="200"
            // height="220"
          />
        </div>

        {/* найти более простое решение с добавлением кружку активного класса  */}
        {num === '01' && (
          <div className={s.navPoints}>
            <span className={s.pointActive}></span>
            <span className={s.point}></span>
            <span className={s.point}></span>
            <NextBtn />
          </div>
        )}
        {num === '02' && (
          <div className={s.navPoints}>
            <PrevBtn />
            <span className={s.point}></span>
            <span className={s.pointActive}></span>
            <span className={s.point}></span>
            <NextBtn />
          </div>
        )}
        {num === '03' && (
          <div className={s.navPoints}>
            <PrevBtn />
            <span className={s.point}></span>
            <span className={s.point}></span>
            <span className={s.pointActive}></span>
          </div>
        )}
      </div>

      <div className={s.infocontainer}>
        <p className={s.nameProduct}>{name}</p>
        <p className={s.priceProduct}>＄ {price}.00</p>
        <p className={s.textProduct}>{text}</p>
        <p className="text">{descr}</p>

        <div className={s.btnsWrapper}>
          <LinkTo path={linkPath} />
          <ButtonAdd onClickAdd={onClickAdd} />
        </div>
      </div>

      {/* mini products от 569px */}
      {num === '01' && (
        <div className={s.miniProducts}>
          <TreasureMini />
          <TwirlMini />
        </div>
      )}
      {num === '02' && (
        <div className={s.miniProducts}>
          <SeductionMini />
          <TwirlMini />
        </div>
      )}
      {num === '03' && (
        <div className={s.miniProducts}>
          <SeductionMini />
          <TreasureMini />
        </div>
      )}
    </div>
  );
};
