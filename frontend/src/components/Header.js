import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png'

function Header() {
  const navigation = useRef();

  function clickHandler() {
    navigation.current.classList.toggle('active');
  }

  return (
    <header>
      <div className='container'>
        {/* <div className='logo'>
          <Link to='/v1'>LOGO.</Link>
        </div> */}
        <div className='logo'>
            <Link to='/v1'>
              <img src={logo} alt='logo'></img>
            </Link>
        </div>
        <div className='toggler' onClick={clickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className='navbar'>
          <ul className='navbar__menu-items' ref={navigation}>
            <li>
              <Link to='/about'>Apie mus</Link>
            </li>
            <li>
              <Link to='/faq'>D.U.K</Link>
            </li>
            <li>
              <Link to='/carrer'>Karjera</Link>
            </li>
            <li>
                <Link to='/admin'>Prisijungti</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
