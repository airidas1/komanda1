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
              " Aukštojo mokslo studijos yra formaliojo švietimo dalis.
              Aukštasis mokslas nėra privalomas, bet valstybė garantuoja
              aukštojo mokslo studijų prieinamumą. Aukštojo mokslo studijos
              teikiamos asmeniui, įgijusiam vidurinį išsilavinimą, tai yra,
              baigusiam 12 klasių ir gebančiam savarankiškai studijuoti."
            </p>
          </div>
          <div className={styles.response}>
            <p>
              " Vidurinis ugdymas yra formaliojo švietimo dalis. Vidurinis
              ugdymas nėra privalomas, bet jį garantuoja valstybė. Vidurinio
              ugdymo tikslas yra trejopas: padėti asmeniui įgyti bendrąjį
              dalykinį, sociokultūrinį, technologinį raštingumą; dorinę, tautinę
              ir pilietinę brandą; profesinės kompetencijos pradmenis. "
            </p>
          </div>
          <div className={styles.response}>
            <p>
              " Neformaliojo suaugusiųjų švietimo paskirtis – sudaryti sąlygas
              asmeniui mokytis visą gyvenimą, tenkinti pažinimo poreikius,
              tobulinti įgytą kvalifikaciją, įgyti papildomų kompetencijų.
              Neformalusis suaugusiųjų švietimas teikiamas kiekvienam jį
              pasirinkusiam asmeniui. Asmuo turi būti ne jaunesnis kaip 18 metų.
              Neformalųjį suaugusiųjų švietimą gali teikti visi švietimo
              teikėjai. "
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
