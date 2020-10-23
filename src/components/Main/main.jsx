import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import styles from './styles/main.module.css';

const Main = (props) => {
  const onLogout = () => {};
  return (
    <section className='main'>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Main;
