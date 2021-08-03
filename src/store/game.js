const initialState = {
  playedToday: false,
  apiPlants: [],
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case 'gamePlayed':
      return {
        ...state,
        game: {
          ...state.game,
          playedToday: true,
        },
      };
    case 'plantsSet':
      return {
        ...state,
        game: {
          ...state.game,
          apiPlants: action.payload,
        },
      };
    default:
      return state;
  }
}
