import axios from 'axios'
const urlapi = '/videogames'

// export async function getGameByQuery(Nombre){
export async function getGameByQuery(payload){
    // let info = await axios(urlapi + '?name=' + Nombre)
    return {type: "GET_GAME_BY_QUERY", payload}
}