import React, { useState } from "react";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import LengthSlider from "../../LengthSlider/LengthSlider"
import Step from "../../LengthSlider/TimeIncrements";
import BaseModal from "../BaseModals/BaseModal";

const TimeModal = ({ onClose, nextScreen }) => {
    const [sliderValue, setSliderValue] = useState(0)
    const [isAnyLength, setIsAnyLength] = useState(false)

    const onChangeIsAnyLength = () => setIsAnyLength(!isAnyLength);

    function handleSubmit() {
        if (isAnyLength) {
            // sets to max podcast length of 2 hours
            return nextScreen({ time: 7 })
        }
        nextScreen({ time: sliderValue })
    }

    function handleSliderChange(value) {
        setSliderValue(value)
    }

    return (
        <BaseModal title='Select your preferred length:' onClose={onClose}>
            <div className='toggle-container'>
                <ToggleSwitch
                    label="Any length"
                    className='genre-toggle'
                    onToggle={onChangeIsAnyLength}
                    value={isAnyLength}
                />
            </div>
            <p id='choose-length'>Or choose how much time you have:</p>
            {/* Slider to allow users to select time input for recommendation */}
            <div className='time-slider-container'>
                <LengthSlider value={sliderValue} onChange={handleSliderChange} disabled={isAnyLength} />
            </div>
            {/* Container which returns time value according to position of slider */}
            <div className="value-slider-container">
                <Step currentIndex={sliderValue} isAnyLength={isAnyLength} />
            </div>
            {/* Submit button which then leads user to Podcast Recommendation */}
            <button type="submit" onClick={handleSubmit} className="button">Submit</button>
        </BaseModal>
    )
}

export default TimeModal;
