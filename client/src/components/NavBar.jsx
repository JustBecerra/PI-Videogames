import React, {useEffect} from 'react';
import SearchBar from './SearchBar'
import Barra from './NavBar.css'
import {useSelector, useDispatch} from 'react-redux'
import {getGenres} from '../actions/getGenres'

function NavBar(){
  const dispatch = useDispatch()
  let genres = useSelector(state => state.genres)
  
  useEffect(() => {
    (async () => {
      dispatch(await getGenres())
    })()
  },[])
  
  

  return(
      <div>
        <SearchBar/>
        <form>
          <select>
            <option hiddendefaultValue>Filter by...</option>
            <option>Best Rating</option>
            <option>Worst Rating</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
          <select>
            <option hiddendefaultValue>Filter by Genres</option>
            {genres.map(g => (<option value={g.name}>{g.name}</option>))}
          </select>
        </form>     
      </div>
  )
}

export default NavBar;