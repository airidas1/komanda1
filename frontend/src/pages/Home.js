import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
// Style
import styles from './Home.module.css';
// Images
import heroImg from '../assets/images/hero-img.png';
import icon1 from '../assets/images/icon1.svg';
import icon2 from '../assets/images/icon2.svg';
import icon3 from '../assets/images/icon3.svg';

// Components
import Button from '../components/Button';
import InfoBox from '../components/InfoBox';
import Results from './Results';

function Home() {
  const [savivaldybes, setSavivaldybes] = useState([]);
  const [grupe, setGrupe] = useState([]);
  const [tipas, setTipas] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const [postObj, setPostObj] = useState({
    Pavadinimas: '',
    Grupė: '',
    Savivaldybė: '',
    'Pagrindinis tipas': '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/v1/getAllData`).then((res) => {
      /* Fetching ALL data also fitering all UNIQUE criteria for filters used in data filtration */
      setSavivaldybes(
        Array.from(new Set(res.data.map((el) => el['Savivaldybė'])))
      );
      setGrupe(Array.from(new Set(res.data.map((el) => el['Grupė']))));
      setTipas(
        Array.from(new Set(res.data.map((el) => el['Pagrindinis tipas'])))
      );
    });
  }, []);

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: '/results',
          state: { object: postObj },
        }}
      />
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setRedirect('/results');
  }

  return (
    <main className={styles.home}>
      <div className={styles.home_container}>
        <div className={styles.filter}>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <input
              placeholder='Savivaldybė'
              className={styles['form-input']}
              type='text'
              list='post-sav'
              onChange={(e) =>
                setPostObj({ ...postObj, Savivaldybė: e.target.value })
              }
            />
            <datalist id='post-sav'>
              {savivaldybes
                ? savivaldybes.map((item, key) => {
                    return <option key={key} value={item} />;
                  })
                : null}
            </datalist>
            <input
              placeholder='Grupė'
              className={styles['form-input']}
              type='text'
              list='post-gr'
              onChange={(e) =>
                setPostObj({ ...postObj, Grupė: e.target.value })
              }
            />
            <datalist id='post-gr'>
              {grupe
                ? grupe.map((item, key) => {
                    return <option key={key} value={item} />;
                  })
                : null}
            </datalist>
            <input
              placeholder='Pagrindinis tipas'
              className={styles['form-input']}
              type='text'
              list='post-pgr'
              onChange={(e) =>
                setPostObj({ ...postObj, 'Pagrindinis tipas': e.target.value })
              }
            />
            <datalist id='post-pgr'>
              {tipas
                ? tipas.map((item, key) => {
                    return <option key={key} value={item} />;
                  })
                : null}
            </datalist>
            <input
              placeholder='Pavadinimas'
              className={styles['form-input']}
              type='text'
              onChange={(e) =>
                setPostObj({ ...postObj, Pavadinimas: e.target.value })
              }
            />
            <button type='submit'>Noriu mokytis!</button>
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
            <Button title={'Sužinok daugiau'} href={'#'} />
          </div>
          <div className={styles.hero_img}>
            <img src={heroImg} alt='heroIMG' className={styles.hero_image} />
          </div>
        </div>
        <div className={styles.additional_info}>
          <h2>Kažkokie faktai apie mokslą Lietuvoje</h2>
          <div className={styles.info_box_container}>
            <InfoBox
              text={
                'Lietuvoje studijos vykdomos pagal laipsnį suteikiančias ir laipsnio nesuteikiančias studijų programas. Jos yra dviejų rūšių – koleginės ir universitetinės.'
              }
              icon={icon1}
            />
            <InfoBox
              text={
                'Gerai besimokantys studentai aukštųjų mokyklų nustatyta tvarka gali gauti skatinamąsias stipendijas. Vyriausybės nustatytus kriterijus atitinkantys studentai taip pat gali gauti socialines stipendijas.'
              }
              icon={icon2}
            />
            <InfoBox
              text={
                'Studijų metai dalijami į semestrus ir atostogų laikotarpius. Studijų metų, semestrų pradžią ir pabaigą, atostogų laikotarpius nustato aukštosios mokyklos. Vasaros metu studentams skiriamos ne trumpesnės kaip vieno mėnesio nepertraukiamos atostogos.'
              }
              icon={icon3}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
