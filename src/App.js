import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {BASE_URL} from './constants/constants';
import Characters from './components/Character';

const App = () => {
  
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
    .get(`${BASE_URL}people/`)
    .then(res => {
      console.log(res.data)
      setCharacters(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">The Bad Batch</h1>
      <Characters characters={characters}/>
    </div>
  );
}

export default App;
