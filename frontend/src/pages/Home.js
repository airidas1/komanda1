import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
// Style
import styles from './Home.module.css';
// Images
import heroImg from '../assets/images/hero-img.png';
import icon1 from '../assets/images/icon1.svg';
import icon2 from '../assets/images/icon2.svg';
import icon3 from '../assets/images/icon3.svg';

// Components
import Button from '../components/Button';
import InfoBox from '../components/InfoBox';






function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.home_container}>
        <div className={styles.filter}>
          <form className={styles.form}>
            <input type='text' placeholder='Miestas' value='Miestas' />
            <input type='text' placeholder='Grupė' value='Grupė' />
            <input
              type='text'
              placeholder='Pagrindinis tipas'
              value='Pagrindinis tipas'
            />
            <input type='text' placeholder='Kalba' value='Kalba' />
            <button type='submit'>Noriu mokytis!</button>
          </form>
        </div>
        <div className={styles.hero}>
          <div className={styles.hero_text}>
            <h1>Tavo karjeros ir tobulėjimo galimybės Lietuvoje!</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries
            </p>
            <Button title={'Sužinok daugiau'} href={'#'} />
          </div>
          <div className={styles.hero_img}>
            <img src={heroImg} alt='heroIMG' className={styles.hero_image} />
          </div>
        </div>
        <div className={styles.additional_info}>
          <h2>Kažkokie faktai apie mokslą Lietuvoje</h2>
          <div className={styles.info_box_container}>
            <InfoBox
              text={
                'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
              }
              icon={icon1}
            />
            <InfoBox
              text={
                'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
              }
              icon={icon2}
            />
            <InfoBox
              text={
                'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
              }
              icon={icon3}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
