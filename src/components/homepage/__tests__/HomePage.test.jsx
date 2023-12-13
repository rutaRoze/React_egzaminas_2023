import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

test('HomePage renders successfully', () => {
  render(<HomePage />);

  const title = screen.getByTestId('component-title');
  const paragrath = screen.getByTestId('component-paragrath');

  expect(title).toBeInTheDocument();
  expect(paragrath).toBeInTheDocument();
});
