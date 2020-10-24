import React from 'react';
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

  return (
    <form>
      <input type='text' name='name' value={name} />
      <input type='text' name='company' value={company} />
      <select name='theme' value={theme}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input type='text' name='title' value={title} />
      <input type='text' name='email' value={email} />
      <textarea name='message' value={message} />
    </form>
  );
};

export default CardEditForm;
