import React from "react"
import Header from "../components/header"
import  { Link } from "gatsby"

export default function Portfolio() {
  return (
  <>
  <Link to="/">Home</Link>
  <Header text="Portfolio" />
  <h2>VR AR</h2>
  <h2>Exhibition</h2>
  <h2>Hackathon</h2>

  </>
  )
}
