import { createStore } from 'redux';

const initialState = {
  userData: {
    userName: '',
    totalScore: 0,
    today: {
      dayScore: 0,
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
    planstDisplayed: ['apples', 'bananas', 'potatoes'],
    playedToday: false,
  },
  plantsData: {},
};

function reducer(state = initialState, action) {
  return state;
}

export const store = createStore(reducer);
