import "./ToggleSwitch.css"

// Toggle Switch to be used on the Genre Modal and the Length/Time modal
function ToggleSwitch({ label, onToggle, value }) {
  return (
    <div className='togglecontainer'>
      <label className="toggle-switch">
        <input type="checkbox" checked={value} onChange={onToggle} />
        <span className="switch" />
        <span id='any-genre'>{label}</span>
      </label>
    </div >

  )
}

export default ToggleSwitch;