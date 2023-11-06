import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Alpha Blockchain & AI Solutions</p>
      <div>
        <a href="https://www.linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.twitter.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
