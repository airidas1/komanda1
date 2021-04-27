import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Facts.module.css'

function Facts() {
    return (
        <main className={styles.facts}>
            <div className={styles.container}>
                <div className={styles.facts_info}>
                    <h1>10 priežasčių kodėl verta rinktis neformalųjį mokymąsį:</h1>
                    <ol type="1">
                        <li>Taupomas laikas</li>
                        <li>Pasiruošimas prieš universitetines studijas</li>
                        <li>Praktinis mokymasis</li>
                        <li>Taupomas laikas</li>
                        <li>Taupomas laikas</li>
                        <li>Taupomas laikas</li>
                        <li>Praktinis mokymasis</li>
                        <li>Pasiruošimas prieš universitetines studijas</li>
                        <li>Taupomas laikas</li>
                        <li>Praktinis mokymasis</li>
                    </ol>
                </div>
                <div className={styles.test}>
                    <h2>Sužinok kokios studijos tau tiktų</h2>
                    <Link to={'/test'}>
                        <button>Atlik testą !</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Facts
