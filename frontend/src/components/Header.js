import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigation = useRef();

  function clickHandler() {
    navigation.current.classList.toggle('active');
  }

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>LOGO.</Link>
        </div>
        <div className='toggler' onClick={clickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className='navbar'>
          <ul className='navbar__menu-items' ref={navigation}>
            <li>
              <Link to='/v1'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='/admin'>Log in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
