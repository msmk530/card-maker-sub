import React from 'react';
import Button from '../Button/button';
import ImageFileInput from '../ImageFileInput/imageFileInput';
import styles from './styles/cardEditForm.module.css';

const CardEditForm = ({ card }) => {
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

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input className={styles.input} type='text' name='name' value={name} />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
      />
      <select className={styles.select} name='theme' value={theme}>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input className={styles.input} type='text' name='title' value={title} />
      <input className={styles.input} type='text' name='email' value={email} />
      <textarea className={styles.textarea} name='message' value={message} />
      <div className={styles.fileInput}>
        <ImageFileInput name={name} onClick={onSubmit} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
