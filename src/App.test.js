import React from 'react';
import { render, screen, fireEvent } from './test/testUtils';
import App from './App';

describe('happy path functions as expected', () => {
  test('HomePage renders on starting app', () => {
    render(<App />);
    const header = screen.getByRole('heading', { name: 'Banana Bingo' });
    expect(header).toBeInTheDocument();
  });
});
