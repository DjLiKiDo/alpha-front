import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar'; // Asegúrate de ajustar la ruta de importación según tu estructura de proyecto

describe('NavBar Component', () => {
  // Renderiza el NavBar dentro de un Router para manejar los NavLink
  const renderNavBar = () =>
    render(
      <Router>
        <NavBar />
      </Router>
    );

  it('should render the logo', () => {
    renderNavBar();
    expect(screen.getByTestId('alpha-logo')).toBeInTheDocument();
  });

  it('should have correct nav links', () => {
    renderNavBar();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('Insights')).toBeInTheDocument();
    expect(screen.getByText('Careers')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  // Aquí puedes agregar tests adicionales para comprobar la lógica de los estilos activos
  // Por ejemplo, navegar a "/about" y verificar si el enlace de "About Us" tiene el estilo activo
});

