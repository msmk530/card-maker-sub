import React from 'react';
import { useRef } from 'react';
import styles from './styles/imageFileInput.module.css';

const ImageFileInput = ({ imageService, name, onFileChange }) => {
  const inputRef = useRef();

  const onChange = async (event) => {
    const uploaded = await imageService.upload(event.target.files[0]);

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
