import React from 'react';
import aboutUs from '../assets/images/notFound.png';
import styles from './NotFound.module.css';


function NotFound() {
    return (
        <main className={styles.notFound}>
            <div className={styles.container}>
                <h1><span>404 ERROR </span>PAGE NOT FOUND</h1>
                <img src={aboutUs} alt='about' className={styles.notFound_img}></img>
            </div>
        </main>
    )
}

export default NotFound
