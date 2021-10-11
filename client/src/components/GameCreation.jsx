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
  if(!input.Rating){
    errors.Rating = 'rating is required';
  }
  if(!input.Released){
    errors.Released = 'release date is required'
  }else if(!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(input.released)){
    errors.Released = 'release date must be a date of DD/MM/YYYY'
  }
  if(!input.description){
    errors.description = 'A description is required'
  }
  return errors;
};

export function GameCreator(){
  const [input,setInput] = useState({
    name: '',
    Rating: 0,
    Released:'',
    description:'',
    genres:[],
    Platforms:[]
  })
  const [errors, setErrors] = useState({
    name: '',
    Rating: 0,
    Released:'',
    description:'',
  })
  const dispatch = useDispatch()
  let generos = useSelector(state => state.genres)
  
  useEffect(() => {
    (async () => {
      dispatch(await getGenres())
    })()
  },[])
  

  function handleInputChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  
  async function handleSubmit(e){
    e.preventDefault()
    if(!input.name || !input.Rating || !input.Released || !input.description){
      setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    }else{
      dispatch(await postGame(input))
      setInput({
        name: '',
        Rating: 0,
        Released:'',
        description:'',
        genres:[],
        Platforms:[]
      })
      alert('Game created!')
    }
  }
  

  function handleInputCheck(e){
    if(e.target.checked){
      setInput({
        ...input,
        Platforms: [...input.Platforms, e.target.name]
      })
     } 
     else {
      const index = input.Platforms?.indexOf(e.target.id)
      const copyPlatforms = [...input.Platforms]
      copyPlatforms.splice(index,1)
      setInput({
        ...input,
        Platforms: copyPlatforms
      })
    }
  }
  
  function handleSelect(e){
    setInput({
      ...input,
      genres: [...input.genres, e.target.value]
    })
  }

  return(
    <div>
    <form onSubmit={(e) => handleSubmit(e)}>
      <Link to='/Home'><button className='buttonhome'>Home</button></Link>
      <div className='formulario'>
        <img src='https://cdn4.iconfinder.com/data/icons/video-game-37/100/game-pad-video-game-consoles-game-pad-analog-stick-generic-controller-white-512.png'/>
        <label>Name:</label>
        <input type='text' name='name' onChange={(e) => handleInputChange(e)}/>
        {errors.name ? <small>{errors.name}</small> : ''}
        <label>Rating:</label>
        <input type='text' min='0' max='5' name='Rating'onChange={(e) => handleInputChange(e)}/>
        {errors.Rating ? <small>{errors.Rating}</small> : ''}
        <label>Release Date:</label>
        <input type='text' name='Released' onChange={(e) => handleInputChange(e)}/>
        {errors.Released ? <small>{errors.Released}</small> : ''}
        <label>Description:</label>
        <input type='text' name='description' onChange={(e) => handleInputChange(e)}/>
        {errors.description ? <small>{errors.description}</small> : ''}
        <label>Platforms:</label>
        <div>
          <input type='checkbox' name='PC' onChange={(e) => handleInputCheck(e)}/>
          PC
          <input type='checkbox' name='PS4'onChange={(e) => handleInputCheck(e)}/>
          PS4
          <input type='checkbox' name='PS5' onChange={(e) => handleInputCheck(e)}/>
          PS5
          <input type='checkbox' name='Xbox One' onChange={(e) => handleInputCheck(e)}/>
          Xbox One
          <input type='checkbox' name='Xbox Series X/S' onChange={(e) => handleInputCheck(e)}/>
          Xbox Series X/S
        </div>
        <button className='buttonsubmit' type='submit'>Create Game</button>
        <label className='genreDropdown'>Genres:</label>
        <div>
          <select className='genreDropdown' onChange={(e) => handleSelect(e)}>
          <option hiddendefaultvalue="false">Choose one or more genres</option>
            {generos.map(g => (<option key= {g.name} value={g.name}>{g.name}</option>))}
          </select>
          <ul className='resultDropdown'><li>{input.genres.map(elem => elem + " - ")}</li></ul>
        </div>
      </div>
    </form>
  </div>
  )
}

