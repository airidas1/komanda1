import React from 'react'
import aboutUs from '../assets/images/aboutUs.png'
import styles from './About.module.css'

function About() {
    return (
        <main className={styles.about}>
            <div className={styles.container}>
                <div className={styles.about_us }>
                    <div className={styles.headline}>
                        <h1>Kas mes?</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                            Lorem Ipsum is simply dummy text of.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s. 
                            Lorem Ipsum has been the industry's standard dummy text ever
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>
                    <div className={styles.featured_image}>
                        <img src={aboutUs} alt='about'></img>
                    </div>
                </div>
                <div className={styles.responses}>
                    <div className={styles.response}>
                        <p>" Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s. "</p>
                    </div>
                    <div className={styles.response}>
                        <p>" Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s. "</p>
                    </div>
                    <div className={styles.response}>
                        <p>" Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s. "</p>
                    </div>
                </div>
                
            </div>
        </main>
    )
}

export default About
