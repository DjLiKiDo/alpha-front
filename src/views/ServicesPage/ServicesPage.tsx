import React from 'react';

import styles from './ServicesPage.module.css';
import Card from '../../components/common/Card/Card';

const ServicesPage: React.FC = () => {
  // Datos aleatorios para las tarjetas
  const cardData = [
    { title: 'Service 1', text: 'Description for service 1', imgSrc: 'image1.jpg', footer: 'Footer 1' },
    { title: 'Service 2', text: 'Description for service 2', imgSrc: 'image2.jpg', footer: 'Footer 2' },
    { title: 'Service 3', text: 'Description for service 3', imgSrc: 'image3.jpg', footer: 'Footer 3' },
    { title: 'Service 4', text: 'Description for service 4', imgSrc: 'image4.jpg', footer: 'Footer 4' },
  ];

  return (
    <div className={styles.servicesPageContainer}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          imgSrc={card.imgSrc}
          footer={card.footer}
        />
      ))}
    </div>
  );
};

export default ServicesPage;
