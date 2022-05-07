
function Hogs({hogs, name, image, weight, medal, greased}){


  return (
    <div className="Hero">
      <h4>{name}</h4>
      <img src = {image} alt = "Alt mage" />
      <div className =''>
        <li>{ weight }</li>
        <li>{ greased ? "Greased" : "Not Greased" }</li>
        <li> { medal }</li>
      </div>
    </div>
  )

}

export default Hogs;