import axios from 'axios';
const urlapi = 'http://localhost:3001/videogame'

export async function postGame(input){
    input.rating = parseInt(input.rating)
    console.log(input)
    let info = await axios.post(urlapi, input)
    return {type:'POST_GAME', info:info.data};
}

