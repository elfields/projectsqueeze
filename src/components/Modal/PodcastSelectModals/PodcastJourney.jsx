import "../BaseModals/Modal.css";
import { useState } from "react";
import GenreModal from "./GenreModal";
import TimeModal from "./TimeModal";
import RecommendationModal from "./RecommendationModal";

// screen to link all modals together in the podcast selection

function PodcastJourney(props) {
    
    const [screen, setScreen] = useState(1)
    const [journeyValue, setJourneyValues] = useState({})

    // Function to determine the next 'value' modal once one has been opened
    // Values are assigned to Call-to-action buttons on modals
    function nextScreen(screenValue) {
        setScreen(current => current + 1)
        setJourneyValues(previous => ({ ...previous, ...screenValue }))
    }

    // Function to determine when modal is to be closed
    // Assigned to close buttons on modals
    // The default for button will be reset back to 'login'
    function closeModal() {
        setScreen(1);
        props.onClose();
    }

    // to do nothing if there is no open prop passed
    if (!props.open)
        return null

    return (
        <>
            {/* Each modal is assigned a value for 'screen' 
            which is passed from the modals to journey for call-to-action buttons */}

            {screen === 1 && <GenreModal nextScreen={nextScreen} onClose={closeModal} />}
            {screen === 2 && <TimeModal nextScreen={nextScreen} onClose={closeModal} />}
            {screen === 3 && <RecommendationModal newSearch={setScreen} searchValues={journeyValue} nextScreen={nextScreen} onClose={closeModal} />}

        </>
    )
}

export default PodcastJourney;