import React from 'react';
import PodcastCarousel from "../Carousel/Carousel";
import PodcastCarouselCard, { CarouselItem } from '../PodcastCards/PodcastCarouselCard';
import podcasts from '../../api/mock-api.json';

function MyFavourites() {
    return (

        <div className='carousel-container'>

            {/* Titles for Carousel, where CSS feeds in from Carousel.css */}
            <h1 className='carousel-title'>My Favourites</h1>
            <div className='carousel-subtitle'>
                <p className='carousel-subtitle'>
                    Of all the random picks, you loved these the best...
                </p>
            </div>

            {/* Carousel for My Favourites component, which has mock api data within it */}
            <PodcastCarousel>
                <CarouselItem>
                    <PodcastCarouselCard
                        podcastimage={podcasts.podcasts[17].thumbnail}
                        podcasttitle={podcasts.podcasts[17].title}
                        podcastauthor={podcasts.podcasts[17].publisher}
                        podcastdescription={podcasts.podcasts[17].description}
                        podcastid={podcasts.podcasts[17].id}
                    />
                </CarouselItem>

                <CarouselItem>
                    <PodcastCarouselCard
                        podcastimage={podcasts.podcasts[16].thumbnail}
                        podcasttitle={podcasts.podcasts[16].title}
                        podcastauthor={podcasts.podcasts[16].publisher}
                        podcastdescription={podcasts.podcasts[16].description}
                        podcastid={podcasts.podcasts[16].id}
                    />
                </CarouselItem>
            </PodcastCarousel>

        </div>
    );
}

export default MyFavourites;