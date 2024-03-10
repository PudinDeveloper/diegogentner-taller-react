import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className='container mx-auto'>
      <h2 className="text-indigo-600 text-center uppercase font-bold">
        Semana 3 del Club
      </h2>
      <h1 className='font-black text-2xl font-b text-center'>
        Rick &amp; Morty App by Diego Gentner and Carla Rodriguez | Simple API Example
      </h1>
      {characters.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  )
}

export default App
