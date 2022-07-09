import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import MapComponent from '../../map/Map';

import img from '../../../assets/images/contacts/autor.png';
import BallIcon from '../../icons/BallIcon';
import InstaIcon from '../../icons/InstaIcon';
import FacebookIcon from '../../icons/FaceBookIcon';
import TwiterIcon from '../../icons/TwiterIcon';

import s from './FormSection.module.scss';
import { toTopAnimation } from '../../../assets/functions/toTop';

const FormSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      // viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <motion.div
          custom={2}
          variants={toTopAnimation}
          className={s.imageWrapper}>
          <Image src={img} alt="foto" placeholder="blure" />
        </motion.div>

        {/* infoWrapperFirst */}
        <div className={s.infoWrapperFirst}>
          <h2 className={s.infoTitle}>more information</h2>
          <p className={s.infoName}>address</p>
          <p className={s.infoDescr}>Kyiv, Independence Avenue 13</p>
          <p className={s.infoName}>amail us</p>
          <a
            href="mailto:soulofmine.perfumes@gmail.com"
            className={s.infoDescr}>
            soulofmine.perfumes@gmail.com
          </a>
          <p className={s.infoName}>coll us</p>
          <a href="tel:+971501871707" className={s.infoDescr}>
            Call: +971501871707
          </a>
          <div className={s.social}>
            <a href="#" className={s.icons}>
              <BallIcon />
            </a>
            <a href="#" className={s.icons}>
              <InstaIcon />
            </a>
            <a href="#" className={s.icons}>
              <TwiterIcon />
            </a>
            <a href="#" className={s.icons}>
              <FacebookIcon />
            </a>
          </div>
        </div>
        {/* form */}
        <motion.form custom={3} variants={toTopAnimation} className={s.form}>
          <p className={s.formTitle}>send email</p>
          <div className={s.firstInputs}>
            <div className={s.inputWrapperSmal}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
              />
              <label htmlFor="name" className={s.label}>
                first name
              </label>
            </div>
            <div className={s.inputWrapperSmal}>
              <input
                id="email"
                type="e-mail"
                name="e-mail"
                placeholder="Your e-mail"
              />
              <label htmlFor="email" className={s.label}>
                e-mail
              </label>
            </div>
          </div>
          <div className={s.inputWrapperBig}>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={s.lastInput}
              placeholder="Your phone number"
            />
            <label htmlFor="phone" className={s.label}>
              phone number
            </label>
          </div>
          <div className={s.inputWrapperBig}>
            <input
              id="message"
              name="message"
              type="text"
              className={s.lastInput}
              placeholder="Your message"
            />
            <label htmlFor="message" className={s.label}>
              message
            </label>
          </div>

          <button className={s.submit} type="submit">
            send email
          </button>
        </motion.form>
        {/* more info */}
        <div className={s.infoWrapperSecond}>
          <h2 className={s.infoTitle}>more information</h2>
          <p className={s.infoName}>address</p>
          <p className={s.infoDescr}>Kyiv, Independence Avenue 13</p>
          <p className={s.infoName}>amail us</p>
          <a
            href="mailto:soulofmine.perfumes@gmail.com"
            className={s.infoDescr}>
            soulofmine.perfumes@gmail.com
          </a>
          <p className={s.infoName}>coll us</p>
          <a href="tel:+971501871707" className={s.infoDescr}>
            Call: +971501871707
          </a>
          <div className={s.social}>
            <a href="#" className={s.icons}>
              <BallIcon />
            </a>
            <a href="#" className={s.icons}>
              <InstaIcon />
            </a>
            <a href="#" className={s.icons}>
              <TwiterIcon />
            </a>
            <a href="#" className={s.icons}>
              <FacebookIcon />
            </a>
          </div>
        </div>
        <div className={s.mapWrapper}>
          <MapComponent />
        </div>
      </div>
    </motion.section>
  );
};

export default FormSection;
