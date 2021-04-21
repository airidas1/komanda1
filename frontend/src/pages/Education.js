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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et non
            voluptas facilis necessitatibus excepturi mollitia magnam rerum enim
            optio, aspernatur incidunt asperiores eius, ipsum porro atque
            ducimus ipsam ab expedita? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quidem nemo rerum ab placeat esse similique ipsam
            aliquam amet illo quos. Dolorum quod blanditiis impedit voluptatum,
            consectetur explicabo maxime autem. Quis?
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
          <h1>Formalus švietimas Lietuvoje</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et non
            voluptas facilis necessitatibus excepturi mollitia magnam rerum enim
            optio, aspernatur incidunt asperiores eius, ipsum porro atque
            ducimus ipsam ab expedita? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odio aut fugit, quisquam iure similique rem ex
            dolor nostrum accusamus quos!
          </p>
        </article>
      </section>

      <section className={styles["section"]}>
        <article className={styles["article"]}>
          <h1>Ne formalus švietimas Lietuvoje</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et non
            voluptas facilis necessitatibus excepturi mollitia magnam rerum enim
            optio, aspernatur incidunt asperiores eius, ipsum porro atque
            ducimus ipsam ab expedita?
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
