import React, { useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';

function Header(props) {
  const navigation = useRef();

  function clickHandler() {
    navigation.current.classList.toggle('active');
  }



  return(
  <header>
    {console.log('veikia')}
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className='toggler' onClick={clickHandler}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className='navbar'>
        <ul className='navbar_menu' ref={navigation}>
          <li>
            <Link to='/about'>Apie mus</Link>
          </li>
          <li>
            <Link to='/education'>Mokslas</Link>
          </li>
          <li>
            <Link to='/faq'>D.U.K</Link>
          </li>
          <li>
            <Link to='/carrer'>Karjera</Link>
          </li>
          <li className='search-btn'>
            <Link
              to={{
                pathname: '/results',
                state: { object: {} },
              }}
            >
              Ieškoti
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)}


export default Header;
