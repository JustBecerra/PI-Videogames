import axios from 'axios';
const urlapi = 'http://localhost:3001/videogame'

export async function postGame(input){
    let info = await axios.post(urlapi, input)
    // return {type: "POST_GAME", payload:info.data}
    console.log(info.data)
}

