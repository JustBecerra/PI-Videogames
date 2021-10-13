import React, {useEffect} from 'react';
import SearchBar from './SearchBar'
import './NavBar.css'
import {useSelector, useDispatch} from 'react-redux'
import {getGenres} from '../actions/getGenres'
import {AscAlph, AscRating, DescAlph, DescRating, GenreFilter, sinFiltro} from '../actions/getFilters'
import {Link} from 'react-router-dom'

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
  
  function HomeButton(e){
    dispatch(sinFiltro(e.target.value))
  }

  function handleFilterGenres(e){
    dispatch(GenreFilter(e.target.value))
  }

  return(
      <header className='Barra'>
        <SearchBar/>
        <img className='homeimage' value='sinFiltro' onClick={HomeButton} src={'https://www.nicepng.com/png/detail/89-898495_house-logo-png-home-address-logo-png.png'}/>
        <form>
          <select className='selectors' onChange={e => handleFilterBy(e)}>
            <option value='sinFiltro'>Filter by...</option>
            <option value='ASC RATING'>Best Rating</option>
            <option value='DESC RATING'>Worst Rating</option>
            <option value='ASC A-Z'>A-Z</option>
            <option value='DESC Z-A'>Z-A</option>
          </select>
          <select onChange={e => handleFilterGenres(e)}  className='selectors'>
            <option hiddendefaultvalue="true">Filter by Genres</option>
            {genres.map(g => (<option key={g.name} value={g.name}>{g.name}</option>))}
          </select>
          <Link to={'/create'}>
            <button className='selectors'>Create your own game!</button>
          </Link>
        </form>
      </header>
  )
}

export default NavBar;