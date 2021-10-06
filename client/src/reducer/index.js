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
          let sortAsc = [...state.games].sort(function(a ,b){
            if(a.name < b.name) {return -1}
            if(a.name > b.name) {return 1}
            return 0;
          })
          return{
            ...state,
            filteredGames: sortAsc
          }
        case 'DESC Z-A':
          let sortDes = [...state.games].sort(function(a ,b){
            if(a.name < b.name) {return -1}
            if(a.name > b.name) {return 1}
            return 0;
          }).reverse()
          return{
            ...state,
            filteredGames: sortDes
          }
        case 'ASC RATING':
          let sortRat = [...state.games].sort(function(a ,b){
            if(a.rating < b.rating) {return -1}
            if(a.rating > b.rating) {return 1}
            return 0;
          })
          return{
            ...state,
            filteredGames: sortRat
          }
        case 'DESC RATING':
          let sortinG = [...state.games].sort(function(a ,b){
            if(a.rating < b.rating) {return -1}
            if(a.rating > b.rating) {return 1}
            return 0;
          }).reverse()
          return{
            ...state,
            filteredGames: sortinG
          }
      default:
        return state;
    }
  };