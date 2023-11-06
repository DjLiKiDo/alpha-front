import React from "react";
import styles from "./HomePage.module.css";
import heroImage from "../../assets/images/hero-image.png"; // Asegúrate de que la ruta sea correcta


const HomePage: React.FC = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.heroSection} style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className={styles.title}>Alpha Blockchain & AI Solutions</h1>
        <p className={styles.subtitle}>Democratizando el acceso a las tecnologías emergentes.</p>
        <button className={styles.mainButton}>Más información</button>
      </div>
    </div>
  );
};

export default HomePage;
