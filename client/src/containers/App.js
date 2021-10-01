import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Home from '../components/Home'
import LandPage from '../components/LandPage';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function App() {
  const [videogames, setVideogames] = useState('Hooks');


  return (
    <div className="App">
      <Route
        exact path='/'
        render={() => <LandPage/>}
      />
      
    
      <Route 
        path='/Home'
        render={() => <Home/>}
      />
    </div>
  );
}

