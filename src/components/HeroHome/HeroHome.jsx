import './HeroHome.css';
import HeroImage from '../../assets/HeroImage.jpg';
import FindPodcastButton from '../FindPodcastButton/FindPodcastButton';

function HeroHome({ openPodcastJourney }) {

    return (

        <div className="home-background-container">

            <div className="home-background-text">

                {/* Text overlays background image */}
                <h1 className='home-header'>Squeeze</h1>
                <p className='home-tagline'>
                    Find a podcast to suit your needs
                </p>

                {/* Button begins user's journey to finding a Podcast recommendation */}
                <FindPodcastButton onClick={openPodcastJourney} />

            </div>

            <img className="home-background-image" src={HeroImage} 
                alt="Hand holding blue and white over-ear headphones in a Yellow background" 
            />

        </div>

    )
};

export default HeroHome;