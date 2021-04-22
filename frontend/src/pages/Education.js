import React from "react";
import educationPhoto1 from "../assets/images/education-photo-1.jpg";
import educationPhoto2 from "../assets/images/education-photo-2.jpg";
import educationPhoto3 from "../assets/images/education-photo-3.jpg";
import styles from "./Education.module.css";
import { Link } from "react-router-dom";

function Education() {
  return (
    <main>
      <section className={styles["section"]}>
        <article className={styles["article"]}>
          <h1>Mokslas Lietuvoje</h1>
          <p>
            Aukštasis mokslas Lietuvoje išgyvena ne pačius lengviausius laikus –
            nors turime labai daug studentų, kas kai kuriuose viešuose
            pasisakymuose įvardinama kaip didelis valstybės potencialas, pagal
            įvairius rodiklius atsiliekame nuo daugelio šalių. Pavyzdžiui, pagal
            inovacijas esame viena iš prasčiausiai gyvuojančių šalių Europos
            Sąjungoje, ką rodo inovacijų švieslentė. „Turint 47 aukštąsias
            mokyklas Lietuvoje, reikia rasti atsakymus į labai paprastus ir tuo
            pačiu esminius konceptualius klausimus, kas yra universitetas, kas
            yra kolegija, ko valstybė tikisi iš šių institucijų formuodama
            aukštojo mokslo politiką, skirdama joms paramą, keldama tikslus
            aukštajam mokslui“, - sako MOSTA direktorė Jurgita Petrauskienė.
          </p>
        </article>
        <div className={styles["img_container"]}>
          <img src={educationPhoto1} className={styles["educationPhoto"]} />
        </div>
      </section>

      <section className={styles["help"]}>
        <div className="toChooseEd">
          <Link to="/choose">Nežinai kurią įstaigą rinktis?</Link>
        </div>
      </section>

      <section className={styles["section"]}>
        <div className={styles["img_container"]}>
          <img src={educationPhoto2} className={styles["educationPhoto"]} />
        </div>
        <article className={styles["article"]}>
          <h1>Formalus ugdymas Lietuvoje</h1>
          <p>
            Ūgdymas, vykdomas pagal Lietuvos Respublikos švietimo ir mokslo
            ministerijos Studijų ir mokymo programų registre įregistruotas
            formaliojo profesinio mokymo programas, kurį sėkmingai baigusieji
            gauna valstybės pripažįstamą diplomą arba pažymėjimą (kvalifikacijos
            pažymėjimą, profesinio mokymo pažymėjimą ar kitą kvalifikacijos ir
            mokymosi pasiekimų dokumentą). Formaliojo profesinio mokymo programa
            yra skirta įgyti kvalifikacijai, įtrauktai į Profesinių standartų ir
            kvalifikacijų registrą.
          </p>
        </article>
      </section>

      <section className={styles["section"]}>
        <article className={styles["article"]}>
          <h1>Neformalus ugdymas Lietuvoje</h1>
          <p>
            Neformalusis ugdymas yra kryptinga veikla, kuria, plėtojant žmogaus
            asmenines, socialines ir edukacines kompetencijas, siekiama ugdyti
            sąmoningą asmenybę, sugebančią atsakingai ir kūrybingai spręsti savo
            problemas ir aktyviai dalyvauti visuomenės gyvenime. Neformaliajame
            ugdyme derinami asmeniniai, grupės ir temos tikslai. Ugdyme derinami
            įvairūs metodai, atliepiantis emocinius, protinius ir fizinius
            poreikius, o rezultatai pasiekiami pirmiausia dalyvaujančių aktyvumo
            dėka ir skirant laiko asmeninio patyrimo įvardinimui ir suvokimu
          </p>
        </article>
        <div className={styles["img_container"]}>
          <img src={educationPhoto3} className={styles["educationPhoto"]} />
        </div>
      </section>
    </main>
  );
}

export default Education;
