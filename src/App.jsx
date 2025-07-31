import { useState, useEffect, use } from 'react'
import { shuffle } from 'lodash';
import './App.css'

import CardsContainer from './components/CardContainer'

import Header from './components/Header'

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateScore = (action) => {
    if (action === 'reset') {
      if (score > bestScore) {
        setBestScore(score);
        setScore(0);
      }
    } else if (action === 'increment') {
      setScore(prevScore => prevScore + 1);
    }
  } 

  const updateBestScore = () => {
    setBestScore(prevBestScore => prevBestScore + 1);
  }

  const shuffler = () => {
    setCharacters(prevCharacters => shuffle(prevCharacters));
  }

  useEffect(() => {
    const fetchAndFilterData = async () => {
      try {
        const data = await getDragonBallCharacters();
        // Only keep id, name and image properties
        let filteredCharacters = data.items
          .map(character => ({
            id: character.id,
            name: character.name,
            image: character.image
          }));
        
        // Shuffle the characters before setting them in state
        const shuffledCharacters = shuffle(filteredCharacters);
        setCharacters(shuffledCharacters);
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
      <Header
        score={score}
        bestScore={bestScore}
      />
      <CardsContainer 
        characters={characters}
        shuffler={shuffler}
        updateScore={updateScore}
      />
    </>
  )
}

async function getDragonBallCharacters() {
  try {
    const response = await fetch("https://dragonball-api.com/api/characters?limit=12");
    
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
