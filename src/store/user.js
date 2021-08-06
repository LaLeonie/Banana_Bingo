const initialState = {
  totalScore: 0,
  today: {
    originalScore: 0,
    extraScore: 0,
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
    case ADD_ORIGINAL_SCORE:
      console.log('adding score');
      return {
        ...state,
        today: {
          ...state.today,
          originalScore: state.today.originalScore + action.payload,
        },
      };
    case ADD_VICTORY:
      return {
        ...state,
        today: {
          ...state.today,
          victory: true,
        },
      };
    case PLANT_SELECTED:
      const plantName = action.payload.fields.Name;

      if (state.today.dailyPlants.some((e) => e.fields.Name === plantName)) {
        return {
          ...state,
          today: {
            ...state.today,
            dailyPlants: state.today.dailyPlants.filter(
              (e) => e.fields.Name !== plantName
            ),
          },
        };
      }
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
export const ADD_ORIGINAL_SCORE = 'user/addOriginalScore';
export const ADD_VICTORY = 'user/addVictory';
export const PLANT_SELECTED = 'user/plantSelected';

//action creators
export const addOriginalScore = (score) => ({
  type: ADD_ORIGINAL_SCORE,
  payload: score,
});

export const addVictory = () => ({
  type: ADD_VICTORY,
});

export const selectPlant = (plant) => ({
  type: PLANT_SELECTED,
  payload: plant,
});
