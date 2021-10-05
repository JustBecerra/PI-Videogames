import React from 'react';
import {Link} from 'react-router-dom'
import './LandPage.css'

function LandPage(){
  return(
    <div>
      <div>       
          <h1 className='titulo'>Videogame website project | made by Justo Becerra</h1>
          <Link to='/Home'><button className='boton'>Welcome!</button></Link>
      </div>
    </div>
      
  )
}

export default LandPage;