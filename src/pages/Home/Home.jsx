import React, { useState, useEffect } from "react";
import HeroHome from "../../components/HeroHome/HeroHome";
import PodcastJourney from "../../components/Modal/PodcastSelectModals/PodcastJourney";
import PodcastCarousel from "../../components/Carousel/Carousel";
import PodcastCarouselCard, { CarouselItem } from "../../components/PodcastCards/PodcastCarouselCard";
import podcasts from '../../api/mock-api.json';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [showPodcastJourney, setshowPodcastJourney] = useState(false);

    // Functions for Podcast Journey, to enable modals to appear
    function openPodcastJourney() {
        setshowPodcastJourney(true);
    }
    function closePodcastModal() {
        setshowPodcastJourney(false);
    }

    return (
        <>
            <HeroHome openPodcastJourney={openPodcastJourney} />

            {/* Podcast journey works through the modal screens 
            responsible for user interaction to get podcast recommendation */}
            <PodcastJourney onClose={closePodcastModal} open={showPodcastJourney} />

            {/* Carousel section */}
            <div className='carousel-title'>Favourites of the Month</div>
            <div className='carousel-subtitle'>
                <p className='carousel-subtitle'>
                    A spotlight on this month's favourite Podcasts from listeners
                </p>
            </div>

            {/* Carousel on Home Screen made up with mock API data to demonstrate functionality */}
            <PodcastCarousel>
                {podcasts.podcasts.map((podcast) => (
                    <CarouselItem key={podcast.id}>
                        <PodcastCarouselCard
                            podcastimage={podcast.thumbnail}
                            podcasttitle={podcast.title}
                            podcastauthor={podcast.publisher}
                            podcastdescription={podcast.description}
                            podcastid={podcast.id}
                        />
                    </CarouselItem>
                ))}
            </PodcastCarousel>
        </>
    );
};

export default Home;
