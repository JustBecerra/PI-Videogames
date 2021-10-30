import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {getGameByQuery} from '../actions/getGameByQuery'
import './SearchBar.css'

function SearchBar(){
  const [search, setSearch] = useState('');  
  const dispatch = useDispatch()
  let games = useSelector(state => state.games)

  async function handleSubmit(e){
    e.preventDefault();
    if(search){
      if(games.some(elem => elem.name.includes(search))){
        let filtGames = games.filter(VG => VG.name.includes(search))
        dispatch(await getGameByQuery(filtGames))
        setSearch('');
      }
    }else if(search === null){
      alert('that is not a game')
    }
  }
  
  function handleChange(e){
    setSearch(e.target.value)
  }
return(
    <div>
        <form onSubmit={handleSubmit}> 
          <input
            type='text' 
            className='barrita'
            placeholder='Search game'
            value={search}
            onChange={handleChange}
          />
          <button className='botonsearch' type="submit">Search</button>
        </form>
    </div>
    )
}

export default SearchBar;