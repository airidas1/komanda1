import React, { useState } from 'react';
import './Home.css';
import heroImg from '../assets/images/hero-img.png';
import universityIcon from '../assets/images/university-icon.png';
import Button from '../components/Button';
import InfoBox from '../components/InfoBox';

function Home() {
  return (
    <main className='home'>
      <div className='home-container'>
        <div className='filter'>
          <form>
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
        <div className='hero'>
          <div className='hero-text'>
            <h1>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries
            </p>
            <Button title={'Sužinok daugiau!'} href={'#'} />
          </div>
          <div className='hero-img'>
            <img src={heroImg} alt='hero-image' className='hero-image' />
          </div>
        </div>
        <div className='additional-info'>
          <h2>Kažkokie faktai apie mokslą Lietuvoje</h2>
          <div className='info-box-container'>
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
