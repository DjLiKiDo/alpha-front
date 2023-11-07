import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './ContactForm.module.css'; // Asegúrate de que la ruta de importación sea correcta

const ContactForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicName" className={styles.formGroup}>
        <Form.Label className={styles.formLabel}>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu nombre" className={styles.formControl} />
      </Form.Group>

      {/* Repetir para los demás campos del formulario, aplicando las clases de estilo como se muestra arriba */}

      <Button variant="primary" type="submit" className={styles.submitButton}>
        Enviar
      </Button>
    </Form>
  );
};

export default ContactForm;
