import React, {useState} from 'react';
import { useDispatch} from 'react-redux'
import {getGameByQuery} from '../actions/getGameByQuery'
import './SearchBar.css'

function SearchBar(){
  const [search, setSearch] = useState('');  
  const dispatch = useDispatch()
  
  async function handleSubmit(e){
    
    e.preventDefault();
    if(search){
      dispatch(await getGameByQuery(search))
      loadingSign = 'game is being queried'
      setSearch('');
    }else if(search === null){
      alert('that is not a game')
    }
  }
  
  function handleChange(e){
    setSearch(e.target.value)
  }
  var loadingSign
return(
    <div>
        <form onSubmit={handleSubmit}> 
          <input
            type='text' 
            placeholder='Search game'
            value={search}
            onChange={handleChange}
          />
          <button className='barrita' type="submit">Search</button>
          <div>{typeof loadingSign === 'string' ? loadingSign : ''}</div>
        </form>
        
    </div>
    )
}

export default SearchBar;