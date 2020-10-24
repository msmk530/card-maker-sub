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
      theme: 'dark',
      email: 'alstjq530@gmail.com',
      title: 'Software Engineer',
      message: 'sleepy ... ',
      fileName: 'minseob',
      fileURL: null,
    },
    {
      id: '2',
      name: 'minseob2',
      company: 'boostCamp',
      theme: 'light',
      email: 'alstjq530@gmail.com',
      title: 'Software Engineer',
      message: 'not sleepy!! ',
      fileName: 'minseob',
      fileURL: null,
    },
    {
      id: '3',
      name: 'minseob3',
      company: 'boostCamp',
      theme: 'colorful',
      email: 'alstjq530@gmail.com',
      title: 'Software Engineer',
      message: 'sleepy ... ',
      fileName: 'minseob',
      fileURL: null,
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
