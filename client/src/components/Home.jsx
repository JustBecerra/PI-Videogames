import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getVideogames} from '../actions/GetVideogames'
import Game from './Game'
import './Home.css'

function Home(){
    const [videogames, setVideogames] = useState({})
    
    const dispatch = useDispatch()
    let games = useSelector(state => state.games)
    console.log(games)
    useEffect(() => {
        (async () => {
            // await getVideogames(dispatch)
            dispatch(await getVideogames())
        })()
    },[])
    

    return(
        <div>
        
          <div className='Indivgame'>
            {games.map(g => <Game key={g.id} name={g.name} rating={g.rating} image={g.background_image} genres={g.genres}/>)}
          </div>
        </div>
        
    )
}

export default Home;