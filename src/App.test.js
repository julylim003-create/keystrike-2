import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the KeyStrike splash screen', () => {
  render(<App />);
  expect(screen.getByAltText(/splashscreen/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
});
