import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { logo, heroImg } from "../assets";
import styles from "../styles";

// [] {}

const PageHOC = (Component, title, description) => () => {
  return (
    <div className={styles.hocContainer}>
      <div className={styles.hocContentBox}>
        <img
          src={logo}
          alt='logo'
          className={styles.hocLogo}
          onClick={() => navigate("/")}
        />

        <div className={styles.hocBodyWrapper}>
          <div>
            <h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
          </div>

          <p className={`${styles.normalText} my-10`}>{description}</p>
          <Component />
        </div>

        <p className={styles.footerText}>Made with 💜 by Carlos Serdio</p>
      </div>
      <div className='flex flex-1'>
        <img
          src={heroImg}
          alt='hero-img'
          className='w-full xl:h-full object-cover'
        />
      </div>
    </div>
  );
};

export default PageHOC;
