import React from 'react';
import './Game.css'
import {Link} from 'react-router-dom'

function Game (props){
  let generos;
  if(props.genres){
    generos = props.genres?.map(elem => {
      return [...elem.name + " "]
  })}else if(props.Genres){
    generos = props.Genres?.map(elem => {
      return [...elem.name + " "]
    })
  }
  console.log(generos)
  return(
    <div className='elemGame'>
      <Link to={`/Home/${props.id}`} className='info'>
        <h3>{props.name}</h3>
      </Link>      
      <img className="imagen" src={props.image}/>
      <h5 className="info">{generos}</h5>
    </div>
)}

export default Game;