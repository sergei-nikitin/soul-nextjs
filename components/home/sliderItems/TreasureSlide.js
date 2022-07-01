import Image from 'next/image';
import LinkTo from '../../link/LinkTo';

import img from '../../../assets/images/butles/blue.png';
import s from './SliderMineItem.module.scss';

export const TreasureSlide = ({ NextBtn, PrevBtn }) => {
  return (
    <div className={s.container}>
      <p className={s.brandName}>
        soul
        <br /> of mine
      </p>
      <div className={s.imgContainer}>
        <div className={s.containerForCanvas}>
          {/* containerForCanvas: контейнер для анимации/ position:absolute w:100% h:100% */}
        </div>
        <Image className={s.img} src={img} alt="img" />

        <div className={s.navPoints}>
          <PrevBtn />
          <span className={s.point}></span>
          <span className={s.pointActive}></span>
          <span className={s.point}></span>
          <NextBtn />
        </div>
      </div>
      <div className={s.textWrapper}>
        <p className={s.brandNameDesk}>
          <span className={s.soul}> soul</span>
          <span className={s.ofMine}>of mine</span>
        </p>
        <p className={s.productName}>treasure</p>

        <p className={s.textProduct}>
          Translated as my soul, the accepted manifestation tenderness and
          appeal to a loved one.
        </p>

        <div className={s.linkWrapper}>
          <LinkTo path={'/treasure'} />
        </div>
      </div>
    </div>
  );
};
