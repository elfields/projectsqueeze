import React from 'react';
import PodcastCarousel from "../Carousel/Carousel";
import PodcastCarouselCard, { CarouselItem } from '../PodcastCards/PodcastCarouselCard';
import podcasts from '../../api/mock-api.json';


function ListenHistory() {
    return (

        <div className='carousel-container'>

            {/* Titles for Carousel, where CSS feeds in from Carousel.css */}
            <h1 className='carousel-title'>Listen History</h1>
            <div className='carousel-subtitle'>
                <p className='carousel-subtitle'>
                    What you have listened to this month...
                </p>
            </div>

            {/* Carousel for Listen History component, which has mock api data within it */}
            <PodcastCarousel>
                <CarouselItem>
                    <PodcastCarouselCard
                        podcastimage={podcasts.podcasts[19].thumbnail}
                        podcasttitle={podcasts.podcasts[19].title}
                        podcastauthor={podcasts.podcasts[19].publisher}
                        podcastdescription={podcasts.podcasts[19].description}
                        podcastid={podcasts.podcasts[19].id}
                    />
                </CarouselItem>

                <CarouselItem>
                    <PodcastCarouselCard
                        podcastimage={podcasts.podcasts[14].thumbnail}
                        podcasttitle={podcasts.podcasts[14].title}
                        podcastauthor={podcasts.podcasts[14].publisher}
                        podcastdescription={podcasts.podcasts[14].description}
                        podcastid={podcasts.podcasts[14].id}
                    />
                </CarouselItem>
            </PodcastCarousel>

        </div>
    );
}

export default ListenHistory;