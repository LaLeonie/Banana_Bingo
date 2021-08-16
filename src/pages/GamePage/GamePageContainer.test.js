import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import GamePageContainer from './GamePageContainer';

describe('GamePageContainer Component', () => {
  it('should render correctly', () => {
    render(
      <Provider>
        <GamePageContainer loading="true" />
      </Provider>
    );
  });
});
