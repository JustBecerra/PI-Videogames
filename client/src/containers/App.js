import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Home from '../components/Home'
import LandPage from '../components/LandPage';
import GameById from '../components/GameById';
import GameCreation from '../components/GameCreation'

export default function App() {
  return (
    <div className="App">
      <Route
        exact path='/'
        component={LandPage}
      />
      <Route
        path='/Home/:id'
        component={GameById}
      />
      <Route 
        exact path='/Home'
        component={Home}
      />
      <Route
        path='/create'
        component={GameCreation}
      />
    </div>
  );
}

