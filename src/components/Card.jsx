import React from "react"
import busIcon from "../images/busicon.png"
import busIconDark from "../images/busicondark.png"
import googleMap from "../images/google-maps.png"

export default function Card(props){
    
    
    function convertTime(time){
        const [strHours, strMinutes] = time.split(":")
        const hours = parseInt(strHours)
        let convertedHours
        let suffix

        if (hours>=13){
            convertedHours=(hours-12)
            suffix = "PM"
        }
        else{
            convertedHours = hours
            suffix = "AM"
        }
        const convertedStrHours = convertedHours.toString()
        return convertedStrHours+":"+strMinutes+" "+suffix
    }


    const cardClassNames = `card ${props.darkMode ? 'cardDark' : ''} `
    
    return (
        
        <div className={cardClassNames}>
            <img src={props.darkMode ? busIconDark : busIcon} className="bus-icon"></img>

            <div className="bus-info">
                <h2 className="bus-name">BUS {props.busNo}</h2>
                <p className="destination">{props.destination}</p>
            </div>

            <div className="bus-time">
                {convertTime(props.startTime)}
            </div>

            <hr className={props.darkMode ? "dark" : ""}></hr>

            {
                props.latitude ? 
                    <a href={`https://www.google.com/maps?q=${props.latitude},${props.longitude}`}>
                    <img src={googleMap} className="maps-icon"></img>
                    </a>
                    
                    : <h2 className="location-unavail">No location Available</h2>
            }   

        </div>
        
    )

}