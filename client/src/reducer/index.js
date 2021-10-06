const initialState = {
  games:[],
  gameDetail: {},
  gamesQuery: [],
  genres:[],
  filteredGames:[],
  filteredGenres:[]
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
        case 'GENRE_FILTER':
          let juegos = state.games
          let filtrados = []

          if(action.payload === 'GENRE_FILTER') filtrados = juegos
          {
            filtrados = juegos.filter(e => {
              let flag = false;
              e.genres.map(g => {
                if(g.name === action.payload){
                  flag = true;
                }
              })
              if(flag) return e
            })
          }
          return{
             ...state,
             filteredGames: filtrados
          }
        case 'sinFiltro':
          return {
            ...state,
            filteredGames:state.games
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