import axios from 'axios'
const urlapi = 'http://localhost:3001/videogames'

export async function getGameByQuery(Nombre){
    let info = await axios(urlapi + '?name=' + Nombre)
    return {type: "GET_GAME_BY_QUERY", payload:info.data}
}