import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search pokemon for a city/i);
  expect(linkElement).toBeInTheDocument();
});
