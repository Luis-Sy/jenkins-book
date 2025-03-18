import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This React app was built in Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});
