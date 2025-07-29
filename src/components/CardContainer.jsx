import '../styles/CardContainer.css';
import Card from './Card';

function CardsContainer({characters}) {

    return (
        <div className="cards-container">
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