import React from "react";
import "../../components/HeroListen/HeroListen.css";
import HeroListen from "../../components/HeroListen/HeroListen";
import PodcastCarousel from "../../components/Carousel/Carousel";
import PodcastCarouselCard, { CarouselItem } from "../../components/PodcastCards/PodcastCarouselCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPodcast } from "../../api/podcastApi";
import podcasts from '../../api/mock-api.json';


// Defines the layout of the listen page with the podccast result at top in our listen page hero (components) and a further 
// suggestions carousel below.

function Listen() {
    const [podcast, setPodcast] = useState();
    let { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    useEffect(() => {
        async function getPodcastByID() {
            const podcastResult = await getPodcast(id)
            setPodcast(podcastResult)
        }
        getPodcastByID()
    }, [id]);

    return (
        <div>
            {podcast && <HeroListen podcast={podcast} />}
            <div className='carousel-title'>
                And on that topic..
            </div>
            <div className='carousel-subtitle'>
                <p className='carousel-subtitle'>
                    Similar podcasts you may enjoy
                </p>
            </div>

            <PodcastCarousel>
                {podcasts.podcasts.slice(3, 9).map((podcast) => (
                    <CarouselItem key={podcast.id}>
                        <PodcastCarouselCard
                            podcastimage={podcast.thumbnail}
                            podcasttitle={podcast.title}
                            podcastauthor={podcast.publisher}
                            podcastdescription={podcast.description}
                            podcastid={podcast.id} />
                    </CarouselItem>
                ))}
            </PodcastCarousel>
        </div>
    )
}


export default Listen;