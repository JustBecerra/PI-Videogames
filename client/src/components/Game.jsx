import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getVideogames} from '../actions/GetVideogames'
import './Game.css'

function Game ({name,rating,genres,image}){
  let generos = genres.map(elem => {
      return [...elem.name + " "]
  })
  return(
      <div>
        <h3 className="info">{name}</h3>      
        <h5>{generos}</h5>
        <img className="imagen" src={image}/>
      </div>
)}

export default Game;