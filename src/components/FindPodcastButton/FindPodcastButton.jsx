import "./FindPodcastButton.css";

function FindPodcastButton(props) {

  return (
  
    // Component appears on homepage, and initiates interaction
    // Podcast Recommendation flow
    <button className="find-podcast-button" onClick={props.onClick}>
      FIND YOUR PODCAST
    </button>

  );
}

export default FindPodcastButton;

