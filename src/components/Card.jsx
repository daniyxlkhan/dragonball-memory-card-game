import '../styles/Card.css';
import { useState } from 'react';

function Card({ id, name, image, updateScore, updateBestScore }) {
    const [clicked, setClicked] = useState('No');

    const handleClick = () => {
        if (clicked === 'Yes') {
            updateScore(0);
        } else {
            updateBestScore(prevScore => prevScore + 1);
            updateScore(prevScore => prevScore + 1);
            setClicked('Yes');
        }
    }

    return (
        <div className='card' onClick={handleClick} data-id={id}>
            <img className='image' src={image} alt={name} />
            <span className='name'>{name}</span>
        </div>
    );
}

export default Card;