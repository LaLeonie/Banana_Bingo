import { createStore } from 'redux';

import { rootReducer } from '../store/store';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
