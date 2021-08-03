const initialState = {
  playedToday: false,
  apiPlants: [],
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case 'gamePlayed':
      console.log('game is played');
      return {
        ...state,
        playedToday: true,
      };
    case 'plantsSet':
      return {
        ...state,

        apiPlants: action.payload,
      };
    default:
      return state;
  }
}
