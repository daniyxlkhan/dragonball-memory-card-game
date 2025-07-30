import '../styles/Header.css';

function Header({score, bestScore}) {
    return (
        <div className="main-container">
            <div>
                <h1 className="main-heading">Dragon Ball Memory Game</h1>
                <p className="main-text">Get points by clicking on an image but don't click any more than once!</p>
            </div>
            
            <div className="score-counter">
                <p>Score: {score}</p>
                <p>Best score: {bestScore}</p>
            </div>
        </div>
    );
}

export default Header;