import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from '../../components/common/Card/Card';

const ServicesPage = () => {
  return (
    <div className="container my-4">
      <Row>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col md={6} lg={3} className="mb-4" key={idx}>
            <Card 
              title={`Servicio ${idx + 1}`} 
              text="Descripción del servicio..."
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesPage;
