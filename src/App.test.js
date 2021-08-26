import React from 'react';
import { render, screen, act, fireEvent, waitFor } from './test/testUtils';
import App from './App';
import userEvent from '@testing-library/user-event';

jest.mock('./hooks/useRandom');

const mockPlants = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

const mockApi = {
  isLoading: false,
  serverError: false,
  apiData: mockPlants,
};

jest.mock('./hooks/useFetch', () => ({
  useFetch: () => mockApi,
}));

jest.mock('./hooks/useRandom', () => ({
  useRandom: () => mockPlants,
}));

describe('happy path renders and functions as expected', () => {
  test('HomePage renders on starting app with header and button', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Banana Bingo' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Stats' })).toBeInTheDocument();
  });

  test('I can navigate to GamePage & plants are populated on screen', async () => {
    render(<App />);
    userEvent.click(screen.getByText(/play/i));

    expect(
      screen.getByRole('button', { name: "I'm Done" })
    ).toBeInTheDocument();
    const items = await screen.findAllByAltText(/apple/);
    expect(items).toHaveLength(9);
  });
});
