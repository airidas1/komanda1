import React, { useRef} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png'

function Header(props) {
  const navigation = useRef();


  function clickHandler() {
    navigation.current.classList.toggle("active");
  }

  console.log(props.url);

  return props.url === "/v1/admin/login" ||
    props.url === "/v1/admin/panel" || props.url === "/v1/admin/howto" ? null : (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/v1">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className='toggler' onClick={clickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="navbar">
          <ul className="navbar_menu" ref={navigation}>
            <li>
              <Link to="/about">Apie mus</Link>
            </li>
            <li>
              <Link to="/education">Mokslas</Link>
            </li>
            <li>
              <Link to="/faq">D.U.K</Link>
            </li>
            <li>
               <Link to='/carrer'>Karjera</Link>
             </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
