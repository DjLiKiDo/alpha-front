import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"; // Using CSS module for scoped styling
import logo from "../../../assets/images/alpha-logo.png"; // Ajusta la ruta según la estructura de tu proyecto

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink
          }
        >
          <img src={logo} alt="Alpha Logo" className={styles.navbarLogo} />
        </NavLink>
      </div>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            About Us
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/services"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Services
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/technology"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Technology
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/insights"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Insights
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/careers"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Careers
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/contact"
            className={(navData) => (navData.isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      {/* Here you could add additional elements like a search or sign in/up buttons */}
    </nav>
  );
};

export default NavBar;
