import axios from 'axios';
const urlapi = 'http://localhost:3001/videogame'

export async function postGame(input){
    input.rating = parseInt(input.rating)
    await axios.post(urlapi, input)
}

