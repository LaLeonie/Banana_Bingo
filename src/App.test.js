import React from 'react';
import { customRender } from './test/testUtils';
import { render, screen, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/dom';

jest.mock('./hooks/useFetch');

jest.mock('./hooks/useRandom');

describe('Testing the happy path', () => {
  test('HomePage renders on starting app with header and button', () => {
    customRender(<App />);
    expect(
      screen.getByRole('heading', { name: 'Banana Bingo' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Stats' })).toBeInTheDocument();
  });

  test('Can play and win game when I hit Bingo', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    userEvent.click(screen.getByText(/play/i));

    const firstPlant = await screen.findByTestId(0);
    const firstImage = within(firstPlant).getByRole('img');
    userEvent.click(firstImage);
    expect(firstImage).toHaveClass('selected');

    userEvent.click(within(await screen.findByTestId(1)).getByRole('img'));
    userEvent.click(within(await screen.findByTestId(2)).getByRole('img'));
    userEvent.click(within(await screen.findByTestId(3)).getByRole('img'));
    userEvent.click(within(await screen.findByTestId(4)).getByRole('img'));

    const winAlert = await screen.findByText(/You win 10 stars/);
    expect(winAlert).toBeInTheDocument();

    const victoryAlert = await screen.findByRole('heading', /What a victory!/);
    expect(victoryAlert).toBeInTheDocument();
  });
});
