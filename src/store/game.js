const initialState = {
  playedToday: false,
  apiPlants: [],
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case 'game/gamePlayed':
      return {
        ...state,
        playedToday: true,
      };
    case 'game/plantsSet':
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
