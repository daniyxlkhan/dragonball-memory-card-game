import '../styles/Card.css';

function Card({ id, name, image }) {
    return (
        <div className='card'>
            <img className='image' src={image} alt={name} />
            <span className='name'>{name}</span>
        </div>
    );
}

export default Card;