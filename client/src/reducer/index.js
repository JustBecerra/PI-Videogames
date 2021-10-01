const initialState = {
    games:[]
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_VIDEOGAMES':
          return {
            ...state,
            games: action.payload         
          }
      default:
        return state;
    }
  };