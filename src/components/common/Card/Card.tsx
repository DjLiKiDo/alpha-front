import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import styles from './Card.module.scss'; // Importing the SCSS module

// Define the prop types for the Card component
interface CardProps {
  title: string;
  text: string;
  imgSrc?: string; // optional image source
  footer?: string; // optional footer text
  onClick?: () => void; // optional click handler
}

// Card component definition using Bootstrap and custom styles
const Card: React.FC<CardProps> = ({ title, text, imgSrc, footer, onClick }) => {
  return (
    // Apply the styles.card class from the SCSS module
    <BootstrapCard className={styles.card} style={{ width: '18rem' }} onClick={onClick}>
      {imgSrc && <BootstrapCard.Img variant="top" src={imgSrc} className={styles.cardImg} />}
      <BootstrapCard.Body>
        <BootstrapCard.Title className={styles.cardTitle}>{title}</BootstrapCard.Title>
        <BootstrapCard.Text className={styles.cardText}>{text}</BootstrapCard.Text>
      </BootstrapCard.Body>
      {footer && <BootstrapCard.Footer className={styles.cardFooter}>{footer}</BootstrapCard.Footer>}
    </BootstrapCard>
  );
};

export default Card;
