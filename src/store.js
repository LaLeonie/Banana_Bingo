import { createStore } from 'redux';

const initialState = {
  userData: {
    userName: '',
    totalScore: 0,
    today: {
      dayScore: { original: 0, extra: 0 },
      dailyPlants: [
        { name: 'apple', amount: 1 },
        { name: 'banana', amount: 1 },
        { name: 'pear', amount: 2 },
      ],
      day: '',
      victory: false,
    },
    thisWeek: {
      daysPlayed: [],
      weekScore: 0,
      weeklyPlants: {},
    },
  },
  gameData: {
    playedToday: false,
  },
  plantsData: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'gamePlayed':
      console.log('game is played');
      return {
        ...state,
        gameData: {
          ...state.gameData,
          playedToday: true,
        },
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
