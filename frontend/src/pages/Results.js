import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import styles from '../pages/Admin/AdminPanel.module.css';

function Results(props) {
  /* keep count of current page used to display data */
  const [page, setPage] = useState(1);
  /* gather all data */
  const [fetchAllData, setFetchAllData] = useState([]);
  /* filtered data */
  const [displayData, setDisplayData] = useState([]);
  /* filtered AND paginated data to cope with big ammounts of information */
  const [paginatedData, setPaginatedData] = useState([]);

  const [savivaldybes, setSavivaldybes] = useState([]);
  /* used to gather all unique groups of fetchAllData */
  const [grupe, setGrupe] = useState([]);
  /* used to gather all unique types of fetchAllData */
  const [tipas, setTipas] = useState([]);
  // Getting data from home page user selection
  const [arrivingObj, setArrivingObj] = useState(props.location.state.object);

  const [firstLoad, setFirstLoad] = useState(true);

  const submitButton = useRef();

  const [filtered, setFiltered] = useState(true);

  useEffect(
    (e) => {
      axios.get(`http://localhost:3001/v1/getAllData`).then((res) => {
        setFetchAllData(res.data);
        setSavivaldybes(
          Array.from(new Set(res.data.map((el) => el['Savivaldybė'])))
        );
        setGrupe(Array.from(new Set(res.data.map((el) => el['Grupė']))));
        setTipas(
          Array.from(new Set(res.data.map((el) => el['Pagrindinis tipas'])))
        );
        if (filtered) {
          submitButton.current.click();
          console.log(submitButton.current);
          setFiltered(false);
        }
      });

      /* Actively listening for changes(check dependency arr) in filtered data to decide which page to display for the user */
      displayData
        ? setPaginatedData(displayData.slice((page - 1) * 20, page * 20))
        : console.log('asd');
    },
    [displayData, page]
  );

  const pageInputHandler = (e) => {
    /* if the user presses enter and the page is valid: scroll to top and display paginated data for the user */
    if (e.key === 'Enter') {
      console.log('paginated page');
      if (
        +e.target.value >= 1 &&
        e.target.value <= Math.ceil(displayData.length / 20)
      ) {
        window.scrollTo(0, 0);
        setPage(+e.target.value);
        return page === e.target.value
          ? setPaginatedData(() => {
              return displayData.slice((page - 1) * 20, page * 20);
            })
          : null;
      }
    }
  };

  const handleFilterSubmit = (e) => {
    /* Handle data filtration and set data arrays for pagination to use the information
        NOTE: DATA GATHERED BY THE FILTER IS USED IN useEffect *****NOT HERE*****, DATA GATHERED HERE IS ONLY TO BE DISPLAYED LATER
    */
    /* Prevent reload on submit and prepping array for DB info(resetting), also setting page to 1 in case it wasn't 1(if page isnt 1 and there is only 1 page there would obviously be nothing to paginate) before */
    e.preventDefault();
    setDisplayData([]);
    console.log(arrivingObj);
    if (page !== 1) setPage(1);
    /* Filter for when the user is ONLY searching via keyword */
    if (
      arrivingObj['Pavadinimas'] &&
      !arrivingObj['Grupė'] &&
      !arrivingObj['Pagrindinis tipas'] &&
      !arrivingObj['Savivaldybė']
    ) {
      setDisplayData(() => {
        let condition = new RegExp(arrivingObj['Pavadinimas'].toLowerCase());
        return fetchAllData.filter((el) => {
          return condition.test(el['Pavadinimas'].toLowerCase());
        });
      });
      /* Filter for when the user is searching by both: ALL the select filters AND keyword */
    } else if (
      arrivingObj['Pavadinimas'] &&
      arrivingObj['Grupė'] &&
      arrivingObj['Pagrindinis tipas'] &&
      arrivingObj['Savivaldybė']
    ) {
      setDisplayData(() => {
        let condition = new RegExp(arrivingObj['Pavadinimas'].toLowerCase());
        return fetchAllData
          .filter((el) => {
            return condition.test(el['Pavadinimas'].toLowerCase());
          })
          .filter((el, index, arr) => {
            for (let key in arrivingObj) {
              if (key === 'Pavadinimas') continue;
              if (el[key] !== arrivingObj[key]) return false;
            }
            return true;
          });
      });
      /* filter for when the user is searching ONLY by select filters */
    } else if (
      (arrivingObj['Grupė'] ||
        arrivingObj['Pagrindinis tipas'] ||
        arrivingObj['Savivaldybė']) &&
      arrivingObj['Pavadinimas']
    ) {
      setDisplayData(() => {
        let condition = new RegExp(arrivingObj['Pavadinimas'].toLowerCase());
        return fetchAllData
          .filter((el) => {
            return condition.test(el['Pavadinimas'].toLowerCase());
          })
          .filter((el, index, arr) => {
            for (let key in arrivingObj) {
              if (arrivingObj[key] === '' || key === 'Pavadinimas') continue;
              if (el[key] !== arrivingObj[key]) {
                return false;
              }
            }
            return true;
          });
      });
      /* Filter for when the user is searching by one or more select filters AND via keyword */
    } else if (
      (arrivingObj['Grupė'] ||
        arrivingObj['Pagrindinis tipas'] ||
        arrivingObj['Savivaldybė']) &&
      !arrivingObj['Pavadinimas']
    ) {
      setDisplayData(() => {
        return fetchAllData.filter((el) => {
          for (let key in arrivingObj) {
            if (arrivingObj[key] === '' || key === 'Pavadinimas') continue;
            if (el[key] !== arrivingObj[key]) {
              return false;
            }
          }
          return true;
        });
      });
    }
  };

  return (
    <div>
      {console.log(displayData)}
      <div className={styles['filter-form-wrapper']}>
        <form className={styles['filter-form']}>
          <div className={styles['form-control']}>
            <label className={styles['form-label']} htmlFor='savivaldybe'>
              Savivaldybe
            </label>
            <input
              className={styles['form-input']}
              type='text'
              list='data-sav'
              value={
                arrivingObj['Savivaldybė'] ? arrivingObj['Savivaldybė'] : null
              }
              onChange={(e) =>
                setArrivingObj({ ...arrivingObj, Savivaldybė: e.target.value })
              }
            />
            <datalist id='data-sav'>
              {savivaldybes
                ? savivaldybes.map((item, key) => {
                    return <option key={key} value={item} />;
                  })
                : null}
            </datalist>
          </div>
          <div className={styles['form-control']}>
            <label className={styles['form-label']} htmlFor='pavadinimas'>
              Pavadinimas
            </label>
            <input
              className={styles['form-input']}
              type='text'
              value={
                arrivingObj['Pavadinimas'] ? arrivingObj['Pavadinimas'] : null
              }
              onChange={(e) =>
                setArrivingObj({ ...arrivingObj, Pavadinimas: e.target.value })
              }
            />
          </div>
          <div className={styles['form-control']}>
            <label className={styles['form-label']} htmlFor='grupe'>
              Grupe
            </label>
            <input
              className={styles['form-input']}
              type='text'
              list='data-gr'
              value={arrivingObj['Grupė'] ? arrivingObj['Grupė'] : null}
              onChange={(e) =>
                setArrivingObj({ ...arrivingObj, Grupė: e.target.value })
              }
            />
            <datalist id='data-gr'>
              {grupe
                ? grupe.map((item, key) => {
                    return <option key={key} value={item} />;
                  })
                : null}
            </datalist>
          </div>
          <div className={styles['form-control']}>
            <label className={styles['form-label']} htmlFor='tipas'>
              Tipas
            </label>
            <input
              className={styles['form-input']}
              type='text'
              list='data-tipas'
              value={
                arrivingObj['Pagrindinis tipas']
                  ? arrivingObj['Pagrindinis tipas']
                  : null
              }
              onChange={(e) =>
                setArrivingObj({
                  ...arrivingObj,
                  'Pagrindinis tipas': e.target.value,
                })
              }
            />
            <datalist id='data-tipas'>
              {tipas
                ? tipas.map((item, key) => {
                    return <option key={key} value={item} />;
                  })
                : null}
            </datalist>
          </div>
          <div className={styles['filter-container']}>
            <input
              className={styles['filter-submit']}
              type='submit'
              value='Filtruoti'
              ref={submitButton}
              onClick={handleFilterSubmit}
            />
          </div>
        </form>
      </div>
      <div className={styles['output-list']}>
        {firstLoad
          ? () => {
              handleFilterSubmit();
              setFirstLoad(false);
            }
          : null}
        {/* DYNAMIC DATA IS DISPLAYED TO THE USER HERE */}
        {paginatedData.map((el) => {
          return (
            <div key={el._id} className={styles['output-item']}>
              {Object.entries(el).map(([key, value]) => {
                return (
                  <div className={styles['output-pair']}>
                    <h4 className={styles.h4}>{key}: </h4>
                    <h5 className={styles.h5}> {value}</h5>
                  </div>
                );
              })}
              <div className={styles['button-div']}>
                <button className={`${styles.button} ${styles.delete}`}>
                  Ištrinti
                </button>
                <button className={`${styles.button} ${styles.update}`}>
                  Atnaujinti
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.pagination}>
        <div className={styles['input-pagination']}>
          <input
            className={styles['input-txt']}
            type='number'
            placeholder={page}
            onKeyDown={pageInputHandler}
          />
          <h5 className={styles.pageCount}>
            /{Math.ceil(displayData.length / 20)}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Results;
