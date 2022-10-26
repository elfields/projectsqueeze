import React, { useState } from "react";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import GenreButton from "../../GenreButton/GenreButton";
import BaseModal from "../BaseModals/BaseModal";

// Linking the Genre options to their relevant ID in the API data
const genreButtons = [
    { id: 88, title: "Health" },
    { id: 134, title: "Music" },
    { id: 135, title: "True Crime" },
    { id: 133, title: "Comedy" },
    { id: 68, title: "TV / Film" },
    { id: 111, title: "Education" },
    { id: 107, title: "Science" },
    { id: 99, title: "News" },
    { id: 168, title: "Fiction" }
];

// Limits the selection to only 3 categories
function shouldToggleGenre(currentSelectedGenres, newId) {
    if (currentSelectedGenres.includes(newId)) {
        return currentSelectedGenres.filter(genre => genre !== newId)
    }
    if (currentSelectedGenres.length >= 3) {
        return currentSelectedGenres;
    }
    return [...currentSelectedGenres, newId]
}

const GenreModal = ({ nextScreen, onClose }) => {
    const [genres, setGenres] = useState([])
    const [isAnyCategory, setIsAnyCategory] = useState(false);

    const onChangeIsAnyCategory = () => setIsAnyCategory(!isAnyCategory);

    // Function setup to pass Genre ID's for selected buttons over to API call
    function toggleGenre(genreId) {
        setGenres((currentSelectedGenres) => shouldToggleGenre(currentSelectedGenres, genreId))
    }

    // Handling communication between modal screens
    function handleSubmit() {
        if (isAnyCategory) {
            return nextScreen({ genres: [] })
        }
        nextScreen({ genres })
    }

    return (
        <BaseModal title='Select your preferred category:' onClose={onClose}>
            {/* If toggled, all buttons are disabled */}
            <div className='genre-toggle-container'>
                <ToggleSwitch
                    label="Any category"
                    onToggle={onChangeIsAnyCategory}
                    value={isAnyCategory}
                />
            </div>
            <p id='choose-genre'>
                Or you can choose up to 3 categories:
            </p>
            {/* Genre buttons which then feed into the Podcast Recommendation Screen */}
            <div className='genre-button-container'>
                {genreButtons.map(({ id, title }) => (
                    <GenreButton
                        key={id}
                        onClick={toggleGenre}
                        id={id}
                        title={title}
                        disabled={isAnyCategory}
                        isActive={genres.includes(id)}
                        maxSelected={genres.length >= 3}
                    />
                ))}
            </div>
            {/* Button which leads user from Genre to Time selection modal */}
            <button
                type="submit"
                onClick={handleSubmit}
                className="button"
            >
                Next
            </button>
        </BaseModal>

    )
}
export default GenreModal;