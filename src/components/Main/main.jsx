import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../Editor/editor';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Preview from '../Preview/preview';
import styles from './styles/main.module.css';

const Main = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
