import React from 'react';
import styles from './styles/button.module.css';

const Button = ({ name, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
);

export default Button;
