import axios from 'axios';
const urlapi = '/videogame'

export async function postGame(input){
    input.rating = parseInt(input.rating)
    await axios.post(urlapi, input)
}

