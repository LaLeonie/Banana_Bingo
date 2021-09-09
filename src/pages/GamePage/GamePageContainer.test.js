import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import App from '../../App';

import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/useFetch');

jest.mock('../../hooks/useRandom');

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  userEvent.click(screen.getByText(/play/i));
});

describe('Testing the GamePage Container', () => {});

test('text runs', () => {
  console.log('runs');
});
