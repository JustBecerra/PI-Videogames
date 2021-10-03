import axios from 'axios'
const urlapi = 'http://localhost:3001/videogames/'

export async function getOneGame(idGame){
    let info = await axios(urlapi + idGame)
    return {type: "GET_GAME_BY_ID", payload:info.data}
}