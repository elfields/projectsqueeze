import React from "react";

const steps = ["15 mins", "30 mins", "45 mins", "1 Hour", "1hr 15", "1hr 30", "1hr 45", "2hrs+"];

const Step = ({ currentIndex, isAnyLength }) => {

  return (

    // Container that is used to indicate the time that has been
    // Selected from the length slider, on the Time modal
    <div className="steps-container">
      <h3>
        {isAnyLength ? "Any Length" : steps[currentIndex]}
      </h3>
    </div>

  );
};

export default Step;