import './GenreButton.css';

function GenreButton({ id, onClick, title, disabled, isActive, maxSelected }) {
    // Obtaining Genre ID from buttons once selected to feed into API
    const handleClick = () => {
        onClick(id, isActive);
    };

    return (
        // button title is passed via the Genre Modal
        <button
            className={`genre-button ${isActive && 'genre-button--checked'} ${!isActive && maxSelected && 'genre-button-max'}`}
            onClick={handleClick} disabled={disabled}
        >
            {title}
        </button>
    );
}

export default GenreButton;