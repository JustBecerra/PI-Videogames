import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getOneGame} from '../actions/getOneGame'

function GameById (props){
  const dispatch = useDispatch()
  let game = useSelector(state => state.gameDetail)
  console.log(game)
  let generos = game.genres.map(elem => {
      return [...elem.name + " "]
  })
  let plataformas = game.platforms.map(elem => {
    return [...elem.platform.name + " "]
  })


  useEffect(() => {
    (async () => {
        dispatch(await getOneGame(props.match.params.id))
    })()
  },[])

  return(
    <div className='elemGame'>
      <h2 className="info">{game.name}</h2>     
      <img className="imagen" src={game.background_image}/>
      <h4 className="info">{game.rating}</h4>
      <h4>{game.released}</h4>
      <h4>{plataformas}</h4>
      <h4>{generos}</h4>
      <h6>{game.description}</h6>
    </div>
)}

export default GameById;