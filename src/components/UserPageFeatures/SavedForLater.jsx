import React from 'react';
import PodcastCarousel from "../Carousel/Carousel";
import PodcastCarouselCard, { CarouselItem } from '../PodcastCards/PodcastCarouselCard';
import podcasts from '../../api/mock-api.json';

function SavedForLater() {
    return (

        <div className='carousel-container'>

            {/* Titles for Carousel, where CSS feeds in from Carousel.css */}
            <h1 className='carousel-title'>Saved for Later</h1>
            <div className='carousel-subtitle'>
                <p className='carousel-subtitle'>
                    You wanted to make sure you returned to these...
                </p>
            </div>

            {/* Carousel for Saved for Later component, which has mock api data within it */}
            <PodcastCarousel >
                <CarouselItem>
                    <PodcastCarouselCard
                        podcastimage={podcasts.podcasts[1].thumbnail}
                        podcasttitle={podcasts.podcasts[1].title}
                        podcastauthor={podcasts.podcasts[1].publisher}
                        podcastdescription={podcasts.podcasts[1].description}
                        podcastid={podcasts.podcasts[1].id}
                    />
                </CarouselItem>

                <CarouselItem>
                    <PodcastCarouselCard
                        podcastimage={podcasts.podcasts[0].thumbnail}
                        podcasttitle={podcasts.podcasts[0].title}
                        podcastauthor={podcasts.podcasts[0].publisher}
                        podcastdescription={podcasts.podcasts[0].description}
                        podcastid={podcasts.podcasts[0].id}
                    />
                </CarouselItem>


                <CarouselItem>
                    <PodcastCarouselCard
                        podcastimage={podcasts.podcasts[3].thumbnail}
                        podcasttitle={podcasts.podcasts[3].title}
                        podcastauthor={podcasts.podcasts[3].publisher}
                        podcastdescription={podcasts.podcasts[3].description}
                        podcastid={podcasts.podcasts[3].id}
                    />
                </CarouselItem>

                <CarouselItem>
                    <PodcastCarouselCard
                        podcastimage={podcasts.podcasts[8].thumbnail}
                        podcasttitle={podcasts.podcasts[8].title}
                        podcastauthor={podcasts.podcasts[8].publisher}
                        podcastdescription={podcasts.podcasts[8].description}
                        podcastid={podcasts.podcasts[8].id}
                    />
                </CarouselItem>
            </PodcastCarousel>

        </div>
    );
}

export default SavedForLater;


