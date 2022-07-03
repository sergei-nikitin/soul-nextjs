import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice';

import redButl from '../../../assets/images/butles/red.png';
import { TreasureMini } from '../miniProducts/TreasureMini';
import { TwirlMini } from '../miniProducts/TwirlMini';
import ButtonAdd from '../../buttonAdd/ButtonAdd';
import LinkTo from '../../link/LinkTo';
import s from './SliderItem.module.scss';

export const SeductionCollsliderItem = ({ NextBtn }) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id: 1,
      name: 'seduction',
      price: '120',
      imageUrl: redButl,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={s.container}>
      <div className={s.slideNum}>
        <span className={s.mainNum}>01</span>
        <span className={s.totalNum}>/ 03</span>
      </div>
      <div className={s.imgContainer}>
        <div className={s.containerForCanvas}>
          {/* containerForCanvas: контейнер для анимации/ position:absolute w:100% h:100% */}
        </div>
        <div className={s.img}>
          <Image src={redButl} alt="img" placeholder="blure" />
        </div>

        <div className={s.navPoints}>
          <span className={s.pointActive}></span>
          <span className={s.point}></span>
          <span className={s.point}></span>
          <NextBtn />
        </div>
      </div>

      <div className={s.infocontainer}>
        <p className={s.nameProduct}>seduction</p>
        <p className={s.priceProduct}>＄ 120.00</p>
        <p className={s.textProduct}>
          seduction - is smells like seduce is smells like seduce
        </p>
        <p className="text">
          These are emotions, who consider a person to adulthood, feelings,
          wings that lift us when it seems tenderness of touch new thoughts
          about familiar things.
        </p>

        <div className={s.btnsWrapper}>
          <LinkTo path={'/seduction'} />
          <ButtonAdd onClickAdd={onClickAdd} />
        </div>
      </div>

      {/* mini products от 569px */}

      <div className={s.miniProducts}>
        <TreasureMini />
        <TwirlMini />
      </div>
    </div>
  );
};
