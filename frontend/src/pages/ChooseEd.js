import React from "react";
import styles from "./ChooseEd.module.css";
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
      <h2>Į ką reikėtų atkreipti dėmesį?</h2>
      <section className={styles.infoBoxContainer}>
        <div className={styles.infoBox}>
          <img
            src={happy}
            className={styles.infoBoxImage}
            alt="smiley face icon"
          />
          <p>
            Besimokydami, nepamirškite skirti laiko savo stiprybių/silpnybių
            pažinimui.
          </p>
          <p>
            <b>
              ✔ Savęs pažinimas padės Jums geriau suprasti save, jaustis
              laimingesniu bei žinoti kur galite pritaikyti savo gabumus.
            </b>
          </p>
        </div>
        <div className={styles.infoBox}>
          <img
            src={openBook}
            className={styles.infoBoxImage}
            alt="open book icon"
          />
          <p>
            <b>Nenustokite domėtis!</b>
          </p>
          <p>
            ✔ Šiuolaikinis pasaulis nuolatos keičiasi ir juda į priekį.
            Nenustokite domėtis, nebijokite naujovių ar visiškai nepažįstamų
            dalykų. Išbandant save naujose srityse Jūs tobulėjate!
          </p>
        </div>
        <div className={styles.infoBox}>
          <img
            src={idea}
            className={styles.infoBoxImage}
            alt="light bulb icon"
          />
          <p>Idėjos yra mūsų kuras.</p>
          <p>
            <b>
              ✔ Per daug žmonių neįvertina savo įdėjų. Užrašykite jas ir
              skirkite joms laiko. Galbūt įdėjose pastebėsite tendencijas, o tai
              gali ženkliai palengvinti apsisprendimo procesą.
            </b>
          </p>
        </div>
        <div className={styles.infoBox}>
          <img
            src={presentation}
            className={styles.infoBoxImage}
            alt="presentation icon"
          />
          <p>
            <b>Konsultacijos.</b>
          </p>
          <p>
            ✔ Visada galite išklausyti ką siūlo skirtingos švietimo įstaigos.
            Kokias studijų programos siūlomos, kokie dalykai mokomi. Tai taip
            pat gali padėti Jums apsispręsti.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ChooseEd;
