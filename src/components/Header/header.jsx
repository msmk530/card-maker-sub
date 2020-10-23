import React from 'react';

import styles from './styles/header.module.css';

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src='/images/logo.png' alt='logo' />
      <h2 className={styles.title}>Business Card Maker</h2>
    </header>
  );
};

export default Header;
