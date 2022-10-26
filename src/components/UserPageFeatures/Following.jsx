import React from 'react';
import PodcastCarousel from "../Carousel/Carousel";
import PodcastCarouselCard, { CarouselItem } from '../PodcastCards/PodcastCarouselCard';
import podcasts from '../../api/mock-api.json';

function Following() {
    return (

        <div className='saved-later-container'>

            {/* Titles for Carousel, where CSS feeds in from Carousel.css */}
            <h1 className='carousel-title'>Following</h1>
            <div className='carousel-subtitle'>
                <p className='carousel-subtitle'>
                    You love what these hosts are producing...
                </p>
            </div>

            {/* Carousel for Following component, which has mock api data within it */}
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
            </PodcastCarousel>

        </div>
    );
}

export default Following;