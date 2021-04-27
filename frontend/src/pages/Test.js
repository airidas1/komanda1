import React from 'react';
import styles from './Test.module.css';


function Test() {
    return (
        <main className={styles.test}>
            <div className={styles.container}>
                <h1>Sužinok kokia studijų kryptis tau tinka labiausiai</h1>
                <button>Pradėti !</button>
            </div>
        </main>
    )
}

export default Test
