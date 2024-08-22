import React from "react"
import oclogo from '../images/octranspo-logo.jpg'

export default function Navbar(props){

    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img src={oclogo} className="navLogo"></img>
            <h1 className= "nav-title">Stop {props.stopNo}</h1>

            <input type="checkbox" onClick={props.handleClick} id="check" className="toggleInput"></input>
            <label for="check" className="toggler"></label>

        </nav>
    )


}