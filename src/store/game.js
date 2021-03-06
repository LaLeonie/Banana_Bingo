const initialState = {
  difficulty: 'medium',
  playedToday: false,
  apiPlants: [],
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_PLAYED:
      return {
        ...state,
        playedToday: action.payload,
      };
    case PLANTS_SET:
      return {
        ...state,
        apiPlants: action.payload,
      };
    case DIFFICULTY_SET:
      return {
        ...state,
        difficulty: action.payload,
      };
    default:
      return state;
  }
}

//selectors
export const getApiPlants = (state) => state.game.apiPlants;
export const getPlayedToday = (state) => state.game.playedToday;
export const getDifficulty = (state) => state.game.difficulty;

//action types
export const GAME_PLAYED = 'game/gamePlayed';
export const PLANTS_SET = 'game/plantsSet';
export const DIFFICULTY_SET = 'game/difficultySet';

//action creators
export const changeGameStatus = (bool) => ({
  type: GAME_PLAYED,
  payload: bool,
});

export const changePlants = (plants) => ({
  type: PLANTS_SET,
  payload: plants,
});

export const changeDifficulty = (difficulty) => ({
  type: DIFFICULTY_SET,
  payload: difficulty,
});
