import '../styles/CardContainer.css';
import Card from './Card';

function CardsContainer({characters, shuffler}) {
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
          />
        ))}
      </div>
    );
}

export default CardsContainer;