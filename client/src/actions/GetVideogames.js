import axios from 'axios'
const urlapi = '/videogames'

export async function getVideogames(){
    let info = await axios(urlapi)
    return {type: "GET_ALL_VIDEOGAMES", payload:info.data}
}

