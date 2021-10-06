import React, {useEffect} from 'react';
import SearchBar from './SearchBar'
import './NavBar.css'
import {useSelector, useDispatch} from 'react-redux'
import {getGenres} from '../actions/getGenres'
import {AscAlph, AscRating, DescAlph, DescRating, GenreFilter, sinFiltro} from '../actions/getFilters'


function NavBar(){
  const dispatch = useDispatch()
  let genres = useSelector(state => state.genres)
  
  useEffect(() => {
    (async () => {
      dispatch(await getGenres())
    })()
  },[])
  
  function handleFilterBy(e){
    if(e.target.value === 'ASC A-Z'){
      dispatch(AscAlph(e.target.value))
    }else if(e.target.value === 'DESC Z-A'){
      dispatch(DescAlph(e.target.value))
    }else if(e.target.value === 'ASC RATING'){
      dispatch(AscRating(e.target.value))
    }else if(e.target.value === 'DESC RATING'){
      dispatch(DescRating(e.target.value))
    }else if(e.target.value === 'sinFiltro'){
      dispatch(sinFiltro(e.target.value))
    }
  }
  
  function handleFilterGenres(e){
    dispatch(GenreFilter(e.target.value))
  }

  return(
      <div className='Barra'>
        <SearchBar/>
        <form>
          <select className='selectors' onChange={e => handleFilterBy(e)}>
            <option Value='sinFiltro'>Filter by...</option>
            <option value='ASC RATING'>Best Rating</option>
            <option value='DESC RATING'>Worst Rating</option>
            <option value='ASC A-Z'>A-Z</option>
            <option value='DESC Z-A'>Z-A</option>
          </select>
          <select onChange={e => handleFilterGenres(e)}  className='selectors'>
            <option hiddendefaultValue>Filter by Genres</option>
            {genres.map(g => (<option value={g.name}>{g.name}</option>))}
          </select>
        </form>     
      </div>
  )
}

export default NavBar;