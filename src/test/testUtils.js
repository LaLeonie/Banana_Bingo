import React from 'react';
import { createStore } from 'redux';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

import { rootReducer } from '../store/store';

const render = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { render };
