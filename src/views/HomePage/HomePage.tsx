import React from "react";
import styles from "./HomePage.module.css";
import { Button } from "react-bootstrap";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.mainSection}>
        <h1 className={styles.title}>Alpha Blockchain & AI Solutions</h1>
        <p className={styles.subtitle}>Democratizando el acceso a las tecnologías emergentes.</p>
        <Button className={styles.mainButton}>Más información</Button>
      </div>
    </div>
  );
};

export default HomePage;
