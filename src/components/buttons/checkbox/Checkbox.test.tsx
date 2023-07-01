import Checkbox from './Checkbox';
import { render, screen } from '@testing-library/react';

const expectTestComponentByColor = (tesetId: string, color: string) => {
  const filledColor = screen.getByTestId(tesetId).getAttribute('fill');
  expect(filledColor).toBe(color);
};

describe('Checkbox should change color by isActive props', () => {
  it('case: primary, true', () => {
    render(<Checkbox variant="primary" isActive={true} />);
    expectTestComponentByColor('primary-attribute', '#2E74FF');
  });

  it('case: primary, false', () => {
    render(<Checkbox variant="primary" isActive={false} />);
    expectTestComponentByColor('primary-attribute', '#ECEEF0');
  });

  it('case: secondary, true', () => {
    render(<Checkbox variant="secondary" isActive={true} />);
    expectTestComponentByColor('secondary-attribute', '#80AAFF');
  });

  it('case: secondary, false', () => {
    render(<Checkbox variant="secondary" isActive={false} />);
    expectTestComponentByColor('secondary-attribute', '#ECEEF0');
  });

  it('case: teritary, true', () => {
    render(<Checkbox variant="teritary" isActive={true} />);
    expectTestComponentByColor('teritary-attribute', '#34AAFF');
  });

  it('case: teritary, false', () => {
    render(<Checkbox variant="teritary" isActive={false} />);
    expectTestComponentByColor('teritary-attribute', '#BEC4CD');
  });
});
