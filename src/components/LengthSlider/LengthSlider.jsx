import "./LengthSlider.css";
import ReactSlider from "react-slider";

const LengthSlider = ({ onChange, value, disabled }) => {
  return (
    // The slider that is used on the length modal
    // for selecting time
    <ReactSlider
      className="time-length-slider"
      trackClassName="time-length-slider-track"
      thumbClassName="time-length-slider-thumb"
      markClassName="time-length-slider-mark"
      onChange={onChange}
      defaultValue={0}
      value={value}
      disabled={disabled}
      min={0}
      max={7}
      renderMark={(props) => {
        if (props.key < value) {
          props.className = "time-length-slider-mark time-length-slider-mark-completed";
        } else if (props.key === value) {
          props.className = "time-length-slider-mark time-length-slider-mark-active";
        }
        return <span {...props} />
      }}
    />
  )
};

export default LengthSlider;
