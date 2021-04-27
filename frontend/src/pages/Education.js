import React from "react";
import educationPhoto1 from "../assets/images/education-photo-1.jpg";
import educationPhoto2 from "../assets/images/education-photo-2.jpg";
import educationPhoto3 from "../assets/images/education-photo-3.jpg";
import styles from "./Education.module.css";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

function Education() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  const articleProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });
  const rightImgProps = useSpring({
    to: { marginRight: 0 },
    from: { marginRight: -3000 },
    delay: 1500,
  });
  const leftImgProps = useSpring({
    to: { marginLeft: 0 },
    from: { marginLeft: -3000 },
    delay: 2000,
  });
  return (
    <animated.div style={props}>
      <main>
        <section className={styles["section"]}>
          <article className={styles["article"]}>
            <h1>Mokslas Lietuvoje</h1>
            <animated.div style={articleProps}>
              <p>
                Lietuvos švietimo sistema apima formalųjį švietimą (pradinį,
                pagrindinį, vidurinį ugdymą, formalųjį profesinį mokymą,
                aukštojo mokslo studijas), neformalųjį švietimą (ikimokyklinį,
                priešmokyklinį, kitą neformalųjį vaikų (taip pat formalųjį
                švietimą papildantį ugdymą) ir suaugusiųjų švietimą),
                savišvietą, švietimo pagalbą (profesinį orientavimą, švietimo
                informacinę, psichologinę, socialinę pedagoginę, specialiąją
                pedagoginę ir specialiąją pagalbą, sveikatos priežiūrą
                mokykloje, konsultacinę, mokytojų kvalifikacijos tobulinimo ir
                kitą pagalbą). Aukštasis mokslas Lietuvoje išgyvena ne pačius
                lengviausius laikus – nors turime labai daug studentų, kas kai
                kuriuose viešuose pasisakymuose įvardinama kaip didelis
                valstybės potencialas, pagal įvairius rodiklius atsiliekame nuo
                daugelio šalių. Pavyzdžiui, pagal inovacijas esame viena iš
                prasčiausiai gyvuojančių šalių Europos Sąjungoje, ką rodo
                inovacijų švieslentė.
              </p>
            </animated.div>
          </article>
          <div className={styles["img_container"]}>
            <animated.div style={rightImgProps}>
              <img src={educationPhoto1} className={styles["educationPhoto"]} />
            </animated.div>
          </div>
        </section>

        <section className={styles["help"]}>
          <div className="toChooseEd">
            <Link to="/choose">Nežinai kurią įstaigą rinktis?</Link>
          </div>
        </section>

        <section className={styles["section"]}>
          <div className={styles["img_container"]}>
            <animated.div style={leftImgProps}>
              <img src={educationPhoto2} className={styles["educationPhoto"]} />
            </animated.div>
          </div>
          <article className={styles["article"]}>
            <animated.div style={articleProps}>
              <h1>Formalus ugdymas Lietuvoje</h1>
              <p>
                Ūgdymas, vykdomas pagal Lietuvos Respublikos švietimo ir mokslo
                ministerijos Studijų ir mokymo programų registre įregistruotas
                formaliojo profesinio mokymo programas, kurį sėkmingai
                baigusieji gauna valstybės pripažįstamą diplomą arba pažymėjimą
                (kvalifikacijos pažymėjimą, profesinio mokymo pažymėjimą ar kitą
                kvalifikacijos ir mokymosi pasiekimų dokumentą). Formaliojo
                profesinio mokymo programa yra skirta įgyti kvalifikacijai,
                įtrauktai į Profesinių standartų ir kvalifikacijų registrą.
              </p>
            </animated.div>
          </article>
        </section>

        <section className={styles["section"]}>
          <article className={styles["article"]}>
            <animated.div style={articleProps}>
              <h1>Neformalus ugdymas Lietuvoje</h1>
              <p>
                Neformalusis ugdymas yra kryptinga veikla, kuria, plėtojant
                žmogaus asmenines, socialines ir edukacines kompetencijas,
                siekiama ugdyti sąmoningą asmenybę, sugebančią atsakingai ir
                kūrybingai spręsti savo problemas ir aktyviai dalyvauti
                visuomenės gyvenime. Neformaliajame ugdyme derinami asmeniniai,
                grupės ir temos tikslai. Ugdyme derinami įvairūs metodai,
                atliepiantis emocinius, protinius ir fizinius poreikius, o
                rezultatai pasiekiami pirmiausia dalyvaujančių aktyvumo dėka ir
                skirant laiko asmeninio patyrimo įvardinimui ir suvokimu
              </p>
            </animated.div>
          </article>
          <div className={styles["img_container"]}>
            <animated.div style={rightImgProps}>
              <img src={educationPhoto3} className={styles["educationPhoto"]} />
            </animated.div>
          </div>
        </section>
      </main>
    </animated.div>
  );
}

export default Education;
