import './RecommendationPodcastCard.css';
import { Link } from 'react-router-dom';

const PodcastCard = ({ searchValues, recommendationValue, onSkip, onClose }) => {

    console.log(searchValues)
    console.log(recommendationValue)

    return (
        <div className='rec-podcast-card-test'>

            <div className="rec-podcast-card-body">
                <div className="rec-podcast-card-image">
                    <img className="rec-podcast-art" variant="top" src={recommendationValue.thumbnail} alt="recommendation thumbnail" />
                </div>
                <div className='rec-podcast-card-content'>

                    <div className='watch-fave-container'>
                        {/* Favourite button, mock up, display only */}
                        <div className="card-svg-button-section" title="Add to favourites">
                            <svg className="card-favourite-svg" title="Add to favourites" version="1.1" x="0px" y="0px" viewBox="0 0 217.929 217.929" >
                                <path d="M212.39,101.703c5.023-4.897,6.797-12.083,4.629-18.755s-7.827-11.443-14.769-12.452l-52.969-7.697c-0.097-0.014-0.18-0.075-0.223-0.162L125.371,14.64C122.267,8.349,115.98,4.44,108.964,4.44S95.662,8.349,92.558,14.64L68.87,62.637c-0.043,0.087-0.126,0.147-0.223,0.162l-52.968,7.697c-6.942,1.009-12.601,5.78-14.769,12.452s-0.394,13.858,4.629,18.755l38.328,37.361c0.07,0.068,0.102,0.166,0.085,0.262l-9.048,52.755c-1.186,6.914,1.604,13.771,7.279,17.894c5.676,4.125,13.059,4.657,19.268,1.393l47.376-24.907c0.086-0.046,0.19-0.045,0.276,0l47.376,24.907c2.701,1.42,5.623,2.121,8.531,2.121c3.777,0,7.53-1.184,10.736-3.514c5.675-4.123,8.464-10.98,7.279-17.895l-9.048-52.754c-0.017-0.096,0.016-0.194,0.085-0.262L212.39,101.703z M156.235,142.368l9.048,52.754c0.024,0.14,0.031,0.182-0.118,0.29c-0.149,0.108-0.187,0.088-0.312,0.022l-47.377-24.908c-5.33-2.801-11.695-2.801-17.027,0l-47.376,24.907c-0.125,0.065-0.163,0.086-0.312-0.022c-0.149-0.108-0.142-0.15-0.118-0.289l9.048-52.755c1.018-5.936-0.949-11.989-5.262-16.194L18.103,88.813c-0.101-0.099-0.132-0.128-0.075-0.303c0.057-0.175,0.099-0.181,0.239-0.202l52.968-7.697c5.961-0.866,11.111-4.607,13.776-10.008l23.688-47.998c0.063-0.126,0.081-0.165,0.265-0.165s0.203,0.039,0.265,0.165l23.688,47.998c2.666,5.401,7.815,9.143,13.776,10.008l52.968,7.697c0.14,0.021,0.182,0.027,0.239,0.202c0.057,0.175,0.026,0.205-0.075,0.303l-38.328,37.361C157.185,130.378,155.218,136.432,156.235,142.368z" />
                            </svg>
                        </div>

                        {/* Watch later button, mock up, display only */}
                        <div className="card-svg-button-section" title="Watch later">
                            <svg className="card-watchlater-svg" title="Watch later" version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
                                <path d="M507.203,205.836C487.977,105.187,406.813,24.023,306.164,4.797C126.117-29.594-29.594,126.117,4.797,306.164c19.227,100.648,100.391,181.813,201.039,201.039C385.883,541.594,541.594,385.883,507.203,205.836z M374.625,374.625C368.375,380.875,360.188,384,352,384s-16.375-3.125-22.625-9.375l-96-96c-6-6-9.375-14.125-9.375-22.625V128c0-17.688,14.328-32,32-32s32,14.313,32,32v114.75l86.625,86.625C387.125,341.875,387.125,362.125,374.625,374.625z" />
                            </svg>
                        </div>
                    </div>

                    <h4 className="rec-podcast-card-title">{recommendationValue.podcast.title_original}</h4>
                    <div className="rec-podcast-card-subtitle">{recommendationValue.podcast.publisher_original}</div>
                    <div className="rec-podcast-card-text">
                        <p className="rec-podcast-card-text"
                            dangerouslySetInnerHTML={{ __html: recommendationValue.description_highlighted }}>
                        </p>
                    </div>
                </div>
                {/* <ReactAudioPlayer src= { props.recommendationValue.audio } controls /> */}
                <Link id='recommendation-listen' to={`/listen/${recommendationValue.podcast.id}`} onClick={onClose}>
                    <button className="rec-card-listen-button" variant="primary">Listen</button>
                </Link>
                <button
                    id='recommendation-skip'
                    type="submit"
                    onClick={() => onSkip(previous => previous + 1)}
                    className="rec-skip-button"
                >
                    Skip
                </button>
            </div>
        </div>
    )
};

export default PodcastCard;



