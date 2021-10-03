import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getVideogames} from '../actions/GetVideogames'
import NavBar from './NavBar';
import Game from './Game'
import './Home.css'

function Home(){  
    const dispatch = useDispatch()
    let games = useSelector(state => state.games)
    
    useEffect(() => {
        (async () => {
            dispatch(await getVideogames())
        })()
    },[])
    

    return(
        <div>
          <div>
            <NavBar/>
          </div>   
          <div className='Indivgame'>
            {games.map(g => <Game key={g.id} id={g.id} name={g.name} rating={g.rating} image={g.background_image} genres={g.genres}/>)}
          </div>
        </div>
        
    )
}

export default Home;