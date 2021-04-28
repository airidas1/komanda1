import React from 'react';
import styles from './Schools.module.css'
import school3 from '../assets/images/school3.jpg';

function School3() {
    return (
        <main className={styles.school}>
            <div className={styles.container}>
                <div className={styles.school_info}>
                    <h1>Lietuvos šachmatų mokykla</h1>
                    <div className={styles.school_text}>
                        <img src={school3} alt={"SchoolIMG"}></img>
                        <section>
                            <p>Lietuvos šachmatų  mokykla (LŠM) - ne pelno siekianti organizacija, kurios pagrindiniai tikslai yra visoje Lietuvoje visų amžiaus grupių asmenis mokyti žaisti šachmatais, skatinti ir populiarinti šachmatų sportą, tikslingai, kryptingai ir kompetentingai integruoti šachmatų sportą į Lietuvos visuomenės gyvenimą, pasitelkiant mokslinę ir metodinę veiklą, šachmatų sporto pagalba, organizuojant šachmatų treniruotes, stovyklas ir kitus renginius, ugdyti ir tobulinti visuomenę Lietuvoje bei padėti visiems besidomintiems  šia sritimi siekti profesinio tobulėjimo ir bendradarbiavimo.</p>
                            <p>Lietuvos šachmatų mokykla organizuoja: <ul>
                                <li>šachmatų treniruotes mokyklose ir darželiuose;</li>
                                <li>šachmatų treniruotes suaugusiems;</li>
                                <li>šachmatų treniruotes mažose grupėse;</li>
                                <li>individualias šachmatų treniruotes;</li>
                                <li>šachmatų renginius, seminarus, kursus;</li>
                                <li>vaikų vasaros stovyklas.</li>
                                </ul></p>
                            <p>Lietuvos šachmatų mokykla yra oficialus ChessKid.com atstovas Lietuvoje. Šiuo metu metinę auksinę naryste ChessKid.com platformoje galima įsigyti su 25% nuolaida.</p>
                        </section>
                    </div>
                </div>
                <div className={styles.school_contacts}>
                    <h2>Kontaktai</h2>
                    <h3>Anykščių meno mokykla</h3>
                    <p><span>Adresas:</span> Vytauto pr. 69-2, Kaunas</p>
                    <p><span>El. paštas:</span> info@sachmatumokykla.lt</p>
                </div>
            </div>
            
        </main>
    )
}

export default School3

