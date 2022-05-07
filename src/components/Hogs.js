
function Hogs({ name, image, weight, medal, greased, specialty}){


  return (
    <div className="Hero">
      <h4>{name}</h4>
      <img src = {image} className = "image" alt = "Alt mage" />
      <div className =''>
        <p>Specialty :{ specialty }</p>
        <p>Weight :{ weight }</p>
        <p>{ greased ? "Greased" : "Not Greased" }</p>
        <p>highest medal achieved: { medal }</p>
      </div>
    </div>
  )

}

export default Hogs;