const initialState = {
  playedToday: false,
  apiPlants: [],
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_PLAYED:
      return {
        ...state,
        playedToday: true,
      };
    case PLANTS_SET:
      return {
        ...state,
        apiPlants: action.payload,
      };
    default:
      return state;
  }
}

//selectors
export const getApiPlants = (state) => state.game.apiPlants;
export const getPlayedToday = (state) => state.game.playedToday;

//action types
export const GAME_PLAYED = 'game/gamePlayed';
export const PLANTS_SET = 'game/plantsSet';

//action creators
export const changeGameStatus = () => ({
  type: GAME_PLAYED,
});

export const changePlants = (plants) => ({
  type: PLANTS_SET,
  payload: plants,
});
