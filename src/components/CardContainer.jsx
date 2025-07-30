import '../styles/CardContainer.css';
import Card from './Card';
import { useState } from 'react';

function CardsContainer({characters, shuffler, updateScore, updateBestScore}) {
    const [isFlipping, setIsFlipping] = useState(false);

    const handleClick = () => {
        // Start flip animation for all cards
        setIsFlipping(true);
        
        // After cards are flipped (showing back), shuffle them
        setTimeout(() => {
            shuffler(); // Shuffle while cards are showing back side
        }, 300); // Wait for flip animation to complete
        
        // Flip cards back to reveal new order
        setTimeout(() => {
            setIsFlipping(false);
        }, 1000); // Show back side for 700ms, then flip back
    }
    
    return (
        <div className="cards-container" onClick={handleClick}>
        {characters.map((character) => (
          <Card 
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            updateScore={updateScore}
            updateBestScore={updateBestScore}
            isFlipped={isFlipping}
          />
        ))}
      </div>
    );
}

export default CardsContainer;