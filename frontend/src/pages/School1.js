import React from 'react';
import styles from './Schools.module.css'
import school1 from '../assets/images/school1.jpg';

function School1() {
    return (
        <main className={styles.school}>
            <div className={styles.container}>
                <div className={styles.school_info}>
                    <h1>Anykščių muzikos mokykla</h1>
                    <div className={styles.school_text}>
                        <img src={school1}></img>
                        <section>
                            <p>Kiekvieną rugpjūtį vykstančio Tarptautinio vargonų muzikos festivalio pradžią nulėmė galingų vargonų iš Didžiosios Britanijos parvežimas į Šv. Mato bažnyčią 1998 metų rudenį bei siekis simboliškai pratęsti istorinę sąsają tarp Anykščių ir Seinų (Lenkija), prisimenant, kad 1897 metais Seinų vyskupu tapo iškiliausia Anykščių krašto asmenybė Antanas Baranauskas. </p>
                            <p>1999 metais vargonai buvo baigti montuoti, prasidėjo kasmetiniai vargonų muzikos festivaliai. Kaip rašoma Anykščių Šv. Mato parapijos interneto svetainėje: „Kiekvienais metais stengiamasi praplėsti festivalio veiklas. Nuo 2014 metų festivalį rengiant kartu su Všį „Prasmingas garsas“ (direktorius Stanislovas Aglinskas), prasiplėtė jo veiklos“. Festivalis išsiplėtė įvairiomis prasmėmis: dabar jo koncertai vyksta skirtingose Anykščių krašto bažnyčiose, o šalia vargonų ėmė skambėti vokalinė ir instrumentinė muzika, kurią atlieka labai žymūs bei dar visai jauni muzikos atlikėjai.</p>
                            <p>Šiame festivalyje yra dalyvavusios ir mūsų mokyklos dvi mokytojos: Simona Liamo (vokalas) ir Lolita Liamo (vargonai).</p>
                        </section>
                    </div>
                </div>
                <div className={styles.school_contacts}>
                    <h2>Kontaktai</h2>
                    <h3>Anykščių meno mokykla</h3>
                    <p><span>Adresas:</span> J. Biliūno g., 21, Anykščiai, Lietuva, LT29111</p>
                    <p><span>El. paštas:</span> anyksciumm@gmail.com</p>
                </div>
            </div>
            
        </main>
    )
}

export default School1
