import { createStore } from 'redux';

const initialState = {
  userData: {
    userName: '',
    totalScore: 0,
    today: {
      dayScore: 0,
      dailyPlants: {},
      day: '',
    },
    thisWeek: {
      daysPlayed: [],
      weekScore: 0,
      weeklyPlants: {},
    },
  },
  gameData: {
    planstDisplayed: [],
    playedToday: false,
  },
  plantsData: {},
};

function reducer(state = initialState, action) {
  return state;
}

export const store = createStore(reducer);
