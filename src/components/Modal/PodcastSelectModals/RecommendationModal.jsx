import React, { useState, useEffect } from "react";
import PodcastCard from "../../PodcastCards/PodcastRecommendationCard";
import { getPodcastsByGenreAndMaxLength } from "../../../api/podcastApi";
import SadLemon from "../../../assets/SadLemon.PNG";
import BaseModal from "../BaseModals/BaseModal";

// Establishing time increments for API
// This is used in conjuncture with time length slider
const steps = [15, 30, 45, 60, 75, 90, 105, 120];

const RecommendationModal = ({ searchValues, onClose, newSearch }) => {
    const [skipCount, setSkipCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [podcastRecommendedData, setPodcastRecommendedData] = useState([]);

    // Calling the API
    useEffect(() => {
        // Functionality for when 'Genre and Time' values are returned
        // This will then feed into the API to gather recommendations
        async function getPodcasts() {
            const podcasts = await getPodcastsByGenreAndMaxLength(searchValues.genres, steps[searchValues.time]);
            setPodcastRecommendedData(podcasts)
            setLoading(false)
        }
        getPodcasts();
    }, [searchValues.genres, searchValues.time]);

    const currentPodcast = podcastRecommendedData[skipCount];

    return (
        <BaseModal
            title={
                !currentPodcast && !loading
                    ? "You've squeezed all our recommendations out of this search:"
                    : "Our Recommendation, freshly squeezed for you:"
            }
            onClose={onClose}
        >
            {/* Container for Podcast recommendations */}
            <div className="modal-recommendation-container">
                {/* If data is loading, show this screen */}
                {loading && (<div className="loading">Loading podcasts</div>)}
                {/* Else if show this Podcast Recommendation card, and store 'skip' count if skip button is pressed */}
                {currentPodcast && (
                    <PodcastCard
                        onSkip={setSkipCount}
                        onClose={onClose}
                        recommendationValue={currentPodcast}
                    />
                )}
                {/* Once user has skipped all returned recommendations, a message is triggered */}
                {!currentPodcast && !loading && (
                    <div>
                        <img src={SadLemon} alt="Lemon squeezing out tears of sadness" />
                        <div className="recommendation-buttons">
                            <button onClick={() => setSkipCount(0)} className="repeat-button"> Repeat Recommendations </button>
                            <button onClick={() => newSearch(1)} className="reset-button"> Reset Search </button>
                        </div>
                    </div>
                )}
            </div>
        </BaseModal>
    );
};
export default RecommendationModal;

