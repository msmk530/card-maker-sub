import React from 'react';
import styles from './styles/cardAddForm.module.css';
import Button from '../Button/button';
import ImageFileInput from '../ImageFileInput/imageFileInput';

const CardAddForm = (props) => {
  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='Name'
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        placeholder='Company'
      />
      <select className={styles.select} name='theme' placeholder='Theme'>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        placeholder='Title'
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        placeholder='Email'
      />
      <textarea
        className={styles.textarea}
        name='message'
        placeholder='Message'
      />
      <div className={styles.fileInput}>
        <ImageFileInput name='' onClick={onSubmit} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
