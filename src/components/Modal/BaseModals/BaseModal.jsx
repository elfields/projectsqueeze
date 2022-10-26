import { useEffect } from "react";
import "./Modal.css";

const BaseModal = ({ title, onClose, children, header }) => {
  //Hides scroll on Modal mount and enables scroll on unMount
  useEffect(() => {
    //Enables scroll onMount
    document.body.style.overflow = 'hidden';
    //Enables scroll onUnmount
    return () => {
      document.body.style.overflow = '';
    }
  }, []);


  //Close modal when user clicks outside of main modal
  function handleClickOutside() {
    onClose()
  }

  //Stops the handleClickOutside function from being called when click is inside modal
  function stopClick(event) {
    event.stopPropagation()
  }

  return (
    // Main Modal Window CSS to implement styling to background page
    <div className="main-modal-window" onClick={handleClickOutside}>
      {/* Style for the modal's content */}
      <div className="main-modal-content" onClick={stopClick}>
        {/* Close Icon */}
        <div onClick={onClose} className="close-container">
          <svg version="1.1" className="close-icon" x="0px" y="0px" viewBox="0 0 47.971 47.971">
            <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
          </svg>
        </div>
        {/* Header space in Modal */}
        <div className="main-modal-header">
          {header}
        </div>

        {/* Main content of modal for user interaction */}
        <div className="main-modal-body">

          <div className="main-modal-title">
            {title}
          </div>
          {children}
        </div>

        <div className="main-modal-footer"></div>


      </div>

    </div>
  )
}

export default BaseModal;