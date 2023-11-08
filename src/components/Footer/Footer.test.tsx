import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component tests', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the copyright text correctly', () => {
    expect(screen.getByText(/© 2023 Alpha Blockchain & AI Solutions/i)).toBeInTheDocument();
  });

  it('contains a button to scroll to top', () => {
    const button = screen.getByRole('button', { name: /back to top/i });
    expect(button).toBeInTheDocument();
    // Aquí podrías simular un clic y verificar si se desplaza hacia arriba,
    // pero esto puede requerir un mock de window.scrollTo.
  });

  it('contains links to social media platforms', () => {
    const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
    const twitterLink = screen.getByRole('link', { name: /twitter/i });

    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com');
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com');
  });
});
