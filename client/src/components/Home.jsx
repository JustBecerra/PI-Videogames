import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getVideogames} from '../actions/GetVideogames'
import NavBar from './NavBar';
import Game from './Game'
import './Home.css'
import {Barra} from './NavBar.css'

function Home(){
  const dispatch = useDispatch()
  let games = useSelector(state => state.games)
  
  const [currentPage, setCurrentPage] = useState(0)
  
  useEffect(() => {
    (async () => {
      dispatch(await getVideogames())
    })()
  },[])
    
  const filteredGames = () => {
    return games.slice(currentPage, currentPage + 15)
  }

  const nextPage = () => {
    if(currentPage < 90){
      setCurrentPage( currentPage + 15)
    }
  }

  const lastPage = () => {
    if(currentPage > 0){
      setCurrentPage( currentPage - 15)
    }
  }

  return(
    <div>
      <div className={Barra}>
        <NavBar/>
      </div>   
      <div className='Indivgame'>
        {filteredGames().map(g => <Game key={g.id} id={g.id} name={g.name} rating={g.rating} image={g.background_image} genres={g.genres}/>)}
      </div>
      <button onClick={lastPage}>
        Last Page
      </button>
      <button onClick={nextPage}>
        Next Page
      </button>
    </div>     
  )
}

export default Home;