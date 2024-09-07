import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

export default function Content(props) {

  const [busData, setBusData] = React.useState([])
  const [busInfo, setBusInfo] =  React.useState({
    busNum: "",
    stopNo: ""
  })

  const [dark, setDark] = React.useState(true)

  function handleDarkMode(){
    setDark(prevState => !prevState)
  }

  React.useEffect(function(){

    fetch("https://timelytransitbackend.onrender.com/api")
      .then(response => response.json())
      .then(data => {
        
        setBusInfo({busNum: data.GetNextTripsForStopResult.Route.RouteDirection.RouteNo, stopNo: data.GetNextTripsForStopResult.StopNo })
        setBusData(data.GetNextTripsForStopResult.Route.RouteDirection.Trips.Trip)
      
      })

  }, [])


  const cards = busData.map(item => <Card 
      startTime={item.TripStartTime} 
      latitude={item.Latitude} 
      longitude={item.Longitude} 
      destination={item.TripDestination} 
      busNo={busInfo.busNum}
      darkMode={dark}
    />)

  return (

    <main className={dark ? "dark" : ""}>
      <Navbar darkMode={dark} handleClick={handleDarkMode} stopNo={busInfo.stopNo} goBack={props.goBack}/>
      
      <div className="card-container">
        {cards}
      </div>

    </main>
  )
}

