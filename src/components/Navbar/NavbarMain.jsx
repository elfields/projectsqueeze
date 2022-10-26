import React, { useState } from 'react';
import SqueezeLogo from '../../assets/SqueezeLogo';
import "./Navbar.css";
import PodcastJourney from "../Modal/PodcastSelectModals/PodcastJourney";
import { Link } from 'react-router-dom';
import LoginJourney from '../Modal/LoginModals/LoginJourney';

const Navbar = () => {
  const [showLoginJourney, setshowLoginJourney] = useState(false);
  const [showPodcastJourney, setshowPodcastJourney] = useState(false);

  function openPodcastJourney() {
    setshowPodcastJourney(true);
  }

  function closePodcastModal() {
    setshowPodcastJourney(false);
  }

  // Functions for Login Journey, to enable modals to appear
  function openLoginJourney() {
    setshowLoginJourney(true);
  }

  function closeLoginModal() {
    setshowLoginJourney(false);
  }

  return (
    <header className='nav-container'>

      {/* Logo on the Navigation bar which links to home */}
      <div className='nav-logo-container'>
        <Link to='/'>
          <SqueezeLogo />
        </Link>
      </div>

      {/* Links on Navbar to different pages/modules. */}
      <nav className='nav-button-container'>
        <Link to="/" className='nav-button'>Home</Link>
        <button className='nav-button' onClick={openPodcastJourney}>Listen</button>
        <button className='nav-button' onClick={openLoginJourney}>Login</button>
        <Link to="/User" className='nav-button'>User</Link>
      </nav>


      {/* Podcast journey works through the modal screens 
      responsible for user interaction to get podcast recommendation */}
      <PodcastJourney onClose={closePodcastModal} open={showPodcastJourney} />



      {/* Login journey works through the modal screens
      responsible for user login and password reset journeys */}
      <LoginJourney onClose={closeLoginModal} open={showLoginJourney} />

    </header>
  )
}

export default Navbar;