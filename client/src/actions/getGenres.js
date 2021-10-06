import axios from 'axios'
const urlapi = 'http://localhost:3001/Genre'

export async function getGenres(){
    let info = await axios(urlapi)
    return {type: "GET_ALL_GENRES", payload:info.data}
}