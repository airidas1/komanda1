import React, { useState, useEffect, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
// Style
import styles from "./Home.module.css";
import { useSpring, animated } from "react-spring";
// Images
import heroImg from "../assets/images/hero-img.png";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";

// Components
import Button from "../components/Button";
import InfoBox from "../components/InfoBox";

import { HeaderContext } from '../App'

function Home() {
  const headerState = useContext(HeaderContext)
  // Springas
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });

  const [savivaldybes, setSavivaldybes] = useState([]);
  const [grupe, setGrupe] = useState([]);
  const [tipas, setTipas] = useState([]);
  const [redirect, setRedirect] = useState(false);
  

  const [postObj, setPostObj] = useState({
    Pavadinimas: "",
    Grupė: "",
    Savivaldybė: "",
    "Pagrindinis tipas": "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/v1/getAllData`).then((res) => {
      /* Fetching ALL data also fitering all UNIQUE criteria for filters used in data filtration */
      setSavivaldybes(
        Array.from(new Set(res.data.map((el) => el["Savivaldybė"])))
      );
      setGrupe(Array.from(new Set(res.data.map((el) => el["Grupė"]))));
      setTipas(
        Array.from(new Set(res.data.map((el) => el["Pagrindinis tipas"])))
      );
    });
   
    headerState.setHeader(true)

  }, [headerState]);


  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/results",
          state: { object: postObj },
        }}
      />
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setRedirect("/results");
  }
  return (
    <animated.main style={props}>
      <main className={styles.home}>
        <div className={styles.home_container}>
          <div className={styles.filter}>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <input
                placeholder="Savivaldybė"
                className={styles["form-input"]}
                type="text"
                list="post-sav"
                onChange={(e) =>
                  setPostObj({ ...postObj, Savivaldybė: e.target.value })
                }
              />
              <datalist id="post-sav">
                {savivaldybes
                  ? savivaldybes.map((item, key) => {
                      return <option key={key} value={item} />;
                    })
                  : null}
              </datalist>
              <input
                placeholder="Grupė"
                className={styles["form-input"]}
                type="text"
                list="post-gr"
                onChange={(e) =>
                  setPostObj({ ...postObj, Grupė: e.target.value })
                }
              />
              <datalist id="post-gr">
                {grupe
                  ? grupe.map((item, key) => {
                      return <option key={key} value={item} />;
                    })
                  : null}
              </datalist>
              <input
                placeholder="Pagrindinis tipas"
                className={styles["form-input"]}
                type="text"
                list="post-pgr"
                onChange={(e) =>
                  setPostObj({
                    ...postObj,
                    "Pagrindinis tipas": e.target.value,
                  })
                }
              />
              <datalist id="post-pgr">
                {tipas
                  ? tipas.map((item, key) => {
                      return <option key={key} value={item} />;
                    })
                  : null}
              </datalist>
              <input
                placeholder="Pavadinimas"
                className={styles["form-input"]}
                type="text"
                onChange={(e) =>
                  setPostObj({ ...postObj, Pavadinimas: e.target.value })
                }
              />
              <button type="submit">Noriu mokytis!</button>
            </form>
          </div>
          <div className={styles.hero}>
            <div className={styles.hero_text}>
              <h1>Tavo karjeros ir tobulėjimo galimybės Lietuvoje!</h1>
              <p>
                Lietuvoje įgytos profesinės kvalifikacijos pripažįstamos
                užsienio valstybėse. Kasmet studijuoti ar stažuotis į užsienio
                šalis išvyksta per 1 000 studentų ir dėstytojų.
              </p>
              <Link to={'/facts'}>
                <Button title={'Sužinok daugiau'} />
              </Link>
            </div>
            <div className={styles.hero_img}>
              <img src={heroImg} alt="heroIMG" className={styles.hero_image} />
            </div>
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

        <div className={styles.schools_wrapper}>
          <h2>Neformaliojo švietimo TOP įstaigos</h2>
          <div className={styles.schools}>
            <div className={styles.school}>
              <h3>Anykščių muzikos mokykla</h3>
              <p>
                Moderni ugdymo institucija, tenkinanti vaikų ir jaunimo
                muzikinio ugdymo ir saviraiškos poreikius, visuomenei ir šeimai
                atviras kultūros židinys.
              </p>
              <Link to={"/school1"}>
                <button>Skaityti!</button>
              </Link>
            </div>
            <div className={styles.school}>
              <h3>Vilniaus teniso akademija</h3>
              <p>
                Vilniaus teniso akademija yra didžiausia ir aukščiausio lygio
                Lietuvos teniso mokykla, kurioje šio nuostabaus sporto paslaptis
                pažįsta daugiau nei pusė tūkstančio vaikų.
              </p>
              <Link to={"/school2"}>
                <button>Skaityti!</button>
              </Link>
            </div>
            <div className={styles.school}>
              <h3>Lietuvos šachmatų mokykla</h3>
              <p>
                Lietuvos šachmatų mokykla (LŠM) - ne pelno siekianti
                organizacija, kurios pagrindiniai tikslai yra visoje Lietuvoje
                visų amžiaus grupių asmenis mokyti žaisti šachmatais.
              </p>
              <Link to={"/school3"}>
                <button>Skaityti!</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </animated.main>
  );
}

export default Home;
