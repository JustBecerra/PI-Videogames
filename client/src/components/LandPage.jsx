import React from 'react';
import {Link} from 'react-router-dom'
import './LandPage.css'

function LandPage(){
  return(
    <div>
      <div>
          <Link to='/Home'><button>Enter</button></Link>
          <h1>Videogame website project | made by Justo Becerra</h1>
      </div>
    </div>
      
  )
}

export default LandPage;