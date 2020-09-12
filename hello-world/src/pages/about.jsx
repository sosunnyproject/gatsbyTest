import React from "react"
import Header from "../components/header"
import  { Link } from "gatsby"

export default function About() {
  return (
  <>
  <Link to="/">Home</Link>
  <Header text="About" />
  <h2>intro</h2>
  <h2>interests</h2>
  <h2>account</h2>
  <img src="../images/sosunny_logo.png" alt="logo" width="100%" />

  </>
  )
}
