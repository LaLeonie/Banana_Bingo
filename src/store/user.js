const initialState = {
  totalScore: 0,
  today: {
    dayScore: { original: 0, extra: 0 },
    dailyPlants: [],
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
  switch (action.type) {
    case PLANT_SELECTED:
      return {
        ...state,
        today: {
          ...state.today,
          dailyPlants: [...state.today.dailyPlants, action.payload],
        },
      };
    default:
      return state;
  }
}

//selectors
export const getTotalScore = (state) => state.user.totalScore;
export const getToday = (state) => state.user.today;
export const getThisWeek = (state) => state.user.thisWeek;

//action types
export const PLANT_SELECTED = 'user/plantSelected';

//action creators
export const selectPlant = (plant) => ({
  type: PLANT_SELECTED,
  payload: plant,
});
