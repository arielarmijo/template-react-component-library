import React from 'react';
import { screen, render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render a Button', () => {
    render(<Button>Hola Mundo!</Button>);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });
});
