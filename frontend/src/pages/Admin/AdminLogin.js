import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import styles from './AdminLogin.module.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(null);
  const [error, setError] = useState(null);

  const signInHandler = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/v1/admin/login', {
        username: username,
        password: password,
      })
      .then((data) => {
        if (data.data.username === false) {
          setError('Incorrect Username');
          return false;
        }
        if (data.data.password === false) {
          setError('Incorrect Password');
          return false;
        }
        if (data.data.username && data.data.password) {
          localStorage.setItem('admin-id', data.headers['admin-id']);
          setRedirect('/v1/admin/panel');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  if (redirect) return <Redirect exact to={redirect} />;

  return (
    <main className={styles.login}>
      <div className={styles.container}>
        <h1>Prisijungti</h1>
        <form className={styles.login_form}>
          <div className={styles.login_form_wrapper}>
            <div className={styles.form_control}>
              <label>Naudotojo vardas:</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type='text'
                className={styles.form_input}
              />
            </div>
            <div className={styles.form_control}>
              <label>Slaptažodis:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className={styles.form_input}
              />
            </div>
          </div>
          <button type='submit' value='Sign In' onClick={signInHandler}>
            Prisijungti
          </button>
        </form>
      </div>
    </main>
  );
}

export default AdminLogin;
