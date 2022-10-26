import './Carousel.css';
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function PodcastCarousel({ children, width }) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    // For updating the index and position for each carousel card
    // So that the arrows can be used to move through carousel
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 3;
        }
        else if (newIndex >= (React.Children.count(children) - 2)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    // Setting carousel to auto scroll at 3000fps
    // This will only scroll if a card isn't being actively hovered over
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    // Allowing the ability to swipe through carousel on touchscreen functionality
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (

        // Determining when a card is being hovered over, to pause auto-scroll
        <div
            {...handlers}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >

            {/* Container which hosts the carousel cards / items */}
            <div className='carousel-contents' style={{ transform: `translateX(-${activeIndex * 450}px)` }}>

                {/* This is where the cards (Children) are being passed */}
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "50%" });
                })}

            </div>

            {/* Arrow buttons for interacting with the carousel */}
            <div className='podcast-carousel-buttons'>

                <div className="back-button-section">
                    <svg className="previous-arrow" onClick={() => { updateIndex(activeIndex - 1); }}
                        version="1.1" x="0px" y="0px" viewBox="0 0 59.414 59.414"> <polygon points="45.268,1.414 43.854,0 14.146,29.707 43.854,59.414 45.268,58 16.975,29.707 " />
                    </svg>
                </div>

                <div className="forward-button-section">
                    <svg className="next-arrow" onClick={() => { updateIndex(activeIndex + 1); }}
                        version="1.1" x="0px" y="0px" viewBox="0 0 59.414 59.414" > <polygon points="15.561,0 14.146,1.414 42.439,29.707 14.146,58 15.561,59.414 45.268,29.707 " />
                    </svg>
                </div>

            </div>

        </div>
    );


};

export default PodcastCarousel;