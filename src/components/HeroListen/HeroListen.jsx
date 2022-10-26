import './HeroListen.css'
import ReactAudioPlayer from 'react-audio-player';


function HeroListen({ podcast }) {

    return (

        <div className='hero-listen'>

            <div className="header-text">

                <h1>You're listening to...</h1>

            </div>

            <div className='podcast-media'>

                {/* Thumbnail from Podcast */}
                <img className='podcast-art' src={podcast.thumbnail}
                    alt="Podcast thumbnail provided by producer"
                />

                {/* Audio Player with prop for audio URL being passed via API */}
                <ReactAudioPlayer
                    src={podcast.episodes[1].audio}
                    controls
                />

            </div>

            {/* Data such as Title, Host and Description of Podcast 
            passed into details below via the API*/}
            <div className='podcast-information'>

                <h2> {podcast.title} </h2>
                {/* <h3> {podcast.publisher}</h3> <<< Could we add in 'episode' title? */}
                <h3> <i>{podcast.episodes[1].title}</i></h3>
                <h3> {podcast.publisher}</h3>
                <p className='description' dangerouslySetInnerHTML={{ __html: podcast.episodes[1].description }}>

                </p>

            </div>
        </div>
    )
};

export default HeroListen;