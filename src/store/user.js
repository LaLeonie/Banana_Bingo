const initialState = {
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
};

export function userReducer(state = initialState, action) {
  return state;
}
