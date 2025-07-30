import '../styles/CardContainer.css';
import Card from './Card';

function CardsContainer({characters, shuffler, updateScore, updateBestScore}) {
    const handleClick = () => {
        shuffler();
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
          />
        ))}
      </div>
    );
}

export default CardsContainer;