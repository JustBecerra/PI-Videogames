const initialState = {
  games:[],
  gameDetail: {},
  gamesQuery: [],
  genres:[],
  filteredGames:[]
}
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_VIDEOGAMES':
          return {
            ...state, 
            games:action.payload,     
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
        case 'GET_ALL_GENRES':
          return{
            ...state,
            genres: action.payload
          }
        case 'ASC A-Z':
          return{
            ...state,
            filteredGames: state.games.sort(function(a ,b){
              if(a.name < b.name) {return -1}
              if(a.name > b.name) {return 1}
              return 0;
            })
          }
        case 'DESC Z-A':
          return{
            ...state,
            filteredGames: state.games.sort(function(a ,b){
              if(a.name < b.name) {return -1}
              if(a.name > b.name) {return 1}
              return 0;
            }).reverse()
          }
        case 'ASC RATING':
          return{
            ...state,
            filteredGames: state.games.sort(function(a ,b){
              if(a.rating < b.rating) {return -1}
              if(a.rating > b.rating) {return 1}
              return 0;
            })
          }
        case 'DESC RATING':
          return{
            ...state,
            filteredGames: state.games.sort(function(a ,b){
              if(a.rating < b.rating) {return -1}
              if(a.rating > b.rating) {return 1}
              return 0;
            }).reverse()
          }
      default:
        return state;
    }
  };