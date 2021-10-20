import axios from 'axios'
const urlapi = '/videogames'

export async function getGameByQuery(Nombre){
    let info = await axios(urlapi + '?name=' + Nombre)
    return {type: "GET_GAME_BY_QUERY", payload:info.data}
}