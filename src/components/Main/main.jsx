import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../Editor/editor';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Preview from '../Preview/preview';
import styles from './styles/main.module.css';

const Main = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'minseob',
      company: 'boostCamp',
      theme: 'light',
      email: 'alstjq530@gmail.com',
      message: 'sleepy ... ',
      fileName: 'minseob',
      fileURL: 'minseob.png',
    },
    {
      id: '2',
      name: 'minseob2',
      company: 'boostCamp',
      theme: 'light',
      email: 'alstjq530@gmail.com',
      message: 'not sleepy!! ',
      fileName: 'minseob',
      fileURL: 'minseob.png',
    },
    {
      id: '3',
      name: 'minseob3',
      company: 'boostCamp',
      theme: 'light',
      email: 'alstjq530@gmail.com',
      message: 'sleepy ... ',
      fileName: 'minseob',
      fileURL: 'minseob.png',
    },
  ]);

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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
