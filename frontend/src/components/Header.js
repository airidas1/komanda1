import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/images/logo.png";

function Header() {
  const navigation = useRef();

  function clickHandler() {
    navigation.current.classList.toggle("active");
  }

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/v1">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className={styles.toggler} onClick={clickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navbar__menu_items} ref={navigation}>
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
              <Link to="/carrer">Karjera</Link>
            </li>
            <li>
              <Link to="/admin">Prisijungti</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
