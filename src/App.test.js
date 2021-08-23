import React from 'react';
import { render, screen, fireEvent } from './test/testUtils';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('happy path functions as expected', () => {
  test('HomePage renders on starting app with header and button', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Banana Bingo' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Stats' })).toBeInTheDocument();
  });

  test('I can navigate to GamePage', () => {
    render(<App />);
    userEvent.click(screen.getByText(/play/i));

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: "I'm Done" })
    ).toBeInTheDocument();
  });
});
