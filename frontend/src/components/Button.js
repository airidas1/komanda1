import React from 'react';
import './Button.css';

function Button({ title, href }) {
  return (
    <a className='a-button' href={href}>
      {title}
    </a>
  );
}

export default Button;
