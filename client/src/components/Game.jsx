import React from 'react';
import './Game.css'
import {Link} from 'react-router-dom'

function Game ({name,genres,image,id}){
  let generos = genres.map(elem => {
      return [...elem.name + " "]
  })
  return(
    <div className='elemGame'>
      <Link to={`/Home/${id}`}>
        <h3 className="info">{name}</h3>
      </Link>      
      <img className="imagen" src={image}/>
      <h5 className="info">{generos}</h5>
    </div>
)}

export default Game;