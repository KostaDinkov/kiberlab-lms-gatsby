import React from "react"
import {Link} from "gatsby"
import Header from "../components/header/header"

export default function Contact(){
  return(
    <div style = {{color:"teal"}}>
      <Link to="/">Home</Link>
      <Header />
      <p>Send us a message!</p>
    </div>
  )
}
