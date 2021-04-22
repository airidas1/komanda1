import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import styles from './AdminLogin.module.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(null);

  const [mode, setMode] = useState(false);

  const signInHandler = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/v1/admin/login', {
        username: username,
        password: password,
      })
      .then((data) => {
        localStorage.setItem('admin-id', data.headers['admin-id']);
        setRedirect('/v1/admin/panel');
      })
      .catch((e) => console.log(e));
  };
  if (redirect) return <Redirect exact to={redirect} />;

  const changeColors = () => {
    return mode ? setMode(false) : setMode(true);
  };

  return (
    <main className={mode ? `${styles.main} ${styles.active}` : styles.main}>
      <div
        className={mode ? `${styles.fancy} ${styles['active']}` : styles.fancy}
      ></div>
      <div className={styles['form-wrapper']}>
        <h2>Admin Login Page Sample v1</h2>
        <button onClick={changeColors}>toggle</button>
        <form className={styles.form}>
          <div className={styles['form-control']}>
            <h3 className={styles.h3}>Enter Username:</h3>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className={
                mode
                  ? `${styles['input-text']} ${styles['active']}`
                  : styles['input-text']
              }
              type='text'
            />
          </div>
          <div className={styles['form-control']}>
            <h3 className={styles.h3}>Enter Password:</h3>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className={
                mode
                  ? `${styles['input-text']} ${styles['active']}`
                  : styles['input-text']
              }
              type='password'
            />
          </div>
          <input
            className={
              mode ? `${styles.submit} ${styles.active}` : styles.submit
            }
            type='submit'
            value='Sign In'
            onClick={signInHandler}
          />
        </form>
      </div>
    </main>
  );
}

export default AdminLogin;
