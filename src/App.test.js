import { render, screen } from '@testing-library/react';
import App from './App';
import { Films } from './components/films/Films';


test('renders goi ra được thằng app', () => {
  render(<App />);
});

test('renders goi ra thằng film', () => {
  render(<Films/>);
});
