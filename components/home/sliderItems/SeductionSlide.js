import Image from 'next/image';
import LinkTo from '../../link/LinkTo';

import img from '../../../assets/images/butles/red.png';
import s from './SliderMineItem.module.scss';

export const SeductionSlide = ({ NextBtn }) => {
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
        <div className={s.imageWrapper}>
          <Image className={s.img} src={img} alt="img" placeholder="blur" />
        </div>

        <div className={s.navPoints}>
          <span className={s.pointActive}></span>
          <span className={s.point}></span>
          <span className={s.point}></span>
          <NextBtn />
        </div>
      </div>

      <div className={s.textWrapper}>
        <p className={s.brandNameDesk}>
          <span className={s.soul}> soul</span>
          <span className={s.ofMine}>of mine</span>
        </p>
        <p className={s.productName}>seduction</p>

        <p className={s.textProduct}>
          Translated as my soul, the accepted manifestation tenderness and
          appeal to a loved one.
        </p>

        <div className={s.linkWrapper}>
          <LinkTo path={'/seduction'} />
        </div>
      </div>
    </div>
  );
};
