import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Alpha Blockchain & AI Solutions</p>
      <div>
        <a href="#" className={styles.socialLink}>LinkedIn</a>
        <a href="#" className={styles.socialLink}>Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
