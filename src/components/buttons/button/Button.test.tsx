import Button from './Button';
import { render, screen } from '@testing-library/react';

it('uses custom text for the button label', () => {
  render(<Button primary={'disabled'} textSize={'2xl'} label={'Click me!'} />);
  expect(screen.getByText('Click me!')).toBeInTheDocument();
});
