import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

// Limpiar después de cada test
afterEach(cleanup);

describe('Header Component', () => {
  test('se renderiza correctamente', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    // Usar getByTestId si esperas un solo elemento con ese ID
    expect(screen.getByTestId('alpha-logo')).toBeInTheDocument();
  });

  // Otros tests pueden ir aquí
});