import React from 'react';
import { customRender } from './test/testUtils';
import { render, screen, act, sleep } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/dom';
import { useSelector } from 'react-redux';
import { getToday } from './store/user';

jest.mock('./hooks/useRandom');

const mockPlants = [];

const mockApi = {
  isLoading: false,
  serverError: false,
  apiData: mockPlants,
};

for (let i = 0; i < 25; i++) {
  mockPlants.push({
    fields: {
      Name: 'apple',
      Type: 'Fruit',
      Color: 'red',
      Image: [
        {
          url: 'https://dl.airtable.com/.attachments/4bb8bc6a4b9e91b9cb80c5886570ca40/1f290e67/Icon_Browncapboletus.png',
        },
      ],
    },
  });
}

jest.mock('./hooks/useFetch', () => ({
  useFetch: () => mockApi,
}));

jest.mock('./hooks/useRandom', () => ({
  useRandom: () => mockPlants,
}));

describe('Testing the happy path', () => {
  test('HomePage renders on starting app with header and button', () => {
    customRender(<App />);
    expect(
      screen.getByRole('heading', { name: 'Banana Bingo' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Stats' })).toBeInTheDocument();
  });

  test('GamePage renders as expected & WIN alert displays when user selects bingo', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    userEvent.click(screen.getByText(/play/i));

    expect(
      screen.getByRole('button', { name: "I'm Done" })
    ).toBeInTheDocument();

    const items = await screen.findAllByAltText(/apple/);
    expect(items).toHaveLength(25);

    const firstPlant = await screen.findByTestId(0);
    const firstImage = within(firstPlant).getByRole('img');
    userEvent.click(firstImage);
    expect(firstImage).toHaveClass('selected');

    userEvent.click(within(await screen.findByTestId(1)).getByRole('img'));
    userEvent.click(within(await screen.findByTestId(2)).getByRole('img'));
    userEvent.click(within(await screen.findByTestId(3)).getByRole('img'));
    userEvent.click(within(await screen.findByTestId(4)).getByRole('img'));
  });
});
