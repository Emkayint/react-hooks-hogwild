import { useState } from "react";

function Hogs({ name, image, weight, medal, greased, specialty}){

  const [display, setdisplay] = useState(true)

  const classTart = display ? "none" : "block"

  function handleInfo(){
    setdisplay(display => !display)
  }
  return (
    <div className="Hero" onClick={handleInfo}>
      <h4>{name}</h4>
      <img src = {image} className = "image" alt = "Alt mage" />
      <div className = { classTart }>
        <p>Specialty :{ specialty }</p>
        <p>Weight :{ weight }</p>
        <p>{ greased ? "Greased" : "Not Greased" }</p>
        <p>highest medal achieved: { medal }</p>
      </div>
    </div>
  )

}

export default Hogs;