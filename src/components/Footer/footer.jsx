import React from 'react';
import { memo } from 'react';

import styles from './styles/footer.module.css';

const Footer = memo((props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>Make Your Business Card</p>
    </footer>
  );
});

export default Footer;
