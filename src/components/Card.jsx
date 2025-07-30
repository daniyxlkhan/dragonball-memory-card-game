import '../styles/Card.css';
import { useState } from 'react';

function Card({ id, name, image }) {
    const [clicked, setClicked] = useState('No');

    const handleClick = () => {
        if (clicked === 'Yes') {
            console.log(`This characeter has already been clicked ${id}`);
        } else {
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