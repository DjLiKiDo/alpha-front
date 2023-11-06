import React from "react";
import styles from "./Footer.module.css";
import Button from "../common/Button/Button"; // Asegúrate de que la ruta de importación es correcta

const Footer: React.FC = () => {
  // Función que manejará el evento onClick del botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Para un desplazamiento suave hasta arriba
    });
  };

  return (
    <footer className={styles.footer}>
      <p>© 2023 Alpha Blockchain & AI Solutions</p>
      <div>
        <Button variant="primary" onClick={scrollToTop}>
          Back to Top
        </Button>
        <a href="https://www.linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.twitter.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
