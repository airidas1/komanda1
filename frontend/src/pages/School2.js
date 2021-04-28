import React from 'react';
import styles from './Schools.module.css'
import school2 from '../assets/images/school2.png';

function School2() {
    return (
        <main className={styles.school}>
            <div className={styles.container}>
                <div className={styles.school_info}>
                    <h1>Vilniaus teniso akademija</h1>
                    <div className={styles.school_text}>
                        <img src={school2} alt={"SchoolIMG"} className={styles.school2_img}></img>
                        <section>
                            <p>Birželio viduryje Vilniuje Lietuvos moterų teniso rinktinė, su dar 26 valstybių komandomis, stos į kovą dėl dviejų kelialapių į antrąją Billie Jean King taurės (buv. FedCup varžybos) grupę. Rinktinės kapitonė Edita Liachovičiūtė mano, kad Lietuvos teniso sąjungos iškeltas tikslas – iškovoti teisę kitąmet žaisti aukštesnėje turnyro grupėje – yra pasiekiamas. Tačiau tam, kad jis būtų įgyvendintas, prireiks ne tik kovos iš visų jėgų, tačiau ir šiek tiek sėkmės. </p>
                            <p>„Kol kas tik dėlioju pradinius mūsų komandos eskizus. Lyderės vaidmuo yra numatytas aukščiausią reitingą iš mūsiškių dabar turinčiai Justinai Mikulskytei. Norą jungtis prie komandos taip pat išsakė į profesionalų tenisą po studijų JAV grįžti siekianti Akvilė Paražinskaitė. Manau, kad jos ir turėtų būti smogiamoji mūsų rinktinės jėga. Taip pat į komandą kviesiu bent keletą perspektyviausių jaunųjų mūsų tenisininkių. Konkrečių pavardžių minėti dar nenoriu. Kaip tik šiuo metu vyksta pokalbiai su merginomis ir jų treneriais. Kita vertus, reikia suvokti tai, kad Vilniuje mūsų lauks nelengvas bent 5 mačų maratonas. Ir patekti į antrąją Billie Jean King varžybų grupę tik lyderių pastangomis gali būti labai sunku. Mums reikės kiekvienos rinktinės žaidėjos indėlio“, – sako E. Liachovičiūtė. </p>
                            <p>Lietuvos teniso mėgėjai palaikyti savo komandos birželio 15-19 d. „SEB arenoje“ vyksiančiose varžybose negalės. Dėl globalios koronaviruso pandemijos didžiausias šių metų teniso renginys šalyje vyks be žiūrovų.</p>
                        </section>
                    </div>
                </div>
                <div className={styles.school_contacts}>
                    <h2>Kontaktai</h2>
                    <h3>Vilniaus teniso akademija</h3>
                    <p><span>Adresas:</span> Ąžuolyno g. 7, Vilnius, Lietuva</p>
                    <p><span>El. paštas:</span> info@tenisoakademija.lt</p>
                </div>
            </div>
            
        </main>
    )
}

export default School2

