import React from 'react';
import styles from './styles/imageFileInput.module.css';

const ImageFileInput = ({ name, onClick }) => (
  <button className={styles.fileInput} onClick={onClick}>
    {name}
  </button>
);

export default ImageFileInput;
