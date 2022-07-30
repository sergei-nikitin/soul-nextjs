import s from './PageNotFound.module.scss';
import LinkTo from "../link/LinkTo";
import React from "react";
import CookiesModal from "../cookies/CookiesModal";

const PageNotFound = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <p>OPS...</p>
        <h4>something went wrong</h4>
        <LinkTo path={'/'} name='GO BACK HOME' className={s.button} />
        <h3>404</h3>
      </div>
      <CookiesModal/>
    </div>
  );
};

export default PageNotFound;
