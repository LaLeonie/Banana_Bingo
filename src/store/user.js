const initialState = {
  totalScore: 0,
  today: {
    initialScore: 0,
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
    case ADD_INITIAL_SCORE:
      return {
        ...state,
        today: {
          ...state.today,
          initialScore: state.today.initialScore + action.payload,
        },
      };
    case ADD_EXTRA_SCORE:
      return {
        ...state,
        today: {
          ...state.today,
          extraScore: state.today.extraScore + action.payload,
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
    case ADD_SELECTED_PLANTS:
      return {
        ...state,
        today: {
          ...state.today,
          dailyPlants: [...state.today.dailyPlants, ...action.payload],
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
export const ADD_INITIAL_SCORE = 'user/addInitialScore';
export const ADD_EXTRA_SCORE = 'user/addExtraScore'
export const ADD_VICTORY = 'user/addVictory';
export const ADD_SELECTED_PLANTS = 'user/plantSelected';


//action creators
export const addInitialScore = (score) => ({
  type: ADD_INITIAL_SCORE,
  payload: score,
});

export const addExtraScore = (score) => {
  type: ADD_EXTRA_SCORE, 
  payload: score
}

export const addVictory = () => ({
  type: ADD_VICTORY,
});

export const addSelectedPlans = (plants) => ({
  type: ADD_SELECTED_PLANTS,
  payload: plants,
});
