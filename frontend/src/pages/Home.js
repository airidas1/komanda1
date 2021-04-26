import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// Style
import styles from "./Home.module.css";
// Images
import heroImg from "../assets/images/hero-img.png";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";

// Components
import Button from "../components/Button";
import InfoBox from "../components/InfoBox";

function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.home_container}>
        <div className={styles.filter}>
          <form className={styles.form}>
            <input type="text" placeholder="Miestas" value="Miestas" />
            <input type="text" placeholder="Grupė" value="Grupė" />
            <input
              type="text"
              placeholder="Pagrindinis tipas"
              value="Pagrindinis tipas"
            />
            <input type="text" placeholder="Kalba" value="Kalba" />
            <button type="submit">Noriu mokytis!</button>
          </form>
        </div>
        <div className={styles.hero}>
          <div className={styles.hero_text}>
            <h1>Tavo karjeros ir tobulėjimo galimybės Lietuvoje!</h1>
            <p>
              Lietuvoje įgytos profesinės kvalifikacijos pripažįstamos užsienio
              valstybėse. Kasmet studijuoti ar stažuotis į užsienio šalis
              išvyksta per 1 000 studentų ir dėstytojų.
            </p>
            <Button title={"Sužinok daugiau"} href={"#"} />
          </div>
          <div className={styles.hero_img}>
            <img src={heroImg} alt="heroIMG" className={styles.hero_image} />
          </div>
        </div>
        <div className={styles.additional_info}>
          <h2>Faktai apie mokslą Lietuvoje</h2>
          <div className={styles.info_box_container}>
            <InfoBox
              text={
                "Lietuvoje studijos vykdomos pagal laipsnį suteikiančias ir laipsnio nesuteikiančias studijų programas. Jos yra dviejų rūšių – koleginės ir universitetinės."
              }
              icon={icon1}
            />
            <InfoBox
              text={
                "Gerai besimokantys studentai aukštųjų mokyklų nustatyta tvarka gali gauti skatinamąsias stipendijas. Vyriausybės nustatytus kriterijus atitinkantys studentai taip pat gali gauti socialines stipendijas."
              }
              icon={icon2}
            />
            <InfoBox
              text={
                "Studijų metai dalijami į semestrus ir atostogų laikotarpius. Studijų metų, semestrų pradžią ir pabaigą, atostogų laikotarpius nustato aukštosios mokyklos. Vasaros metu studentams skiriamos ne trumpesnės kaip vieno mėnesio nepertraukiamos atostogos."
              }
              icon={icon3}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
