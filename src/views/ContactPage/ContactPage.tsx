import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <div className="container my-4">
      <h2>Contacto</h2>
      <Row>
        <Col md={6}>
          <ContactForm />
        </Col>

        <Col md={6}>
          <h4>Dirección</h4>
          <p>1234 Calle Ficticia, Ciudad Imaginaria, 10000</p>
          <h4>Teléfono</h4>
          <p>+34 123 456 789</p>
          <h4>Email</h4>
          <p>contacto@alpha.com</p>

          {/* Aquí se puede incluir un componente de mapa o una imagen estática */}
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
