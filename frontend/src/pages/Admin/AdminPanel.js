import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import styles from "./AdminPanel.module.css";
import LOGO from "../../assets/images/logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Loader
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

function AdminPanel() {
  library.add(fas, far);
  const [redirect, setRedirect] = useState(null);
  const [page, setPage] = useState(1);

  const [fetchData, setFetchData] = useState([]);
  /* VISA DATA */
  const [fetchAllData, setFetchAllData] = useState([]);
  const [amount, setAmount] = useState(null);
  const [addPost, setAddPost] = useState(false);
  const [savivaldybes, setSavivaldybes] = useState([]);
  const [grupe, setGrupe] = useState([]);
  const [tipas, setTipas] = useState([]);
  const [filtSub, setFiltSub] = useState({});
  //   Loader
  const [isLoading, setisLoading] = useState(true);

  /* ATVAIZDUOT */
  const [displayData, setDisplayData] = useState([]);

  const pageHandler = (action) => {
    let situation = {
      inc: () => {
        window.scrollTo(0, 0);
        return page > Math.ceil(amount / 20)
          ? null
          : setPage((prevPage) => prevPage + 1);
      },
      dec: () => {
        window.scrollTo(0, 0);
        return page <= 1 ? null : setPage((prevPage) => prevPage - 1);
      },
    };
    return situation[action]();
  };

  const pageInputHandler = (e) => {
    if (e.key === "Enter") {
      if (+e.target.value >= 1 && e.target.value <= Math.ceil(amount / 20)) {
        window.scrollTo(0, 0);

        return setPage(+e.target.value);
      }
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/v1/currentAdmin", {
        headers: {
          "admin-id": localStorage.getItem("admin-id"),
        },
      })
      .then((res) => {})
      .catch((e) => {
        setRedirect("/v1/admin/login");
      });

    axios.get(`http://localhost:3001/v1/getAllData`).then((res) => {
      setSavivaldybes(
        Array.from(new Set(res.data.map((el) => el["Savivaldybė"])))
      );
      setGrupe(Array.from(new Set(res.data.map((el) => el["Grupė"]))));
      setTipas(
        Array.from(new Set(res.data.map((el) => el["Pagrindinis tipas"])))
      );
    });

    axios.get(`http://localhost:3001/v1/data?page=${page}`).then((res) => {
      setFetchData(res.data);
    });

    axios.get(`http://localhost:3001/v1/getAllData`).then((res) => {
      setAmount(res.data.length);
      setFetchAllData(res.data);
      setisLoading(false);
    });
  }, [page]);
  const handleFilterSubmit = (e) => {
    let condition = new RegExp(filtSub["Pavadinimas"]);
    e.preventDefault();
    setDisplayData([]);
    setDisplayData(
      fetchAllData.filter((el) => {
        for (let key in filtSub) {
          if (el[key] === undefined || el[key] !== filtSub[key]) {
            return false;
          }
          console.log(key);
        }
        console.log(filtSub["Pavadinimas"]);
        console.log(el["Pavadinimas"]);
        if (filtSub["Pavadinimas"] && condition.test(el["Pavadinimas"])) {
          console.log(el["Pavadinimas"]);
          return true;
        }
        return true;
      })
    );
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.ul}>
          <li>
            <Link to={"/v1"}>
              <img src={LOGO} alt="logo" className={styles.img}></img>
            </Link>
          </li>
          <li>
            <button className={styles["header-btn"]}>Logout</button>
          </li>
          <li>
            <button className={styles["header-btn"]}>
              <FontAwesomeIcon
                className={styles["fontawesome-icon"]}
                icon={["fas", "cog"]}
                size="2x"
              />
            </button>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        {/* <div className={styles['post-modal']}>
                    <div className={styles['modal-container-background']}>

                    </div>
                    <div className={styles['modal-container']}>
                        <div>
                            <form>
                               
                            </form>
                        </div>
                    </div>
                </div> */}
        <div className={styles["filter-form-wrapper"]}>
          <form className={styles["filter-form"]}>
            <div className={styles["form-control"]}>
              <label className={styles["form-label"]} htmlFor="savivaldybe">
                Savivaldybe
              </label>
              <input
                className={styles["form-input"]}
                type="text"
                list="data-sav"
                onChange={(e) =>
                  setFiltSub({ ...filtSub, Savivaldybė: e.target.value })
                }
              />
              <datalist id="data-sav">
                {savivaldybes
                  ? savivaldybes.map((item, key) => {
                      return <option key={key} value={item} />;
                    })
                  : null}
              </datalist>
            </div>
            <div className={styles["form-control"]}>
              <label className={styles["form-label"]} htmlFor="pavadinimas">
                Pavadinimas
              </label>
              <input
                className={styles["form-input"]}
                type="text"
                onChange={(e) =>
                  setFiltSub({ ...filtSub, Pavadinimas: e.target.value })
                }
              />
            </div>
            <div className={styles["form-control"]}>
              <label className={styles["form-label"]} htmlFor="grupe">
                Grupe
              </label>
              <input
                className={styles["form-input"]}
                type="text"
                list="data-gr"
                onChange={(e) =>
                  setFiltSub({ ...filtSub, Grupė: e.target.value })
                }
              />
              <datalist id="data-gr">
                {grupe
                  ? grupe.map((item, key) => {
                      return <option key={key} value={item} />;
                    })
                  : null}
              </datalist>
            </div>
            <div className={styles["form-control"]}>
              <label className={styles["form-label"]} htmlFor="tipas">
                Tipas
              </label>
              <input
                className={styles["form-input"]}
                type="text"
                list="data-tipas"
                onChange={(e) =>
                  setFiltSub({
                    ...filtSub,
                    "Pagrindinis tipas": e.target.value,
                  })
                }
              />
              <datalist id="data-tipas">
                {tipas
                  ? tipas.map((item, key) => {
                      return <option key={key} value={item} />;
                    })
                  : null}
              </datalist>
            </div>
            <div className={styles["filter-container"]}>
              <input
                className={styles["filter-submit"]}
                type="submit"
                value="Filtruoti"
                onClick={handleFilterSubmit}
              />
            </div>
          </form>
        </div>
        <div className={styles.wrapper}>
          <div className={styles["add-post"]}>
            <div className={styles["fontawesome-wrapper"]}>
              <FontAwesomeIcon
                className={styles["fontawesome-plus"]}
                icon={["fas", "plus"]}
                size="2x"
              />
            </div>
          </div>
          <div className={styles["output-list"]}>
            {displayData
              ? displayData.map((el) => {
                  return (
                    <div key={el._id} className={styles["output-item"]}>
                      {Object.entries(el).map(([key, value]) => {
                        return (
                          <div className={styles["output-pair"]}>
                            <h4 className={styles.h4}>{key}: </h4>
                            <h5 className={styles.h5}> {value}</h5>
                          </div>
                        );
                      })}
                      <div className={styles["button-div"]}>
                        <button className={`${styles.button} ${styles.delete}`}>
                          Ištrinti
                        </button>
                        <button className={`${styles.button} ${styles.update}`}>
                          Atnaujinti
                        </button>
                      </div>
                    </div>
                  );
                })
              : fetchData.map((el) => {
                  return (
                    <div key={el._id} className={styles["output-item"]}>
                      {Object.entries(el).map(([key, value]) => {
                        return (
                          <div className={styles["output-pair"]}>
                            <h4 className={styles.h4}>{key}: </h4>
                            <h5 className={styles.h5}> {value}</h5>
                          </div>
                        );
                      })}
                      <div className={styles["button-div"]}>
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
            <button
              onClick={() => pageHandler("dec")}
              className={styles["pagination-button"]}
            >
              <FontAwesomeIcon
                className={styles["fontawesome-icon"]}
                icon={["fas", "chevron-left"]}
                size="2x"
              />
            </button>
            <div className={styles["input-pagination"]}>
              <input
                className={styles["input-txt"]}
                type="number"
                placeholder={page}
                onKeyDown={pageInputHandler}
              />
              <h5 className={styles.pageCount}>
                /
                {isLoading ? (
                  <ClipLoader css={override} />
                ) : (
                  Math.ceil(amount / 20)
                )}
              </h5>
            </div>
            <button
              onClick={() => pageHandler("inc")}
              className={styles["pagination-button"]}
            >
              <FontAwesomeIcon
                className={styles["fontawesome-icon"]}
                icon={["fas", "chevron-right"]}
                size="2x"
              />
            </button>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

// Loaderio stilius
const override = css`
  font-size: 10px;
  margin-left: 10px;
  border-color: black;
`;

export default AdminPanel;
