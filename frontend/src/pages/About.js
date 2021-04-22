import React from "react";
import aboutUs from "../assets/images/aboutUs.png";
import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about_us}>
          <div className={styles.headline}>
            <h1>Kas mes?</h1>
            <p>
              Mes esame keturių žmonių komanda, šiuo metu einanti pažengusiųjų
              Front End studijų kursą Code Academy. Gavome komandinę užduotį,
              suprogramuoti platformą kurioje bus galima rasti visų Lietuvoje
              esančių švietimo įstaigų informaciją.
            </p>
            <p>
              Mūsų platforma sukurta su „React“ - atvirojo kodo „Front End“
              „JavaScript“ biblioteka, skirta kurti vartotojo sąsajas ar
              vartotojo sąsajos komponentus. Platformos stilius sukūrėme su
              "CSS" - kalba, skirta nusakyti kita struktūrine kalba aprašyto
              dokumento vaizdavimą. Platformos "galinė" arba "Back End" dalis
              paleista naudojant „Node.js“ - atviro kodo, daugiaplatformė,
              „JavaScript“ vykdymo laiko aplinka, veikianti V8 variklyje ir
              vykdanti „JavaScript“ kodą ne žiniatinklio naršyklėje. Taip pat,
              naudojame "Express" - „Node.js“ internetinės programos pagrindas,
              išleistas kaip nemokama ir atviro kodo programinė įranga pagal MIT
              licenciją, bei „MongoDB“ - prieinama šaltinio duomenų bazių
              programa, orientuota į įvairias platformas. Klasifikuojamas kaip
              NoSQL duomenų bazės programa, „MongoDB“ naudoja į JSON panašius
              dokumentus su pasirinktinėmis schemomis.
            </p>
          </div>
          <div className={styles.featured_image}>
            <img src={aboutUs} alt="about"></img>
          </div>
        </div>
        <div className={styles.responses}>
          <div className={styles.response}>
            <p>
              " Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. "
            </p>
          </div>
          <div className={styles.response}>
            <p>
              " Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. "
            </p>
          </div>
          <div className={styles.response}>
            <p>
              " Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. "
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
