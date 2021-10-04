import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getOneGame} from '../actions/getOneGame'
import details from './GameById.css'
import {Link} from 'react-router-dom'

function GameById (props){
  const dispatch = useDispatch()
  let game = useSelector(state => state.gameDetail)

  useEffect(() => {
    (async () => {
        dispatch(await getOneGame(props.match.params.id))
    })()
  },[])
  
  let generos;
  let plataformas;

  if(Object.keys(game).length){
    generos = game.genres.map(elem => {
      return [...elem.name + " "]
    })
    plataformas = game.platforms.map(elem => {
      return [...elem.platform.name + " "]
    })
  }
  
    return(
    <div>
      <Link to='/Home'><button>Home</button></Link>
      <h2>{game.name}</h2>     
      <img className='imagen' src={game.background_image}/>
      <div className='infoBlock'>
        <h4>Rating: {game.rating}</h4>
        <h4>Released in: {game.released}</h4>
        <h4>Available platforms: {plataformas}</h4>
        <h4>Genres: {generos}</h4>
        <p>Description: {game.description}</p>
      </div>
    </div>
)}

export default GameById;