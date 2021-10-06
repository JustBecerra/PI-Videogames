export const sinFiltro = function(payload){
    return{
        type: 'sinFiltro',
        payload
    }
}

export const AscAlph = function(payload){
    return{
        type:'ASC A-Z',
        payload
    }
}

export const DescAlph = function(payload){
    return{
        type:'DESC Z-A',
        payload
    }
}

export const AscRating = function(payload){
    return{
        type:'ASC RATING',
        payload
    }
}

export const DescRating = function(payload){
    return{
        type:'DESC RATING',
        payload
    }
}

export const GenreFilter = function(payload){
    return{
        type:'GENRE_FILTER',
        payload
    }
}