import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Alpha</h1>
      <nav>
        <a href="#home" className={styles.navItem}>Inicio</a>
        <a href="#about" className={styles.navItem}>Sobre Nosotros</a>
        <a href="#contact" className={styles.navItem}>Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
