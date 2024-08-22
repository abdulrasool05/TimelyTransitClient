import React from "react"
import Content from "./components/Content"
import Landing from "./components/Landing"


export default function App(){

  const [landingPage, setLandingPage] = React.useState(true)

  function toggleContent(){
    setLandingPage(prevState => !prevState)
  }

  return (
    landingPage ? <Landing toggleContent={toggleContent}/> : <Content />
  )

}