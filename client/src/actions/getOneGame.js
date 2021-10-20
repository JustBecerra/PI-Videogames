import axios from 'axios'
const urlapi = 'http://localhost:3001/videogame/'

export async function getOneGame(idGame){
    try {
        let info = await axios(urlapi + idGame)
        return {type: "GET_GAME_BY_ID", payload:info.data}
    } catch (err) {
        console.log(err.message)
    }
    
}