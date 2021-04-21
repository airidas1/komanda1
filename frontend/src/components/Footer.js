import React, { useRef, useEffect } from 'react';
import styles from './Footer.module.css'

function Footer() {
    const date = useRef();

    useEffect(() => {
      date.current.innerText = new Date().getFullYear();
    });

    return (
        <footer>
            &copy; <span ref={date}></span> All rights reserved | <span className={styles.team_name}>KOMANDA1</span>
        </footer>
    );
}

export default Footer
