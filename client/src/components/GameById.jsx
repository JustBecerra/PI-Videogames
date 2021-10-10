import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getOneGame} from '../actions/getOneGame'
import './GameById.css'
import {Link} from 'react-router-dom'

function GameById (props){
  // try{
  const dispatch = useDispatch()
  let game = useSelector(state => state.gameDetail)

  useEffect(() => {
    (async () => {
        dispatch(await getOneGame(props.match.params.id))
    })()
  },[])
  
  let generos;
  let plataformas;
  // if(game.length > 0){
  if(Object.keys(game).length){
    // game.genres?game.genres[0].id : null
    if(game.Genres){
      generos = game.Genres.map(elem => {
        return [...elem.name + " "]})
    }else if(game.genres){
      generos = game.genres?.map(elem => {
        return [...elem.name + " "]
    })}
    
    if(game.Platforms){
      plataformas = game.Platforms?.map(elem => {
      return [...elem + " "]
    })
    }else if(game.platforms[0].platform){
      plataformas = game.platforms.map(elem => {
        return [...elem.platform.name + " "]
      })
    }   
  }
 
    return(
    
    <div >
      {console.log(plataformas)}
      {game ? <>
      <Link to='/Home'><button>Home</button></Link>
      <h2>{game.name}</h2>     
      <img className='imagen' src={game.background_image}/>
      <div className='infoBlock'>
        <h4>Rating: {game.rating}</h4>
        <h4>Released in: {game.released}</h4>
        <h4>Available platforms: {plataformas}</h4>
        <h4>Genres: {generos}</h4>
        <p>Description: {game.description}</p>
      </div> </> : <h1>cris</h1>}
    </div>
)
// }catch(err){
//   console.log(err.message)
//   return err
// }
}

export default GameById;