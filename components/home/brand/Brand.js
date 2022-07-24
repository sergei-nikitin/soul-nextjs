import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import LinkTo from '../../link/LinkTo';
import img from '../../../assets/images/home/brand.png';
import s from './Brand.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';
import { leftAnimation } from '../../../assets/functions/fromLeft';

const Brand = () => {
  const refSection = useRef();
  const [clientHeight, setClientHeight] = useState();

  const startAnimationPosition = clientHeight - 300;

  useEffect(() => {
    if (refSection) {
      setClientHeight(refSection.current.offsetTop - 200);
    }
  }, []);

  const { scrollY } = useViewportScroll();
  const top = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [150, 0],
  );
  const opacity = useTransform(
    scrollY,
    [startAnimationPosition, clientHeight],
    [0, 1],
  );
  return (
    <section ref={refSection} className={s.section}>
      <div className={s.container}>
        <span className={s.mobTitleWrapper}>
          <motion.h2 style={{ top, opacity }} className={s.titleMob}>
            <span> This brand</span> <br />
            <span>was born in</span> <br />
            <span> great love...</span>
          </motion.h2>
        </span>

        <span className={s.titleWrapper}>
          <motion.h2 style={{ top, opacity }} className={s.title}>
            This brand was born <br />
            in great love...
          </motion.h2>
        </span>

        <div className={s.content}>
          <div className={s.descr}>
            <p className="text">
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things, the highest category of owners, Freedom of
              choice, inserts and desires.
            </p>
            <motion.div style={{ opacity }}>
              <LinkTo path={'/about-us'} />
            </motion.div>
          </div>
          <div>
            <div className={s.imageWrapper}>
              <motion.div
                style={{ top, opacity }}
                className={s.motionImageWrapper}>
                <Image className={s.img} src={img} alt="foto" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
