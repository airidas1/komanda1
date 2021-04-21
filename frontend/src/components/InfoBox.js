import React from 'react';
import './InfoBox.css';

function InfoBox({ icon, text, title }) {
  return (
    <article className='infoBox'>
      <img className='infoBox-image' src={icon} />
      <p>{text}</p>
    </article>
  );
}

export default InfoBox;
