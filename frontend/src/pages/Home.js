import React, { useState } from "react";
import styles from "./Home.module.css";
import heroImg from "../assets/images/hero-img.png";
import universityIcon from "../assets/images/university-icon.png";
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
            <img src={heroImg} alt="hero-image" className={styles.hero_image} />
          </div>
        </div>
        <div className={styles.additional_info}>
          <h2>Kažkokie faktai apie mokslą Lietuvoje</h2>
          <div className={styles.info_box_container}>
            <InfoBox
              text={
                "Lietuvoje studijos vykdomos pagal laipsnį suteikiančias ir laipsnio nesuteikiančias studijų programas. Jos yra dviejų rūšių – koleginės ir universitetinės."
              }
              icon={universityIcon}
            />
            <InfoBox
              text={
                "Gerai besimokantys studentai aukštųjų mokyklų nustatyta tvarka gali gauti skatinamąsias stipendijas. Vyriausybės nustatytus kriterijus atitinkantys studentai taip pat gali gauti socialines stipendijas."
              }
              icon={universityIcon}
            />
            <InfoBox
              text={
                "Studijų metai dalijami į semestrus ir atostogų laikotarpius. Studijų metų, semestrų pradžią ir pabaigą, atostogų laikotarpius nustato aukštosios mokyklos. Vasaros metu studentams skiriamos ne trumpesnės kaip vieno mėnesio nepertraukiamos atostogos."
              }
              icon={universityIcon}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
