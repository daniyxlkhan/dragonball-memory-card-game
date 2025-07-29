import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CardsContainer from './components/CardContainer'

import Header from './components/Header'

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndFilterData = async () => {
      try {
        const data = await getDragonBallCharacters();
        // Only keep name and image properties
        const filteredCharacters = data.items
          .map(character => ({
            id: character.id,
            name: character.name,
            image: character.image
          }));
        setCharacters(filteredCharacters); 
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
        setLoading(false);
      }
    };

    fetchAndFilterData();
  }, []);

  console.log("Characters:", characters);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header/>
      <CardsContainer characters={characters}/>
    </>
  )
}

async function getDragonBallCharacters() {
  try {
    const response = await fetch("https://dragonball-api.com/api/characters");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default App;
