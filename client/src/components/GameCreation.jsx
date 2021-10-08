import React, {useState,useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getGenres} from '../actions/getGenres'
import {postGame} from '../actions/postGame'
import {Link} from 'react-router-dom'
import './GameCreation.css'

export function validate(input) {

  let errors = {};
  if (!input.name) {
    errors.name = 'name is required';
  } else if(!/^[a-zA-Z0-9]*$/.test(input.name)){
    errors.name = 'Name is invalid'
  }
  if(!input.rating){
    errors.rating = 'rating is required';
  }else if(input.rating > 5 || input.rating < 0){
    errors.rating = 'rating is out of range';
  }else if(!/^\d*(\.\d+)?$/.test(input.rating)){
    errors.rating = 'rating must be a number'
  }
  if(!input.released){
    errors.released = 'release date is required'
  }else if(!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(input.released)){
    errors.released = 'release date must be a date of DD/MM/YYYY'
  }
  if(!input.description){
    errors.description = 'A description is required'
  }
  return errors;
};

export function GameCreator(){
  const [input,setInput] = useState({
    name: '',
    rating: 0,
    released:'',
    description:'',
    genres:[],
    platforms:[]
  })
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  let generos = useSelector(state => state.genres)
  
  useEffect(() => {
    (async () => {
      dispatch(await getGenres())
    })()
  },[])
  

  const handleInputChange = function(e){
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async function(e){
    e.preventDefault()
    dispatch(await postGame(input))
  }

  const handleInputCheck = function(e){
    if(e.target.checked){
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value]
      })
    } else {
      const indexIds = input.plaforms.map(elem => elem.platform.id)
      const index = indexIds.indexOf(e.target.id)
      const copyPlatforms = [...input.platforms]
      copyPlatforms.splice(index,1)
      setInput({
        ...input,
        platforms: copyPlatforms
      })
    }
  }

  return(
    <form>
      <Link to='/Home'><button>Home</button></Link>
      <div className='formulario'>
        <img src='C:\Users\Justo\Desktop\PI-VideoGames\PI-Videogames-main\client\src\imgs\27-278717_joystick-playstation-ps3-video-game-video-game-controller.png' alt='imagen no pudo ser cargada'/>
        <label>Name:</label>
        <input type='text' onChange={handleInputChange}/>
        <label>Rating:</label>
        <input type='text' onChange={handleInputChange}/>
        <label>Release Date:</label>
        <input type='text' onChange={handleInputChange}/>
        <label>Description:</label>
        <input type='text' onChange={handleInputChange}/>
        <label>Genres:</label>
        <div>
          <select>
          <option hiddendefaultvalue="true">Choose one or more genres</option>
            {generos.map(g => (<option key= {g.name} value={g.name}>{g.name}</option>))}
          </select>
        </div>
        <label>Platforms:</label>
        <div>
          <input type='checkbox' name='PC' onChange={handleInputCheck}/>
          PC
          <input type='checkbox' name='PS4'onChange={handleInputCheck}/>
          PS4
          <input type='checkbox' name='PS5' onChange={handleInputCheck}/>
          PS5
          <input type='checkbox' name='Xbox One' onChange={handleInputCheck}/>
          Xbox One
          <input type='checkbox' name='Xbox Series X/S' onChange={handleInputCheck}/>
          Xbox Series X/S
        </div>
        <button type='submit' onSubmit={handleSubmit}>Create Game</button>
      </div>
    </form>
  )
}

