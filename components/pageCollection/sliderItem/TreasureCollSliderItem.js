import React from 'react';
import Image from 'next/image';

import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice';

import blueButl from '../../../assets/images/butles/blue.png';
import { SeductionMini } from '../miniProducts/SeductionMini';
// import { TreasureMini } from '../miniProducts/TreasureMini';
import { TwirlMini } from '../miniProducts/TwirlMini';
import ButtonAdd from '../../buttonAdd/ButtonAdd';
import LinkTo from '../../link/LinkTo';
import s from './SliderItem.module.scss';

export const TreasureCollsliderItem = ({ NextBtn, PrevBtn }) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id: 2,
      name: 'treasure',
      price: '140',
      imageUrl: blueButl,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={s.container}>
      <div className={s.slideNum}>
        <span className={s.mainNum}>02</span>
        <span className={s.totalNum}>/ 03</span>
      </div>
      <div className={s.imgContainer}>
        <div className={s.containerForCanvas}>
          {/* containerForCanvas: контейнер для анимации/ position:absolute w:100% h:100% */}
        </div>
        <div className={s.img}>
          <Image src={blueButl} alt="img" placeholder="blure" />
        </div>

        <div className={s.navPoints}>
          <PrevBtn />
          <span className={s.point}></span>
          <span className={s.pointActive}></span>
          <span className={s.point}></span>
          <NextBtn />
        </div>
      </div>

      <div className={s.infocontainer}>
        <p className={s.nameProduct}>treasure</p>
        <p className={s.priceProduct}>＄ 140.00</p>
        <p className={s.textProduct}>
          treasure - is smells like seduce is smells like seduce
        </p>
        <p className="text">
          These are emotions, who consider a person to adulthood, feelings,
          wings that lift us when it seems tenderness of touch new thoughts
          about familiar things.
        </p>

        <div className={s.btnsWrapper}>
          <LinkTo path={'/treasure'} />
          <ButtonAdd onClickAdd={onClickAdd} />
        </div>
      </div>

      {/* mini products от 569px */}
      <div className={s.miniProducts}>
        <SeductionMini />
        <TwirlMini />
      </div>
    </div>
  );
};

// export default TreasureCollsliderItem;
