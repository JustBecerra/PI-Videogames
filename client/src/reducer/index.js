const initialState = {
  games:[],
  gameDetail: {},
  gamesQuery: []
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
        case 'GET_GAME_BY_QUERY':
          return{
            ...state,
            gamesQuery: action.payload
          }
      default:
        return state;
    }
  };