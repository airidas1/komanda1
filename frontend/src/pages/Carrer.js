import React from "react";
import styles from "./Carrer.module.css";
import Button from "../components/Button";
import { useSpring, animated } from "react-spring";

function Carrer() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });
  return (
    <animated.main style={props}>
      <main className={styles.carrer}>
        <div className={styles.container}>
          <h1>Parašykite mums</h1>

          <form className={styles.carrer_form}>
            <div className={styles.form_control}>
              <label>Vardas</label>
              <input type="text" className={styles.form_input}></input>
            </div>
            <div className={styles.form_control}>
              <label>El. paštas</label>
              <input type="email" className={styles.form_input}></input>
            </div>
            <div className={styles.form_control}>
              <label>Jūsų žinutė</label>
              <textarea
                type="message"
                id="message"
                cols="30"
                rows="5"
                className={styles.form_textarea}
              ></textarea>
            </div>
            <Button title={"Pateikti"} href={"#"} />
          </form>
        </div>
      </main>
    </animated.main>
  );
}

export default Carrer;
