import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/footer';
import Header from '../Header/header';

import styles from './styles/login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMain = (userID) => {
    history.push({
      pathname: '/app',
      state: {
        id: userID,
      },
    });
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => goToMain(data.user.uid));
  };

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
