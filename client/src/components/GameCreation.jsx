import React, {useState} from "react";
import {useSelector} from 'react-redux'

function GameCreator(){
  let genres = useSelector(state => state.genres)
  
  const [input,setInput] = ({

  })

  return(
    <form>
        <img src='C:\Users\Justo\Desktop\PI-VideoGames\PI-Videogames-main\client\src\imgs\27-278717_joystick-playstation-ps3-video-game-video-game-controller.png' alt='imagen no pudo ser cargada'/>
        <label>Name:</label>
        <input type='text'/>
        <label>Description:</label>
        <input type='text'/>
        <label>Release Date:</label>
        <input type='text'/>
        <label>Rating:</label>
        <input type='text'/>
      <button type='submit'>Create Game</button>
    </form>
  )
}

export default GameCreator;