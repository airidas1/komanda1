import React, { useRef, useEffect } from 'react';
import './Footer.css'

function Footer() {
    const date = useRef();

    useEffect(() => {
      date.current.innerText = new Date().getFullYear();
    });

    return (
        <footer>
            &copy; <span ref={date}></span> All rights reserved | <span className='team-name'>KOMANDA1</span>
        </footer>
    );
}

export default Footer
