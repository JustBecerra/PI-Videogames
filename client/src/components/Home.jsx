import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getVideogames} from '../actions/GetVideogames'
import NavBar from './NavBar';
import Game from './Game'
import LoadingGif from './LoadingGif';
import './Home.css'


function Home(){
  const dispatch = useDispatch()
  let games = useSelector(state => state.games)
  let filtGames = useSelector(state => state.filteredGames)
  let queriedGames = useSelector(state => state.gamesQuery)
  const [currentPage, setCurrentPage] = useState(0)
  
  useEffect(() => {
    (async () => {
      dispatch(await getVideogames())
    })()
  },[])
    
  useEffect(() => {
    setCurrentPage(0)
  },[filtGames])

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
    gamesToShow = filtGames.slice(currentPage, currentPage + 15)
  }else if(queriedGames.length > 0){
    gamesToShow = queriedGames;
  }else{
    gamesToShow = games.slice(currentPage, currentPage + 15)
  }

  return(
    <div>
      <div>
        <NavBar/>
      </div>   
      <div className='Indivgame'>
        {gamesToShow.length === 0 ? 
        <div>
          <h1>Loading...</h1><br/>
          <LoadingGif/>
        </div> :
        gamesToShow.map(g => <Game key={g.id} id={g.id} name={g.name} rating={g.rating} image={g.background_image} genres={g.Genres ? g.Genres : g.genres}/>)}
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