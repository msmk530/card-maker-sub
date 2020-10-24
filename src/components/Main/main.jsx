import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../Editor/editor';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Preview from '../Preview/preview';
import styles from './styles/main.module.css';

const Main = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
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
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
