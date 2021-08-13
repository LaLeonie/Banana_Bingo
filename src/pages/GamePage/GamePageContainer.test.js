import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { storeFactory } from '../../utils/testUtils';

import GamePageContainer from './GamePageContainer';
import App from './../../App';

describe('GamePageContainer Component', () => {
  it('should render correctly', () => {
    render(
      <Provider>
        <GamePageContainer loading="true" />
      </Provider>
    );
  });
});
