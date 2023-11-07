import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div className="container my-4">
      <h2>Contacto</h2>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>Asunto</Form.Label>
              <Form.Control type="text" placeholder="Asunto del mensaje" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
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
