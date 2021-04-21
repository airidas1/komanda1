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
      <h1>Kaip išsirinkti geriausią įstaigą Lietuvoje?</h1>
      <section className={styles.section}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quasi
          quo possimus? Velit voluptatum neque nemo tenetur pariatur deserunt id
          sequi ea consectetur consequatur, vero nobis labore aperiam ad
          delectus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          obcaecati perspiciatis optio asperiores expedita officiis excepturi
          esse amet eveniet necessitatibus?
        </p>
        <hr />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quasi
          quo possimus? Velit voluptatum neque nemo tenetur pariatur deserunt id
          sequi ea consectetur consequatur, vero nobis labore aperiam ad
          delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis deserunt quas odio veniam aperiam dolorem at consectetur
          exercitationem sint. Modi.
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
