import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getVideogames} from '../actions/GetVideogames'
import NavBar from './NavBar';
import Game from './Game'
import './Home.css'


function Home(){
  const dispatch = useDispatch()
  let games = useSelector(state => state.games)
  let filtGames = useSelector(state => state.filteredGames)
  const [currentPage, setCurrentPage] = useState(0)
  
  useEffect(() => {
    (async () => {
      dispatch(await getVideogames())
    })()
  },[])
    
  
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
  
  let gamesToShow;
  if(filtGames.length > 0){
    gamesToShow = filtGames
  }else{
    gamesToShow = games.slice(currentPage, currentPage + 15)
  }

  return(
    <div>
      <div>
        <NavBar/>
      </div>   
      <div className='Indivgame'>
        {gamesToShow.map(g => <Game key={g.id} id={g.id} name={g.name} rating={g.rating} image={g.background_image} genres={g.genres}/>)}
      </div>
      <div className='pageButtons'>
        <button className='buttons' onClick={lastPage}>
          Last Page
        </button>
        <button className='buttons' onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>     
  )
}

export default Home;