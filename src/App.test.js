import React from 'react';
import { render, screen, act, fireEvent, waitFor } from './test/testUtils';
import App from './App';
import userEvent from '@testing-library/user-event';
import { server } from './test/mocks/server';

describe('happy path renders and functions as expected', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  test('HomePage renders on starting app with header and button', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Banana Bingo' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Stats' })).toBeInTheDocument();
  });

  test('I can navigate to GamePage & API data is loaded', async () => {
    render(<App />);

    act(() => {
      userEvent.click(screen.getByText(/play/i));
    });
    expect(
      screen.getByRole('button', { name: "I'm Done" })
    ).toBeInTheDocument();
    expect(screen.getByText(/Loading/)).toBeInTheDocument();

    await waitFor(() => expect(screen.getAllByText('apple')).toHaveLength(9));
  });
});
