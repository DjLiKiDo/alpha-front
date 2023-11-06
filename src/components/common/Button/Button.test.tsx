import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button Component', () => {
  // Test para verificar si el botón renderiza correctamente
  test('renders the button with the text', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: 'Click me' });
    expect(buttonElement).toBeInTheDocument();
  });

  // Test para verificar la variante del botón
  test('renders the primary button variant', () => {
    render(<Button variant="primary" onClick={() => {}}>Primary</Button>);
    const buttonElement = screen.getByRole('button', { name: 'Primary' });
    expect(buttonElement).toHaveClass('primary');
  });

  // Test para verificar la funcionalidad onClick
  test('calls the onClick callback handler', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // Test para verificar si el botón está deshabilitado
  test('is disabled when disabled prop is true', () => {
    render(<Button onClick={() => {}} disabled>Disabled</Button>);
    const buttonElement = screen.getByRole('button', { name: 'Disabled' });
    expect(buttonElement).toBeDisabled();
  });

  // Test para verificar los estilos aplicados al hover
  // Nota: fireEvent no puede simular estilos de pseudo-clases como :hover. Esto se debe testear manualmente o con e2e testing.
});

