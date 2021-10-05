import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getGameByQuery} from '../actions/getGameByQuery'
import Game from './Game'

function SearchBar(){
  const [search, setSearch] = useState('');  
  const dispatch = useDispatch()
  let games = useSelector(state => state.gamesQuery)
  
  async function handleSubmit(e){
    e.preventDefault();
    if(search){
      dispatch(await getGameByQuery(search))
      setSearch('');
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
          <input type='text' 
            placeholder='Search game'
            value={search}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
        {games.map(g => {return <Game key={g.id} id={g.id} name={g.name} rating={g.rating} image={g.background_image} genres={g.genres}/>})}
    </div>
    )
}

export default SearchBar;