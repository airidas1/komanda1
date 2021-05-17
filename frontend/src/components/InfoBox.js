import React from 'react';
import './InfoBox.css';

function InfoBox({ icon, text }) {
  return (
    <article className='infoBox'>
      <img className='infoBox-image' src={icon} alt ='iconIMG'/>
      <p>{text}</p>
    </article>
  );
}

export default InfoBox;
