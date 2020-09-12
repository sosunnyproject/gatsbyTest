import React from "react"
import  { Link } from "gatsby"
import Header from "../components/header"


export default function Home() {
  return (
  <>
  <Header>Welcome</Header>
  <Link to="/about/">   <Header text="about" /> </Link>
  <Link to="/portfolio/"><Header text="portfolio" /> </Link>
  <Link to="/blog/"><Header text="blog" /> </Link>
  <Link to="/vitae/"><Header text="vitae" /></Link>
  <img src="../images/sosunny_logo.png" alt="logo" width="100%" />

  </>
  )
}
