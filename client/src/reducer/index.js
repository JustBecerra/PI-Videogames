const initialState = {
  games:[],
  gameDetail: {}
}
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_VIDEOGAMES':
          return {
            ...state, 
            games:action.payload         
          }
        case 'GET_GAME_BY_ID':
          return {...state,
            gameDetail: action.payload
          }
      default:
        return state;
    }
  };