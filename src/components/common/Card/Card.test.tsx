import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  // Test para verificar la renderización correcta del componente
  it('renders Card component', () => {
    render(<Card title="Test Card" text="This is a test" />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('This is a test')).toBeInTheDocument();
  });

  test('renders Card with title, text, and optional footer', () => {
    const title = 'Test Card';
    const text = 'This is a test card.';
    const footer = 'Test Footer';

    render(<Card title={title} text={text} footer={footer} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(footer)).toBeInTheDocument();
  });

  // Test para verificar si la imagen se muestra cuando se pasa imgSrc
  it('renders image when imgSrc is provided', () => {
    const imgSrc = 'path/to/image.jpg';
    render(<Card title="Test Card" text="This is a test" imgSrc={imgSrc} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', imgSrc);
  });

  // Test para verificar el manejo del evento onClick
  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Card title="Clickable Card" text="This is a clickable test" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Clickable Card'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders Card with title, text, and optional footer', () => {
    const title = 'Test Card';
    const text = 'This is a test card.';
    const footer = 'Test Footer';

    render(<Card title={title} text={text} footer={footer} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(footer)).toBeInTheDocument();
  });

  test('renders image when imgSrc is provided', () => {
    const imgSrc = 'test-image.jpg';
    render(<Card title="Test" text="Testing" imgSrc={imgSrc} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', imgSrc);
  });

  describe('Card Component', () => {
    test('renders Card with title, text, and optional footer', () => {
      const title = 'Test Card';
      const text = 'This is a test card.';
      const footer = 'Test Footer';
  
      render(<Card title={title} text={text} footer={footer} />);
  
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
      expect(screen.getByText(footer)).toBeInTheDocument();
    });
  
    test('renders image when imgSrc is provided', () => {
      const imgSrc = 'test-image.jpg';
      render(<Card title="Test" text="Testing" imgSrc={imgSrc} />);
  
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', imgSrc);
    });
  
    // ... otros tests para diferentes props y comportamientos
  });
});
