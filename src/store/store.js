import { createStore, combineReducers } from 'redux';
import { userReducer } from './user';
import { gameReducer } from './game';

export const store = createStore(
  combineReducers({
    user: userReducer,
    game: gameReducer,
  })
);
