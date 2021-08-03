const initialState = {
  playedToday: false,
  apiPlants: [],
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case 'gamePlayed':
      return {
        ...state,
        gameData: {
          ...state.gameData,
          playedToday: true,
        },
      };
    case 'plantsSet':
      return {
        ...state,
        gameData: {
          ...state.gameData,
          apiPlants: action.payload,
        },
      };
    default:
      return state;
  }
}
