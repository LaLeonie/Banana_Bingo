import React from 'react';
import { customRender } from '../../test/testUtils';
import { render } from '@testing-library/react';
import { Provider } from 'react';
import { store } from '../../store/store';
import App from '../../App';
import userEvent from '@testing-library/user-event';

test('text runs', () => {
  console.log('runs');
});
