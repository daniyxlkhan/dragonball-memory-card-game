import '../styles/Card.css';
import { useState } from 'react';
import dragonBallBack from '../assets/dragonball_card_back.jpg';

function Card({ id, name, image, updateScore, isFlipped }) {
    const [clicked, setClicked] = useState('No');

    const handleClick = () => {
        if (clicked === 'Yes') {
            updateScore('reset');
        } else {
            updateScore('increment');
            setClicked('Yes');
        }
    }

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick} data-id={id}>
            <div className="card-inner">
                {/* Front side - Character */}
                <div className="card-front">
                    <img className='image' src={image} alt={name} />
                    <span className='name'>{name}</span>
                </div>
                
                {/* Back side - Dragon Ball card back */}
                <div className="card-back">
                    <img className='back-image' src={dragonBallBack} alt="Dragon Ball Card Back" />
                </div>
            </div>
        </div>
    );
}

export default Card;