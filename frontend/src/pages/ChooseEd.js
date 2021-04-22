import React from "react";
import styles from "./ChooseEd.module.css";
import skylineImage from "../assets/images/city-skyline.jpg";
import happy from "../assets/images/happy.png";
import openBook from "../assets/images/open-book.png";
import idea from "../assets/images/idea.png";
import presentation from "../assets/images/presentation.png";

function ChooseEd() {
  return (
    <main>
      <h1>Kaip išsirinkti sau tinkamą ūgdymo programą?</h1>
      <section className={styles.section}>
        <p>
          Formalusis mokymasis, organizuojamas švietimo įstaigose, nepakankamai
          atskleidžia realaus gyvenimo fenomeną. Nėra paprasta žinias ir
          įgūdžius, įgytus tokio mokymosi metu, perkelti“ į realią socialinę
          situaciją, formaliajam mokymuisi nėra būdingas laisvas kontekstas.
        </p>
        <hr />
        <p>
          Savarankiško mokymosi procesas, kuris vyksta įvairiose aplinkose,
          tačiau pasižymi planingumu, turi tikslus, yra apribotas laike. Vyksta
          šalia švietimo ir mokymo sistemų. Valstybės pripažinti dokumentai
          neišduodami ir nesuteikiama kvalifikacija. Išduodami pažymėjimai.
        </p>
      </section>
      <hr />
      <section className={styles.infoBoxContainer}>
        <div className={styles.infoBox}>
          <img src={happy} className={styles.infoBoxImage} />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            nisi.
          </p>
          <p>✔ Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className={styles.infoBox}>
          <img src={openBook} className={styles.infoBoxImage} />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            nisi.
          </p>
          <p>✔ Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className={styles.infoBox}>
          <img src={idea} className={styles.infoBoxImage} />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            nisi.
          </p>
          <p>✔ Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className={styles.infoBox}>
          <img src={presentation} className={styles.infoBoxImage} />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            nisi.
          </p>
          <p>✔ Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </section>
    </main>
  );
}

export default ChooseEd;
