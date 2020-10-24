import React from 'react';
import Button from '../Button/button';
import ImageFileInput from '../ImageFileInput/imageFileInput';
import styles from './styles/cardEditForm.module.css';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const {
    id,
    name,
    company,
    theme,
    email,
    title,
    message,
    fileName,
    fileURL,
  } = card;

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }

    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name='theme'
        value={theme}
        onChange={onChange}
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <ImageFileInput name={name} onClick={onSubmit} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
