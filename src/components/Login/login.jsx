import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then(() => console.log('here'));
  };

  return (
    <>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default Login;
