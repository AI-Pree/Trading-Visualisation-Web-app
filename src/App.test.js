import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



// Add all the testcase required for the streaming apis

// Creating context for the dependencies injection
// possibly directly from the apis testing, if not create a simple mock up object for the test