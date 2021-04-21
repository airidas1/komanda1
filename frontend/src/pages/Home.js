import React, { useState } from 'react';
import styles from './Home.module.css';
import heroImg from '../assets/images/hero-img.png';
import universityIcon from '../assets/images/university-icon.png';
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
            <img src={heroImg} alt='hero-image' className={styles.hero_image} />
          </div>
        </div>
        <div className={styles.additional_info}>
          <h2>Kažkokie faktai apie mokslą Lietuvoje</h2>
          <div className={styles.info_box_container}>
            <InfoBox
              text={
                'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
              }
              icon={universityIcon}
            />
            <InfoBox
              text={
                'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
              }
              icon={universityIcon}
            />
            <InfoBox
              text={
                'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
              }
              icon={universityIcon}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
