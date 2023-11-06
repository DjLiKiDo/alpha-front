import React from "react";
import { Link } from "react-router-dom"; // Importar Link
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Alpha</h1>
      <nav>
        <Link to="/" className={styles.navItem}>Inicio</Link>{" "}{/* Usar Link en lugar de <a> */}
        <Link to="/about" className={styles.navItem}>Sobre Nosotros</Link>
        <Link to="/contact" className={styles.navItem}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
