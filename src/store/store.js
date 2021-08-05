import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './user';
import { gameReducer } from './game';

export const store = createStore(
  combineReducers({
    user: userReducer,
    game: gameReducer,
  }),
  composeWithDevTools(applyMiddleware())
);
