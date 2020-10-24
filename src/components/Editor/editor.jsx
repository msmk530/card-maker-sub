import React from 'react';
import CardAddForm from '../CardAddForm/cardAddForm';
import CardEditForm from '../CardEditForm/cardEditForm';
import styles from './styles/editor.module.css';
const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
