import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HomePage.module.css';
import { Button } from 'react-bootstrap';


const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.mainSection}>
        <h1 className={styles.title}>Alpha Blockchain & AI Solutions</h1>
        <p className={styles.subtitle}>Democratizando el acceso a las tecnologías emergentes.</p>
        <Button className={styles.mainButton}>Más información</Button>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
